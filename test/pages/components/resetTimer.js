import React, { useState, useEffect } from 'react';

const FiveSecondTimer = ({ onTimerEnd, fontSize = '2rem' }) => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          onTimerEnd(); // 타이머가 0이 되면 콜백 함수 호출
          return 10;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onTimerEnd]);

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const timerStyle = {
    fontSize: fontSize,
    fontWeight: 'bold',
    marginBottom: '1rem',
    fontFamily: 'monospace'
  };

  return (
    <div style={timerStyle}>{formatTime(seconds)}</div>
  );
};

export default FiveSecondTimer;