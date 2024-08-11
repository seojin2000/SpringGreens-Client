import React, { useState, useCallback, useRef } from 'react';
import styles from '@/styles/ImageSlider.module.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef(0); // 터치 시작 위치
  const touchEndX = useRef(0); // 터치 끝 위치


  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const handleTouchStart = (e) => {
    if (e.touches.length > 0) {
      touchStartX.current = e.touches[0].clientX;
      console.log('Touch start:', touchStartX.current); // 디버깅
    }
  };

  const handleTouchEnd = (e) => {
    if (e.changedTouches.length > 0) {
      touchEndX.current = e.changedTouches[0].clientX;
      console.log('Touch end:', touchEndX.current); // 디버깅
      const touchDifference = touchStartX.current - touchEndX.current;

      if (Math.abs(touchDifference) > 50) { // 터치 이동 거리가 50px 이상일 때 슬라이드 전환
        if (touchDifference > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    }
  };

  return (
    <div className={styles.sliderWrapper}>
      <button onClick={prevSlide} className={`${styles.sliderButton} ${styles.prev}`}>&#10094;</button>
      <div className={styles.sliderContainer}>
        <div 
          className={styles.imageContainer}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img src={images[currentIndex].url} alt={images[currentIndex].name} />
          <div className={styles.productName}>{images[currentIndex].name}</div>
        </div>
      </div>
      <button onClick={nextSlide} className={`${styles.sliderButton} ${styles.next}`}>&#10095;</button>
    </div>
  );
};

export default ImageSlider;