import React, { useState, useEffect, useCallback, useRef } from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar';
import OverlayContent from '../components/alart';
import Popup from '../components/Popup';
import SearchBar from '../components/SearchBar';
import { useAuth } from '../../src/context/AuthContext';

let R = 0; // distance // 이건 고정되어 있음 안되는거
const r = 5; // 사용자 원 반지름

// 유틸리티 함수
const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

const Map = () => {
  const { accessToken } = useAuth();
  const [map, setMap] = useState(null);
  const [kakao, setKakao] = useState(null);
  const [stores, setStores] = useState([]);
  const markersRef = useRef({});
  const activeInfoWindowRef = useRef(null);
  const [userMarker, setUserMarker] = useState(null);
  const [userCircle, setUserCircle] = useState(null);
  const [destinationCircle, setDestinationCircle] = useState(null);
  const [destinationMarker, setDestinationMarker] = useState(null);
  const [polyline, setPolyline] = useState(null);
  const [watchId, setWatchId] = useState(null);
  const [distanceOverlay, setDistanceOverlay] = useState(null);
  const [isCirclesOverlapping, setIsCirclesOverlapping] = useState(false);
  const [overlapOverlay, setOverlapOverlay] = useState(null);
  const [showIcon, setShowIcon] = useState(false);
  const [distanceWorker, setDistanceWorker] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [mapSize, setMapSize] = useState({ width: '100vw', height: '100vh' });
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [overlayPortal, setOverlayPortal] = useState(null);

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

  useEffect(() => {
    if (map) {
      map.relayout();
    }
  }, [mapSize, map]);

  useEffect(() => {
    const worker = new Worker('distanceWorker.js');
    setDistanceWorker(worker);
    return () => worker.terminate();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonEnabled(true);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const calculateDistanceAsync = useCallback((lat1, lon1, lat2, lon2) => {
    return new Promise((resolve) => {
      distanceWorker.onmessage = (e) => resolve(e.data);
      distanceWorker.postMessage({ lat1, lon1, lat2, lon2 });
    });
  }, [distanceWorker]);

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

  const fetchMallStreetData = async() => {
    console.log("액세스 토큰 map :  ",  accessToken);
    try {
      const response = await fetch('/api/map/get/mall/street', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ` + accessToken,
        },
      });
  
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error("Error fetching mall street data:", error);
      throw error;
    }
  };

  const removeAllMarkers = useCallback(() => {
    Object.values(markersRef.current).forEach(({ arriveMarker }) => arriveMarker.setMap(null));
    markersRef.current = {};
  }, []);

  const showCenteredOverlay = useCallback(() => {
    if (!overlayPortal) {
      const portalContainer = document.createElement('div');
      portalContainer.style.position = 'fixed';
      portalContainer.style.top = '50%';
      portalContainer.style.left = '50%';
      portalContainer.style.transform = 'translate(-50%, -50%)';
      portalContainer.style.zIndex = '10000';
      document.body.appendChild(portalContainer);
      setOverlayPortal(portalContainer);
    }

    ReactDOM.render(
      <OverlayContent 
        onClose={() => {
          if (overlayPortal) {
            ReactDOM.unmountComponentAtNode(overlayPortal);
            document.body.removeChild(overlayPortal);
            setOverlayPortal(null);
          }
          setShowIcon(true);
          if (userMarker) userMarker.setMap(map);
          if (userCircle) userCircle.setMap(map);
        }}
        onMove={() => {
          console.log("Move button clicked");
        }}
      />,
      overlayPortal
    );
  }, [overlayPortal, setShowIcon, userMarker, userCircle, map]);

  const updateCircleColors = useCallback(async (userPosition, destPosition) => {
    if (!userCircle || !destinationCircle) {
      console.error('User circle or destination circle is not initialized');
      return;
    }

    const distance = await calculateDistanceAsync(
      userPosition.getLat(), userPosition.getLng(),
      destPosition.getLat(), destPosition.getLng()
    ) * 1000;

    const isOverlapping = (distance).toFixed(0) <= R+r;
    console.log("isOverlapping", isOverlapping);
    console.log("distance and R+r : ", (distance).toFixed(0), R+r);

    const strokeColor = isOverlapping ? '#0051ff' : '#F08080';
    const fillColor = isOverlapping ? '#0051ff' : '#F08080';

    userCircle.setOptions({ strokeColor, fillColor, strokeOpacity: 0.8, fillOpacity: 0.3 });
    destinationCircle.setOptions({ strokeColor, fillColor, strokeOpacity: 0.8, fillOpacity: 0.3 });

    if (isOverlapping) {
      console.log("isOverlapping is true");

      if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        setWatchId(null);
      }

      removeAllMarkers();
      showCenteredOverlay();
    } else if (overlayPortal) {
      ReactDOM.unmountComponentAtNode(overlayPortal);
      document.body.removeChild(overlayPortal);
      setOverlapOverlay(null);
    }
  }, [map, kakao, userCircle, destinationCircle, R, r, removeAllMarkers, calculateDistanceAsync, userMarker, watchId, showCenteredOverlay, overlayPortal]);

  const setDestination = useCallback(async (destLat, destLng, storeName = null, width) => {
    if (map && kakao) {
      [destinationCircle, polyline, distanceOverlay].forEach(item => item && item.setMap(null));

      const destPosition = new kakao.maps.LatLng(destLat, destLng);
      if (destinationMarker) {
        destinationMarker.setPosition(destPosition);
      } else {
      }

      R = Number(width);

      const newDestCircle = new kakao.maps.Circle({
        center: destPosition,
        radius: R,
        strokeWeight: 2,
        strokeColor: '#F08080',
        strokeOpacity: 0.8,
        strokeStyle: 'solid',
        fillColor: '#F08080',
        fillOpacity: 0.3,
        map: map
      });
      setDestinationCircle(newDestCircle);

      const userPosition = userMarker ? userMarker.getPosition() : map.getCenter();
      const userLat = userPosition.getLat();
      const userLng = userPosition.getLng();

      const distance = await calculateDistanceAsync(userLat, userLng, destLat, destLng);
      const newDistanceOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng((userLat + destLat) / 2, (userLng + destLng) / 2),
        content: `<div style="padding:5px;background:white;border-radius:5px;color:black;">${(distance * 1000).toFixed(0)}m</div>`,
        map: map
      });
      setDistanceOverlay(newDistanceOverlay);

      const newPolyline = new kakao.maps.Polyline({
        path: [userPosition, destPosition],
        strokeWeight: 3,
        strokeColor: '#F08080',
        strokeOpacity: 0.7,
        strokeStyle: 'solid'
      });
      newPolyline.setMap(map);
      setPolyline(newPolyline);

      const bounds = new kakao.maps.LatLngBounds();
      bounds.extend(userPosition);
      bounds.extend(destPosition);
      map.setBounds(bounds);

      if (watchId) navigator.geolocation.clearWatch(watchId);

      const newWatchId = navigator.geolocation.watchPosition(
        async (position) => {
          const newUserLat = position.coords.latitude;
          const newUserLng = position.coords.longitude;
          const newUserPosition = new kakao.maps.LatLng(newUserLat, newUserLng);
          
          userMarker.setPosition(newUserPosition);
          userCircle.setPosition(newUserPosition);
          
          updateCircleColors(newUserPosition, destPosition);
          
          newPolyline.setPath([newUserPosition, destPosition]);
          
          const newDistance = await calculateDistanceAsync(newUserLat, newUserLng, destLat, destLng);
          console.log("새로운 거리", newDistance);
          newDistanceOverlay.setPosition(new kakao.maps.LatLng((newUserLat + destLat) / 2, (newUserLng + destLng) / 2));
          newDistanceOverlay.setContent(`<div style="padding:5px;background:white;border-radius:5px;color:black;">${(newDistance * 1000).toFixed(0)}m</div>`);
        },
        (error) => {
          console.error("Error watching user location:", error);
        },
        { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
      );
      setWatchId(newWatchId);

      if (activeInfoWindowRef.current) {
        activeInfoWindowRef.current.close();
        activeInfoWindowRef.current = null;
      }

      if (storeName) {
        setSelectedStore({ name: storeName, lat: destLat, lng: destLng });
      } else {
        setSelectedStore(null);
      }

      const newStores = stores.filter(store => store.name !== storeName);
      newStores.push({ name: storeName || "목적지", lat: destLat, lng: destLng });
      setStores(newStores);
    }
  }, [map, kakao, userMarker, userCircle, destinationCircle, destinationMarker, polyline, watchId, distanceOverlay, R, calculateDistanceAsync, stores, updateCircleColors]);

  useEffect(() => {
    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
      if (distanceOverlay) distanceOverlay.setMap(null);
    };
  }, [watchId, distanceOverlay]);

  const addStoreMarker = useCallback((lat, lng, name, id) => {
    if (!map || !kakao) {
      console.error('Map or Kakao object is not initialized');
      return null;
    }
    const arriveSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/blue_b.png',
    arriveSize = new window.kakao.maps.Size(50, 45), 
    arriveOption = { 
        offset: new window.kakao.maps.Point(15, 43)
    };
    
    const position = new kakao.maps.LatLng(lat, lng);
    const arriveImage = new window.kakao.maps.MarkerImage(arriveSrc, arriveSize, arriveOption);
    
    const arriveMarker = new window.kakao.maps.Marker({  
        map: map,
        position: position,
        image: arriveImage,
        zIndex: 1,
    });

    const content = document.createElement('div');
    const infowindow = new kakao.maps.InfoWindow({
      content: content,
      zIndex: 2
    });

    kakao.maps.event.addListener(arriveMarker, 'click', function() {
      if (activeInfoWindowRef.current) {
        activeInfoWindowRef.current.close();
      }
      
      const renderPopup = (storeData = null, error = null) => {
        ReactDOM.render(
          <Popup 
            name={name} 
            onSetDestination={(lat, lng, width) => setDestination(lat, lng, name, width)}
            storeData={storeData}
            error={error}
            isDestination={selectedStore && selectedStore.name === name}
          />,
          content
        );
      };

      renderPopup();
      infowindow.open(map, arriveMarker);
      activeInfoWindowRef.current = infowindow;

      const clickTimeout = setTimeout(() => {
        kakao.maps.event.addListener(map, 'click', closeInfoWindow);
      }, 100);

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

      function closeInfoWindow() {
        infowindow.close();
        activeInfoWindowRef.current = null;
        kakao.maps.event.removeListener(map, 'click', closeInfoWindow);
        clearTimeout(clickTimeout);
      }
    });

    return { arriveMarker, infowindow };
  }, [map, kakao, setDestination, selectedStore]);

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

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
            const userPosition = new window.kakao.maps.LatLng(userLat, userLng);
  
            kakaoMap.setCenter(userPosition);
            
            const imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png',
                imageSize = new window.kakao.maps.Size(64, 69),
                imageOption = {offset: new window.kakao.maps.Point(27, 69)};

            const markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

            const marker = new window.kakao.maps.Marker({
                position: userPosition, 
                image: markerImage,
                map: kakaoMap,
            });
          
            setUserMarker(marker);
            const circle = new window.kakao.maps.Circle({
              center: userPosition,
              radius: r,
              strokeWeight: 2,
              strokeColor: '#F08080',
              strokeOpacity: 0.8,
              strokeStyle: 'solid',
              fillColor: '#F08080',
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

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=50912e872dcc098ce3db6b205dd83c96&libraries=services&autoload=false`;
  
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(initializeMap);
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [initializeMap]);

  useEffect(() => {
    if (map && kakao) {
      Object.values(markersRef.current).forEach(({ arriveMarker, infowindow }) => {
        if (arriveMarker) arriveMarker.setMap(null);
        if (infowindow) infowindow.close();
      });
      markersRef.current = {};

      stores.forEach(store => {
        const markerInfo = addStoreMarker(store.lat, store.lng, store.name, store.id);
        if (markerInfo) {
          markersRef.current[store.id] = markerInfo;
        }
      });

      if (activeInfoWindowRef.current) {
        activeInfoWindowRef.current.close();
        activeInfoWindowRef.current = null;
      }
    }
  }, [map, kakao, stores, addStoreMarker]);

  const handleSearch = useCallback((query) => {
    if (map && kakao && kakao.maps.services) {
      const ps = new kakao.maps.services.Places();
      ps.keywordSearch(query, (data, status, _pagination) => {
        if (status === kakao.maps.services.Status.OK) {
          const bounds = new kakao.maps.LatLngBounds();
          let newStores = [];

          Object.values(markersRef.current).forEach(({ arriveMarker, infowindow }) => {
            arriveMarker.setMap(null);
            infowindow.close();
          });
          markersRef.current = {};

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

          map.setBounds(bounds);
          setStores(newStores);
        }
      });
    }
  }, [map, kakao, setStores, addStoreMarker]);
  
  const addMarkersByStoreNameList = useCallback(async () => {
    if (map && kakao && kakao.maps.services) {
      try {
        const mallStreetData = await fetchMallStreetData();
  
        Object.values(markersRef.current).forEach(({ arriveMarker, infowindow }) => {
          arriveMarker.setMap(null);
          infowindow.close();
        });
        markersRef.current = {};
  
        console.log(mallStreetData);
        const latitude = mallStreetData.data.standard_position.latitude;  
        const longitude = mallStreetData.data.standard_position.longitude;
        console.log("Center Coordinates:", latitude, longitude);
  
        const centerPosition = new kakao.maps.LatLng(latitude, longitude);
        map.setCenter(centerPosition);
        map.setLevel(3, { animate: true });
        const bounds = new kakao.maps.LatLngBounds();
        const ps = new kakao.maps.services.Places();
        
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
              location: centerPosition,
              radius: 5000
            });
          });
        };
        
        const chunks = chunkArray(mallStreetData.data.mall_name_list, 5);
        for (const chunk of chunks) {
          await Promise.all(chunk.map((storeName, index) => searchAndAddMarker(storeName, index)));
        }
        map.setBounds(bounds);
      } catch (error) {
        console.error("Error in addMarkersByStoreNameList:", error);
      }
    }
  }, [map, kakao, addStoreMarker, fetchMallStreetData]);

  const handleMallStreetButtonClick = () => {
    addMarkersByStoreNameList();
  };

  const moveToCustomPosition = useCallback(() => {
    map.setLevel(1);
    
    if (map && kakao && userMarker && userCircle) {
      console.log("click custom postion");
      navigator.geolocation.getCurrentPosition((position) => {
        const newPosition = new kakao.maps.LatLng(position.coords.latitude, position.coords.longitude);
        userMarker.setPosition(newPosition);
        userCircle.setPosition(newPosition);

        map.setCenter(newPosition);
        map.setLevel(1);
        
        if (destinationCircle && destinationMarker) {
          const destPosition = destinationMarker.getPosition();

          updateCircleColors(newPosition, destPosition);

          const newPolyline = new kakao.maps.Polyline({
            path: [newPosition, destPosition],
            strokeWeight: 3,
            strokeColor: '#F08080',
            strokeOpacity: 0.7,
            strokeStyle: 'solid'
          });

          if (polyline) polyline.setMap(null);
          newPolyline.setMap(map);
          setPolyline(newPolyline);

          calculateDistanceAsync(newPosition.getLat(), newPosition.getLng(), destPosition.getLat(), destPosition.getLng())
            .then(distance => {
              if (distanceOverlay) {
                distanceOverlay.setPosition(new kakao.maps.LatLng((newPosition.getLat() + destPosition.getLat()) / 2, (newPosition.getLng() + destPosition.getLng()) / 2));
                distanceOverlay.setContent(`<div style="padding:5px;background:white;border-radius:5px;color:black;">${(distance * 1000).toFixed(0)}m</div>`);
              }
            });
        }
      })
    } else {
      console.log("custom position not initialized");
    }
  }, [map, kakao, userMarker, userCircle, destinationMarker, polyline, distanceOverlay, calculateDistanceAsync, updateCircleColors]);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow : 'auto' }}>
      <div id="map" style={{ 
        width: '100vw', 
        height: 'calc(100% - 70px)',
        overflow: 'auto' }}>
      </div>
      <SearchBar onSearch={handleSearch} />
      <button 
        onClick={handleMallStreetButtonClick}
        style={{
          width: '6rem',
          height: '1.8rem',
          position: 'absolute',
          top: '5rem',
          padding: '0.38rem, 0.44rem',
          left: '10px',
          backgroundColor: '#304FFE',
          color: 'white',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
          zIndex: 10
        }}
      >
        상가거리이동
      </button>
      
      <Navbar />

      <button onClick={() => moveToCustomPosition()} style={{
        position: 'absolute',
        bottom: '100px',
        left: '10px',
        padding: '10px',
        backgroundColor: '#304FFE',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.0.6)',
        zIndex: 10
      }}>
        사용자 위치 이동
        {showIcon && (
          <div style={{
            position: 'fixed',
            bottom: '10%',
            left: '90%',
            transform: 'translateX(-50%)',
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
      </button>      
    </div>
  );
};

export default Map;
