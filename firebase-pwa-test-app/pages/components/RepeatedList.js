import React from 'react';
//import styles from './styles.module.css';
import styles from '@/styles/MainPage.module.css';

const RepeatedList = () => {
  const items = Array(10).fill(null);

  return (
    <div>
      {items.map((_, index) => (
        <div key={index} className={styles.listBox}>
          <div className={styles.sampleImg}></div>
          <div className={styles.textBox}>
            <p className={styles.title}>무신사 스탠다드 화이트/ 그래이/블랙 맨투맨</p>
            <p className={styles.price}>50,000원</p>
          </div>
          <div className={styles.count}>100</div>
        </div>
      ))}
    </div>
  );
};

export default RepeatedList;