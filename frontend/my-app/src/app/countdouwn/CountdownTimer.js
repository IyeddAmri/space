'use client '
import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const CountdownTimer = ({ duration, remainingTime, unit }) => {
  return (
    <div className="timer">
      <div className="text">{unit}</div>
      <div className="value">{remainingTime}</div>
    </div>
  );
};

export default CountdownTimer;