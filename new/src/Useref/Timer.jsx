import React, { useState, useRef } from 'react';
import './Timer.css';

const Timer = () => {
  const [count, setCount] = useState(0);
  const timer = useRef(null);

  const start = () => {
    if (timer.current) return;
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };
  const stop = () => {
    clearInterval(timer.current);
    timer.current = null;
  };
  const reset = () => {
    stop();
    setCount(0);
  };


  return (
    <div className="time">
      <h1>Timer Application</h1>
      <h1>Time: {count}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Timer;
