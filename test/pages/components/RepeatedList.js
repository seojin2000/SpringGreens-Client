import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/List.module.css';
import SampleImg from '@/public/images/sampleImg.png';

const ListItem = ({ title, price, count, direction }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showArrow, setShowArrow] = useState(!!direction);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    console.log('Button clicked');
  };

  useEffect(() => {
    if (direction) {
      setShowArrow(true);
      const timer = setTimeout(() => {
        setShowArrow(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [direction]);

  const renderCount = () => (
    <div className={styles.countWrapper}>
      <div className={styles.count}>{count}</div>
      {showArrow && (
        <span className={direction === 'up' ? styles.arrowUp : styles.arrowDown}>
          {direction === 'up' ? '↑' : '↓'}
        </span>
      )}
    </div>
  );

  const boxStyle = {
    width: `${windowWidth}px`,
    maxWidth: '100%',
  };

  if (isExpanded) {
    return (
      <div className={styles.ex_listBox} style={boxStyle}>
        <div className={styles.ex_content} onClick={handleClick}>
          <div className={styles.ex_sampleImg}>
            <Image src={SampleImg} alt="Sample Image"/>
          </div>
          <div className={styles.ex_contentWrapper}>
            <div className={styles.ex_topWrapper}>
              <p className={styles.ex_title}>{title}</p>
              <p className={styles.ex_price}>{price}</p>
            </div>
            <div className={styles.ex_bottomWrapper}>
              <div className={styles.storeMoveLinkWrapper}>
                <p className={styles.ex_storeMove}>상세페이지 이동</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <g clipPath="url(#clip0_224_6599)">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.4712 7.52879C10.5962 7.65381 10.6664 7.82334 10.6664 8.00012C10.6664 8.1769 10.5962 8.34644 10.4712 8.47145L6.6999 12.2428C6.63841 12.3065 6.56484 12.3572 6.48351 12.3922C6.40217 12.4271 6.31469 12.4455 6.22617 12.4463C6.13765 12.4471 6.04986 12.4302 5.96793 12.3967C5.886 12.3631 5.81157 12.3136 5.74897 12.251C5.68638 12.1885 5.63688 12.114 5.60336 12.0321C5.56983 11.9502 5.55297 11.8624 5.55374 11.7739C5.55451 11.6853 5.5729 11.5979 5.60784 11.5165C5.64277 11.4352 5.69356 11.3616 5.75724 11.3001L9.05724 8.00012L5.75724 4.70012C5.6358 4.57439 5.5686 4.40598 5.57012 4.23119C5.57164 4.05639 5.64175 3.88918 5.76536 3.76557C5.88896 3.64197 6.05617 3.57186 6.23097 3.57034C6.40577 3.56882 6.57417 3.63601 6.6999 3.75745L10.4712 7.52879Z" fill="#999999"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_224_6599">
                      <rect width="16" height="16" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <button className={styles.bottomRightButton} onClick={handleButtonClick}>
                찜하기
              </button>
            </div>
          </div>
        </div>
      </div>
    );
} else {
    return (
      <div className={styles.listBox} onClick={handleClick} style={boxStyle}>
        <div className={styles.sampleImg}>
          <Image src={SampleImg} alt="Sample Image" width={80} height={80} />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.textBox}>
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>{price}</p>
          </div>
          {renderCount()}
        </div>
      </div>
    );
  }
};

const RepeatedList = ({ items = [], prevItems = [] }) => {
  const getDirection = (currentItem) => {
    if (prevItems.length === 0) return null;
    const prevIndex = prevItems.findIndex(item => item.id === currentItem.id);
    const currentIndex = items.findIndex(item => item.id === currentItem.id);
    if (prevIndex < currentIndex) return 'down';
    if (prevIndex > currentIndex) return 'up';
    return null;
  };

  return (
    <div className={styles.listSection}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          title={item.title}
          price={item.price}
          count={item.count}
          direction={getDirection(item)}
        />
      ))}
    </div>
  );
};

export default RepeatedList;
