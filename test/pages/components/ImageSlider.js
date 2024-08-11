import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/ImageSlider.module.css';

const ImageSlider = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      images.length > 0 ? (prevIndex === images.length - 1 ? 0 : prevIndex + 1) : 0
    );
  }, [images, images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      images.length > 0 ? (prevIndex === 0 ? images.length - 1 : prevIndex - 1) : 0
    );
  }, [images, images.length]);

  if (images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className={styles.sliderWrapper}>
      <button onClick={prevSlide} className={`${styles.sliderButton} ${styles.prev}`}>&#10094;</button>
      <div className={styles.sliderContainer}>
        <div className={styles.imageContainer}>
          <img src={images[currentIndex].url} alt={images[currentIndex].name} />
          <div className={styles.productName}>{images[currentIndex].name}</div>
        </div>
      </div>
      <button onClick={nextSlide} className={`${styles.sliderButton} ${styles.next}`}>&#10095;</button>
    </div>
  );
};

// PropTypes를 사용해 prop 검증
ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

export default ImageSlider;
