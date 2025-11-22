import React, { useState, useEffect } from "react";

const Alarm = () => {
  const [alarmTime, setAlarmTime] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmSet, setAlarmSet] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);

      const currentStr = now.toTimeString().substring(0, 5);
      if (alarmTime === currentStr && alarmSet && !triggered) {
        setTriggered(true);
        alert("⏰ Alarm Ringing!");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [alarmTime, alarmSet, triggered]);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${pad(hours)}:${pad(minutes)} ${ampm}`;
  };

  const pad = (num) => (num < 10 ? "0" + num : num);

  const handleSetAlarm = () => {
    if (alarmTime) {
      setAlarmSet(true);
      setTriggered(false);
    }
  };

  const handleClearAlarm = () => {
    setAlarmSet(false);
    setAlarmTime("");
    setTriggered(false);
  };

  return (
    <div className="container">
      <h1 className="title">Alarm</h1>
      <div className="screen">Now: {formatTime(currentTime)}</div>
      <input
        type="time"
        value={alarmTime}
        onChange={(e) => setAlarmTime(e.target.value)}
        disabled={alarmSet}
        className="input"
      />
      <div className="buttons">
        {!alarmSet ? (
          <button onClick={handleSetAlarm}>Set Alarm</button>
        ) : (
          <button onClick={handleClearAlarm}>Clear Alarm</button>
        )}
      </div>
    </div>
  );
};

export default Alarm;
