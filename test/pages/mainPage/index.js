import React, { useState, useCallback, useEffect } from 'react';
import styles from '@/styles/MainPage.module.css';
import RepeatedList from '../components/RepeatedList';
import FiveSecondTimer from '../components/resetTimer';
import Navbar from '../components/Navbar';

const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [items, setItems] = useState(generateItems());
  const [prevItems, setPrevItems] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const regenerateItems = useCallback(() => {
    setPrevItems(items);
    setItems(generateItems());
  }, [items]);

  function generateItems() {
    return Array(10).fill(null).map((_, index) => ({
      id: index,
      title: "무신사 스탠다드 화이트/ 그래이/블랙 맨투맨",
      price: "50,000원",
      count: Math.floor(Math.random() * 99) + 1
    })).sort((a, b) => b.count - a.count);
  }

  const handleTimerEnd = useCallback(() => {
    setPrevItems(items);
    setItems(prevItems => prevItems.map(item => ({
      ...item,
      count: Math.floor(Math.random() * 99) + 1
    })).sort((a, b) => b.count - a.count));
  }, [items]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPrevItems([]);
    }, 3000);

    return () => clearTimeout(timer);
  }, [items]);

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.menuBox}>
          <button onClick={toggleMenu} className={styles.menuButton}>
            ☰
          </button>
          <span className={styles.menuText}>나의 현재 위치</span>
          <span className={styles.menuText}>APM플레이스</span>
        </div>
        
        <div className={styles.headBox}>
          
          <h3>apm 급상승</h3>
          <FiveSecondTimer onTimerEnd={handleTimerEnd} />
          <div className={styles.sampleRe} onClick={regenerateItems}></div>
        </div>
      </div>

      <div className={styles.listSection}>
        <RepeatedList items={items} prevItems={prevItems} />
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
      <Navbar />
    </div>
    
  );
};

export default MainPage;