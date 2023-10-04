// Countdown.js
import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer = () => {
  
  const newYearDate = new Date('January 1, 2024 00:00:00').getTime();

  
  const renderer = ({ days, hours, minutes, seconds }) => (
    <div className="countdown-container">
      <div className="countdown-item">
        <div className="countdown-value">{days}</div>
        <div className="countdown-label">Days</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{hours}</div>
        <div className="countdown-label">Hours</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{minutes}</div>
        <div className="countdown-label">Minutes</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{seconds}</div>
        <div className="countdown-label">Seconds</div>
      </div>
    </div>
  );

  return <Countdown date={newYearDate} renderer={renderer} />;
};

export default CountdownTimer;
