import React, { useState, useCallback, useRef } from 'react';
import styles from '@/styles/ImageSlider.module.css';
import PropTypes from 'prop-types';

const ImageSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef(0); // 터치 시작 위치
  const touchEndX = useRef(0); // 터치 끝 위치


  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      images.length > 0 ? (prevIndex === images.length - 1 ? 0 : prevIndex + 1) : 0
    );
  }, [images]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      images.length > 0 ? (prevIndex === 0 ? images.length - 1 : prevIndex - 1) : 0
    );
  }, [images]);

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  const handleTouchStart = (e) => {
    if (e.touches.length > 0) {
      touchStartX.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (e.changedTouches.length > 0) {
      touchEndX.current = e.changedTouches[0].clientX;
      const touchDifference = touchStartX.current - touchEndX.current;

      if (Math.abs(touchDifference) > 50) {
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
      <div className={styles.sliderContainer} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <div className={styles.imageContainer} >
          <img src={images[currentIndex]?.url} alt={images[currentIndex]?.name} />
          <div className={styles.productName}>{images[currentIndex]?.name}</div>
        </div>
      </div>
      <button onClick={nextSlide} className={`${styles.sliderButton} ${styles.next}`}>&#10095;</button>
    </div>
  );
};


ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageSlider;