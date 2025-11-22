import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${ampm}`;
  };

  const pad = (num) => (num < 10 ? "0" + num : num);

  return (
    <div className="container">
      <h1 className="title">Digital Clock</h1>
      <div className="screen">{formatTime(time)}</div>
    </div>
  );
};

export default Clock;
