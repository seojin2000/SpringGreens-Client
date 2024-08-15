import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import OverlayContent from './alart';
import Popup from './Popup';
import SearchBar from './SearchBar';

// 유틸리티 함수
// 배열을 지정된 크기의 청크로 나누는 함수
const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

// Map 컴포넌트
const Map = () => {
  // 상태 변수들
  const [map, setMap] = useState(null);  // 카카오 맵 객체
  const [kakao, setKakao] = useState(null);  // 카카오 API 객체
  const [stores, setStores] = useState([]);  // 상점 목록
  const markersRef = useRef({});  // 마커 참조 객체
  const activeInfoWindowRef = useRef(null);  // 활성 정보 창 참조
  const [userMarker, setUserMarker] = useState(null);  // 사용자 위치 마커
  const [userCircle, setUserCircle] = useState(null);  // 사용자 위치 원
  const [destinationCircle, setDestinationCircle] = useState(null);  // 목적지 원
  const [destinationMarker, setDestinationMarker] = useState(null);  // 목적지 마커
  const [polyline, setPolyline] = useState(null);  // 경로선
  const [watchId, setWatchId] = useState(null);  // 위치 추적 ID
  const [distanceOverlay, setDistanceOverlay] = useState(null);  // 거리 오버레이
  const [isCirclesOverlapping, setIsCirclesOverlapping] = useState(false);  // 원 겹침 여부
  const [overlapOverlay, setOverlapOverlay] = useState(null);  // 겹침 오버레이
  const [showIcon, setShowIcon] = useState(false);  // 아이콘 표시 여부
  const [distanceWorker, setDistanceWorker] = useState(null);  // 거리 계산 워커
  const [selectedStore, setSelectedStore] = useState(null);  // 선택된 상점
  const [customPosition, setCustomPosition] = useState({ lat: 36.9694, lng: 127.8673 });  // 사용자 지정 위치
  const [mapSize, setMapSize] = useState({ width: '100%', height: '100%' });  // 지도 크기
  // 사용자 이동 버튼 활성화 상태
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const R = 30; // 가게 반지름
  const r = 5; // 사용자 원 반지름

  // 지도 크기 동적 조절
  useEffect(() => {
    const updateMapSize = () => {
      setMapSize({
        width: `${window.innerWidth}px`,
        height: `${window.innerHeight}px`
      });
    };

    updateMapSize();
    window.addEventListener('resize', updateMapSize);
    return () => window.removeEventListener('resize', updateMapSize);
  }, []);

  // 지도 크기 변경 시 레이아웃 재설정
  useEffect(() => {
    if (map) {
      map.relayout();
    }
  }, [mapSize, map]);

  // 거리 계산 워커 설정
  useEffect(() => {
    const worker = new Worker('distanceWorker.js');
    setDistanceWorker(worker);
    return () => worker.terminate();
  }, []);

  // 10초 후 사용자 이동 버튼 활성화
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonEnabled(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  // 비동기 거리 계산 함수
  const calculateDistanceAsync = useCallback((lat1, lon1, lat2, lon2) => {
    return new Promise((resolve) => {
      distanceWorker.onmessage = (e) => resolve(e.data);
      distanceWorker.postMessage({ lat1, lon1, lat2, lon2 });
    });
  }, [distanceWorker]);

  // API 호출 함수들

  // 상점 데이터 가져오기
  const fetchStoreData = async (storeName) => {
    try {
      const response = await fetch(`/api/store/${encodeURIComponent(storeName)}`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("Error fetching store data:", error);
      throw error;
    }
  };

  // 상가 거리 데이터 가져오기
  const fetchMallStreetData = async () => {
    try {
      const response = await fetch('/api/map/get/mall/street');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching mall street data:", error);
      throw error;
    }
  };

  // 마커 관련 함수들
  
  // 모든 마커 제거
  const removeAllMarkers = useCallback(() => {
    Object.values(markersRef.current).forEach(({ marker }) => marker.setMap(null));
    markersRef.current = {};
  }, []);

  // 원 색상 업데이트
  const updateCircleColors = useCallback(async (userPosition, destPosition) => {
    if (!userCircle || !destinationCircle) {
      console.error('User circle or destination circle is not initialized');
      return;
    }

    const d = await calculateDistanceAsync(
      userPosition.getLat(), userPosition.getLng(),
      destPosition.getLat(), destPosition.getLng()
    ) * 1000;

    const isOverlapping = d <= R + r;
    const strokeColor = isOverlapping ? '#FF0000' : '#304FFE';
    const fillColor = isOverlapping ? '#FF0000' : '#304FFE';

    userCircle.setOptions({ strokeColor, fillColor, strokeOpacity: 0.8, fillOpacity: 0.3 });
    destinationCircle.setOptions({ strokeColor, fillColor, strokeOpacity: 0.8, fillOpacity: 0.3 });

    setIsCirclesOverlapping(isOverlapping);

    if (isOverlapping) {
      // 원이 겹칠 때의 로직
      removeAllMarkers();
      if (overlapOverlay) overlapOverlay.setMap(null);

      const overlayContainer = document.createElement('div');
      Object.assign(overlayContainer.style, {
        width: '18rem',
        height: '12.3125rem',
        borderRadius: '0.9375rem',
        backgroundColor: '#FFF',
        position: 'relative',
        zIndex: '10'
      });
      const newOverlay = new kakao.maps.CustomOverlay({
        content: overlayContainer,
        map: map,
        position: userPosition,
        zIndex: 10000
      });

      ReactDOM.render(
        <OverlayContent 
          onClose={() => {
            newOverlay.setMap(null);
            setShowIcon(true);
            if (userMarker) userMarker.setMap(map);
            if (userCircle) userCircle.setMap(map);
          }}
          onMove={() => {
            console.log("Move button clicked");
          }}
        />,
        overlayContainer
      );

      setOverlapOverlay(newOverlay);
    } else if (overlapOverlay) {
      overlapOverlay.setMap(null);
    }
  }, [map, kakao, userCircle, destinationCircle, R, r, overlapOverlay, removeAllMarkers, calculateDistanceAsync, userMarker]);

  // 목적지 설정 함수
  const setDestination = useCallback(async (destLat, destLng, storeName = null) => {
    if (map && kakao) {
      // 기존 목적지 관련 오버레이 제거
      [destinationCircle, polyline, distanceOverlay].forEach(item => item && item.setMap(null));

      // 새 목적지 마커 생성 또는 위치 업데이트
      const destPosition = new kakao.maps.LatLng(destLat, destLng);
      if (destinationMarker) {
        destinationMarker.setPosition(destPosition);
      } else {
        const newDestMarker = new kakao.maps.Marker({
          position: destPosition,
          map: map
        });
        setDestinationMarker(newDestMarker);
      }

      // 목적지 원 생성
      const newDestCircle = new kakao.maps.Circle({
        center: destPosition,
        radius: R,
        strokeWeight: 2,
        strokeColor: '#304FFE',
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
        fillColor: '#304FFE',
        fillOpacity: 0.3,
        map: map
      });
      setDestinationCircle(newDestCircle);

      // 사용자 위치와 목적지 사이의 거리 계산 및 표시
      const userPosition = userMarker ? userMarker.getPosition() : map.getCenter();
      const userLat = userPosition.getLat();
      const userLng = userPosition.getLng();

      const distance = await calculateDistanceAsync(userLat, userLng, destLat, destLng);
      const newDistanceOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng((userLat + destLat) / 2, (userLng + destLng) / 2),
        content: `<div style="padding:5px;background:rgba(255,255,255,0.7);border-radius:5px;color:black;">${(distance * 1000).toFixed(0)}m</div>`,
        map: map
      });
      setDistanceOverlay(newDistanceOverlay);

      // 경로선 그리기
      const newPolyline = new kakao.maps.Polyline({
        path: [userPosition, destPosition],
        strokeWeight: 3,
        strokeColor: '#686D76',
        strokeOpacity: 0.7,
        strokeStyle: 'solid'
      });
      newPolyline.setMap(map);
      setPolyline(newPolyline);

      // 지도 범위 설정
      const bounds = new kakao.maps.LatLngBounds();
      bounds.extend(userPosition);
      bounds.extend(destPosition);
      map.setBounds(bounds);

      // 원 색상 업데이트
      updateCircleColors(userPosition, destPosition);

      // 기존 위치 추적 제거
      if (watchId) navigator.geolocation.clearWatch(watchId);

      // 새 위치 추적 설정
      const newWatchId = navigator.geolocation.watchPosition(
        async (position) => {
          const newUserPosition = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
          userMarker.setPosition(newUserPosition);
          userCircle.setCenter(newUserPosition);
          updateCircleColors(newUserPosition, destPosition);
          newPolyline.setPath([newUserPosition, destPosition]);
          const newDistance = await calculateDistanceAsync(newUserPosition.getLat(), newUserPosition.getLng(), destLat, destLng);
          newDistanceOverlay.setPosition(new kakao.maps.LatLng((newUserPosition.getLat() + destLat) / 2, (newUserPosition.getLng() + destLng) / 2));
          newDistanceOverlay.setContent(`<div style="padding:5px;background:white;border-radius:5px;color: black;">${(newDistance * 1000).toFixed(0)}m</div>`);
        },
        (error) => {
          console.error("Error watching user location:", error);
        },
        { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
      );
      setWatchId(newWatchId);

      // 활성 정보 창 닫기
      if (activeInfoWindowRef.current) {
        activeInfoWindowRef.current.close();
        activeInfoWindowRef.current = null;
      }

      // 선택된 상점 설정
      if (storeName) {
        setSelectedStore({ name: storeName, lat: destLat, lng: destLng });
      } else {
        setSelectedStore(null);
      }

      // 상점 목록 업데이트
      const newStores = stores.filter(store => store.name !== storeName);
      newStores.push({ name: storeName || "목적지", lat: destLat, lng: destLng });
      setStores(newStores);
    }
  }, [map, kakao, userMarker, userCircle, destinationCircle, destinationMarker, polyline, watchId, distanceOverlay, updateCircleColors, R, calculateDistanceAsync, stores]);

  // 컴포넌트 언마운트 시 정리
  useEffect(() => {
    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
      if (distanceOverlay) distanceOverlay.setMap(null);
    };
  }, [watchId, distanceOverlay]);

  // 상점 마커 추가 함수
  const addStoreMarker = useCallback((lat, lng, name, id) => {
    if (!map || !kakao) {
      console.error('Map or Kakao object is not initialized');
      return null;
    }

    const position = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
      position: position,
      map: map,
      zIndex: 1
    });

    const content = document.createElement('div');
    const infowindow = new kakao.maps.InfoWindow({
      content: content,
      zIndex: 2
    });

    kakao.maps.event.addListener(marker, 'click', function() {
      if (activeInfoWindowRef.current) {
        activeInfoWindowRef.current.close();
      }
      
      const renderPopup = (storeData = null, error = null) => {
        ReactDOM.render(
          <Popup 
            name={name} 
            onSetDestination={(lat, lng) => setDestination(lat, lng, name)}
            storeData={storeData}
            error={error}
            isDestination={selectedStore && selectedStore.name === name}
          />,
          content
        );
      };

      renderPopup();
      infowindow.open(map, marker);
      activeInfoWindowRef.current = infowindow;

      const clickTimeout = setTimeout(() => {
        kakao.maps.event.addListener(map, 'click', closeInfoWindow);
      }, 100);

      // 상점 데이터 가져오기
      fetch(`/api/map/get/products/map/${encodeURIComponent(name)}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          renderPopup(data);
        })
        .catch(error => {
          console.error("Error fetching store data:", error);
          renderPopup(null, "데이터를 불러오는 데 실패했습니다.");
        });

      // 정보 창 닫기 함수
      function closeInfoWindow() {
        infowindow.close();
        activeInfoWindowRef.current = null;
        kakao.maps.event.removeListener(map, 'click', closeInfoWindow);
        clearTimeout(clickTimeout);
      }
    });

    return { marker, infowindow };
  }, [map, kakao, setDestination, selectedStore]);

  // 지도 초기화 함수
  const initializeMap = useCallback(() => {
    if (window.kakao && window.kakao.maps) {
      const mapContainer = document.getElementById('map');
      const mapOptions = {
        center: new window.kakao.maps.LatLng(36.9692, 127.8717),
        level: 3
      };
      const kakaoMap = new window.kakao.maps.Map(mapContainer, mapOptions);
      setMap(kakaoMap);
      setKakao(window.kakao);

      // 사용자 위치 가져오기 및 마커 설정
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            const userPosition = new window.kakao.maps.LatLng(userLat, userLng);

            kakaoMap.setCenter(userPosition);

            const marker = new window.kakao.maps.Marker({
              position: userPosition,
              map: kakaoMap
            });
            setUserMarker(marker);

            const circle = new window.kakao.maps.Circle({
              center: userPosition,
              radius: r,
              strokeWeight: 2,
              strokeColor: '#304FFE',
              strokeOpacity: 0.8,
              strokeStyle: 'solid',
              fillColor: '#304FFE',
              fillOpacity: 0.3,
              map: kakaoMap
            });
            setUserCircle(circle);
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }
  }, [r]);

  // 카카오 맵 스크립트 로드
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=7b1f96f255bf7055e408cd2e6c47320d&libraries=services&autoload=false`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(initializeMap);
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [initializeMap]);

  // 상점 마커 업데이트
  useEffect(() => {
    if (map && kakao) {
      // 기존 마커 제거
      Object.values(markersRef.current).forEach(({ marker, infowindow }) => {
        if (marker) marker.setMap(null);
        if (infowindow) infowindow.close();
      });
      markersRef.current = {};

      // 새 마커 추가
      stores.forEach(store => {
        const markerInfo = addStoreMarker(store.lat, store.lng, store.name, store.id);
        if (markerInfo) {
          markersRef.current[store.id] = markerInfo;
        }
      });

      // 활성 정보 창 닫기
      if (activeInfoWindowRef.current) {
        activeInfoWindowRef.current.close();
        activeInfoWindowRef.current = null;
      }
    }
  }, [map, kakao, stores, addStoreMarker]);

  // 검색 처리 함수
  const handleSearch = useCallback((query) => {
    if (map && kakao && kakao.maps.services) {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(query, (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();
          let newStores = [];

          // 기존 마커 제거
          Object.values(markersRef.current).forEach(({ marker, infowindow }) => {
            marker.setMap(null);
            infowindow.close();
          });
          markersRef.current = {};

          // 검색 결과로 새 마커 생성
          for (let i = 0; i < data.length; i++) {
            const markerPosition = new kakao.maps.LatLng(data[i].y, data[i].x);
            const newStore = {
              id: data[i].id,
              name: data[i].place_name,
              lat: data[i].y,
              lng: data[i].x,
              address: data[i].address_name,
              phone: data[i].phone
            };
            newStores.push(newStore);
            bounds.extend(markerPosition);

            const markerInfo = addStoreMarker(newStore.lat, newStore.lng, newStore.name, newStore.id);
            markersRef.current[newStore.id] = markerInfo;
          }

          // 지도 범위 조정 및 상점 목록 업데이트
          map.setBounds(bounds);
          setStores(newStores);
        }
      });
    }
  }, [map, kakao, setStores, addStoreMarker]);
  
  // 상가 거리 마커 추가 함수
  const addMarkersByStoreNameList = useCallback(async () => {
    if (map && kakao && kakao.maps.services) {
      try {
        const mallStreetData = await fetchMallStreetData();
        
        // 기존 마커 제거
        Object.values(markersRef.current).forEach(({ marker, infowindow }) => {
          marker.setMap(null);
          infowindow.close();
        });
        markersRef.current = {};

        const bounds = new kakao.maps.LatLngBounds();
        const ps = new kakao.maps.services.Places();
        
        // 상점별 마커 추가 함수
        const searchAndAddMarker = async (storeName, index) => {
          return new Promise((resolve) => {
            ps.keywordSearch(storeName, (data, status) => {
              if (status === kakao.maps.services.Status.OK) {
                const place = data[0];
                const lat = place.y;
                const lng = place.x;
                const position = new kakao.maps.LatLng(lat, lng);

                const markerInfo = addStoreMarker(lat, lng, storeName, index.toString());
                markersRef.current[index.toString()] = markerInfo;

                bounds.extend(position);
              } else {
                console.log(`No results found for ${storeName}`);
              }
              resolve();
            }, {
              location: new kakao.maps.LatLng(mallStreetData.data.standard_position.Latitude, mallStreetData.data.standard_position.longitude),
              radius: 5000
            });
          });
        };

        // 청크 단위로 마커 추가
        const chunks = chunkArray(mallStreetData.data.mall_name_list, 5);
        for (const chunk of chunks) {
          await Promise.all(chunk.map((storeName, index) => searchAndAddMarker(storeName, index)));
        }

        // 지도 범위 조정
        map.setBounds(bounds);
      } catch (error) {
        console.error("Error in addMarkersByStoreNameList:", error);
      }
    }
  }, [map, kakao, addStoreMarker, fetchMallStreetData]);

  // 상가 거리 버튼 클릭 핸들러
  const handleMallStreetButtonClick = () => {
    addMarkersByStoreNameList();
  };

  // 사용자 지정 위치로 이동 함수
  const moveToCustomPosition = useCallback(() => {
    if (map && kakao && userMarker && userCircle) {
      const newPosition = new kakao.maps.LatLng(customPosition.lat, customPosition.lng);
      
      // 사용자 마커 및 원 이동
      userMarker.setPosition(newPosition);
      userCircle.setPosition(newPosition);
      map.setCenter(newPosition);

      
      // 목적지가 설정되어 있다면 경로와 거리 정보 업데이트
      if (destinationMarker) {
        const destPosition = destinationMarker.getPosition();
        const newPolyline = new kakao.maps.Polyline({
          path: [newPosition, destPosition],
          strokeWeight: 3,
          strokeColor: '#686D76',
          strokeOpacity: 0.7,
          strokeStyle: 'solid'
        });
        if (polyline) polyline.setMap(null);
        newPolyline.setMap(map);
        setPolyline(newPolyline);

        // 거리 계산 및 표시 업데이트
        calculateDistanceAsync(newPosition.getLat(), newPosition.getLng(), destPosition.getLat(), destPosition.getLng())
          .then(distance => {
            if (distanceOverlay) {
              distanceOverlay.setPosition(new kakao.maps.LatLng((newPosition.getLat() + destPosition.getLat()) / 2, (newPosition.getLng() + destPosition.getLng()) / 2));
              distanceOverlay.setContent(`<div style="padding:5px;background:white;border-radius:5px;color:black;">${(distance * 1000).toFixed(0)}m</div>`);
            }
          });

        // 원 색상 업데이트
        updateCircleColors(newPosition, destPosition);
      }
    }
  }, [map, kakao, userMarker, userCircle, customPosition, destinationMarker, polyline, distanceOverlay, calculateDistanceAsync, updateCircleColors]);

  // 컴포넌트 렌더링
  return (
    <div style={{ position: 'relative', width: mapSize.width, height: mapSize.height }}>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
      <SearchBar onSearch={handleSearch} />
      <button 
        onClick={handleMallStreetButtonClick}
        style={{
          position: 'absolute',
          top: '6.5rem',
          left: '20px',
          padding: '0.5rem 1rem',
          backgroundColor: '#304FFE',
          color: 'white',
          border: 'none',
          borderRadius: '0.3125rem',
          cursor: 'pointer',
          zIndex: 10
        }}
      >
        상가거리이동
      </button>
      {/* 사용자 이동 버튼 */}
      <button 
        onClick={moveToCustomPosition}
        style={{
          position: 'absolute',
          top: '9rem',
          left: '20px',
          padding: '0.5rem 1rem',
          backgroundColor: isButtonEnabled ? '#304FFE' : '#A0A0A0',
          color: 'white',
          border: 'none',
          borderRadius: '0.3125rem',
          cursor: isButtonEnabled ? 'pointer' : 'not-allowed',
          zIndex: 10
        }}
        disabled={!isButtonEnabled}
      >
        사용자 이동
      </button>
      <Navbar />
      {showIcon && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          cursor: 'pointer',
          zIndex: 10
        }} onClick={() => {
          setShowIcon(false);
          if (overlapOverlay) {
            overlapOverlay.setMap(map);
          }
        }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Group 232">
              <path id="Vector" d="M19 27H21.6667V19H19V27ZM20.3333 16.3333C20.7111 16.3333 21.028 16.2053 21.284 15.9493C21.54 15.6933 21.6676 15.3769 21.6667 15C21.6658 14.6231 21.5378 14.3067 21.2827 14.0507C21.0276 13.7947 20.7111 13.6667 20.3333 13.6667C19.9556 13.6667 19.6391 13.7947 19.384 14.0507C19.1289 14.3067 19.0009 14.6231 19 15C18.9991 15.3769 19.1271 15.6938 19.384 15.9507C19.6409 16.2076 19.9573 16.3351 20.3333 16.3333ZM20.3333 33.6667C18.4889 33.6667 16.7556 33.3164 15.1333 32.616C13.5111 31.9156 12.1 30.9658 10.9 29.7667C9.7 28.5676 8.75022 27.1564 8.05067 25.5333C7.35111 23.9102 7.00089 22.1769 7 20.3333C6.99911 18.4898 7.34934 16.7564 8.05067 15.1333C8.752 13.5102 9.70178 12.0991 10.9 10.9C12.0982 9.70089 13.5093 8.75111 15.1333 8.05067C16.7573 7.35022 18.4907 7 20.3333 7C22.176 7 23.9093 7.35022 25.5333 8.05067C27.1573 8.75111 28.5684 9.70089 29.7667 10.9C30.9649 12.0991 31.9151 13.5102 32.6173 15.1333C33.3196 16.7564 33.6693 18.4898 33.6667 20.3333C33.664 22.1769 33.3138 23.9102 32.616 25.5333C31.9182 27.1564 30.9684 28.5676 29.7667 29.7667C28.5649 30.9658 27.1538 31.916 25.5333 32.6173C23.9129 33.3187 22.1796 33.6684 20.3333 33.6667Z" fill="#3554FE"/>
              <circle id="Ellipse 14" cx="20" cy="20" r="20" fill="#3554FE" fillOpacity="0.25"/>
              <circle id="Ellipse 15" cx="20" cy="20" r="16" fill="#3554FE" fillOpacity="0.25"/>
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Map;