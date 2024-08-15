import React from 'react';
import ImageSlider from './ImageSlider';

const Popup = ({ name, onSetDestination, storeData, error }) => {
  const baseUrl = "http://ec2-3-37-50-217.ap-northeast-2.compute.amazonaws.com:9090";
  
  const imagesWithNames = storeData?.data.shop_list.flatMap(shop =>
    shop.product.map(product => ({
      url: `${baseUrl}${product.product_image_url}`,
      name: product.product_name
    }))
  ) || [];
  
  const getTotalViewCount = (products) => {
    return products.reduce((sum, product) => sum + product.product_view_count, 0);
  };
  
  
  const handleSetDestination = async () => {
    try {
      const response = await fetch(`/api/map/set/destination/${encodeURIComponent(name)}`, {
        method: 'GET',
      });
      const data = await response.json();
      if (data.status_code === 200) {
        // 이거를 보내고 싶어요
        const divideWidth = (data.data.width /2).toFixed(0);
        onSetDestination(data.data.latitude, data.data.longitude, divideWidth);
      } else {
        throw new Error(`목적지 설정 실패: ${data.message}`);
      }
    } catch (error) {
      console.error('목적지 설정 오류:', error);
    }
  };
  
  return (
    <div className="pop-up-container">
      <div className="slider-container">
        {storeData ? <ImageSlider images={imagesWithNames} /> : <p>이미지 로딩 중...</p>}
      </div>
      <p className="title">{name}</p>
      {error && <p className="error">{error}</p>}
      {storeData ? (
        storeData.data.shop_list.map((shop, index) => (
          <div key={index} className="store-container">
            <div className="store-title">
              <span className="shop-name">{shop.shop_name}</span>
              <span className="view-count">{`${getTotalViewCount(shop.product)}`}</span>
            </div>
            <p className="store-info">
              <span className="address">{shop.shop_address_details}</span>
              <span className="contact">{shop.shop_contact}</span>
            </p>
          </div>
        ))
      ) : (
        <p>상점 정보 로딩 중...</p>
      )}
      <button className="enpoint-btn" onClick={handleSetDestination}>
        목적지 설정
      </button>
      <style jsx>{`
        .pop-up-container {
          display: flex;
          flex-direction: column;
          width: 253px;
          height: 400px;
          padding-top: 20px;
          background: rgba(34, 34, 34, 0.99);
          align-items: center;
          overflow-y: auto;
          border-radius: 10px;
        }
        .slider-container {
          width: 205px;
          height: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 10px;
          border-radius : 10px;
          margin-top : 30px;
        }
       .title {
          width: 200px;
          color: #FFF;
          font-family: Roboto;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 1px;
          margin-top: 80px;
          margin-bottom: 20px;
        }
        .store-container {
          width: 207px;
          border-radius: 2px;
          background: #4C4C4C;
          margin-bottom: 20px;
          padding-bottom: 8px;
        }
        .store-title {
          width: 207px;
          padding: 4px 0;
          background: #304FFE;
          color: #FFF;
          font-family: NanumSquare_ac;
          font-size: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .shop-name {
          flex-grow: 1;
          text-align: left;
          padding-left: 10px;
        }
        .view-count {
          flex-shrink: 0;
          padding-right: 10px;
        }
        .store-info {
          color: #FFF;
          font-family: NanumSquare_ac;
          font-size: 12px;
          text-align: center;
          margin: 4px 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .address, .contact {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .address {
          margin-right: 3.5rem; /* 주소와 연락처 사이의 간격 */
        }
        .enpoint-btn {
          display: flex;
          padding: 10px;
          justify-content: center;
          align-items: center;
          border-radius: 6px;
          background: #304FFE;
          color: #FFF;
          border: none;
          cursor: pointer;
          margin-bottom: 20px;
        }
        .error {
          color: red;
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};

export default Popup;