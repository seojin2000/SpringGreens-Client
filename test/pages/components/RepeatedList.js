import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/List.module.css';
import SampleImg from '@/public/images/sampleImg.png';

const ListItem = ({ title, price, count, direction }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showArrow, setShowArrow] = useState(!!direction);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    // 버튼 클릭 시 수행할 작업을 여기에 추가하세요
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

  if (isExpanded) {
    return (
      <div className={styles.ex_listBox}>
        <div className={styles.ex_content} onClick={handleClick}>
          <div className={styles.ex_sampleImg}>
            <Image src={SampleImg} alt="Sample Image" width={320} height={218} />
          </div>
          <div className={styles.ex_contentWrapper}>
            <div className={styles.ex_textBox}>
              <div className={styles.ex_titlePriceWrapper}>
                <p className={styles.ex_title}>{title}</p>
                <p className={styles.ex_price}>{price}</p>
              </div>
                <p className={styles.ex_storeMove}>상세페이지 이동</p>
            </div>
          </div>
        </div>
        <button className={styles.bottomRightButton} onClick={handleButtonClick}>
          찜하기
        </button>
      </div>
    );
  } else {
    return (
      <div className={styles.listBox} onClick={handleClick}>
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