import React, { useState } from 'react';
import styles from '@/styles/MainPage.module.css';
import RepeatedList from './RepeatedList';

const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.menuBox}>
          <button onClick={toggleMenu} className={styles.menuButton}>
            ☰
          </button>
        </div>
        
        <div className={styles.headBox}>
          <h3>실시간 급상승</h3>
          <div className={styles.sampleTimer}></div>
          <div className={styles.sampleRe}></div>
        </div>
      </div>

      <div className={styles.listSection}>
        <RepeatedList />
      </div>

      {menuOpen && (
        <div className={styles.menuContent}>
          <ul className={styles.menuList}>
            <li>메뉴 항목 1</li>
            <li>메뉴 항목 2</li>
            <li>메뉴 항목 3</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MainPage;