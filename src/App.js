import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours() % 12;

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = ((minutes * 60 + seconds) / 3600) * 360;
  const hourDeg = ((hours * 3600 + minutes * 60 + seconds) / 43200) * 360;

  return (
    <div className="watch">
      <span className='hand name'>Analog Clock</span>
      
      <div className="hand second-hand" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
      <div className="hand minute-hand" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
      <div className="hand hour-hand" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
      <span className='hand point'></span>
      
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((number) => (
        <div key={number} className={`number number${number}`}>
          {number}
        </div>
      ))}
    </div>
  );
};

export default App;
