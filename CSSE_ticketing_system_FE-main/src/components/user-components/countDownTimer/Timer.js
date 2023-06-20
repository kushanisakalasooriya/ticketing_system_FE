import React from 'react';
import CountdownTimer from './CountDownTimer';
import './Timer.css';

export default function Timer() {

  const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;
  const NOW_IN_MS = 1667147792764;
  // new Date().getTime();
  const dateTimeAfterOneDay = NOW_IN_MS + ONE_DAY_IN_MS;

  return (
    <div>
      <h1>Countdown Timer</h1>

      <h2>Expires after 1 day!!!</h2>
      <CountdownTimer targetDate={dateTimeAfterOneDay} />
    </div>
  );
}