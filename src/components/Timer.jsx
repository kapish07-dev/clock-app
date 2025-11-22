import React, { useState, useRef } from "react";

const Timer = () => {
    const [inputMinutes, setInputMinutes] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const pad = (num) => (num < 10 ? "0" + num : num);

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${pad(m)}:${pad(s)}`;
    };

    const handleStart = () => {
        if (timeLeft <= 0 && inputMinutes > 0) {
            setTimeLeft(inputMinutes * 60);
        }

        if (!isRunning && (timeLeft > 0 || inputMinutes > 0)) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current);
                        setIsRunning(false);
                        alert("⏰ Timer finished!");
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setTimeLeft(0);
        setIsRunning(false);
    };

    return (
        <div className="container">
            <h1 className="title">Timer</h1>
            <div className="screen">{formatTime(timeLeft)}</div>
            <input
                type="number"
                min="0"
                placeholder="Set Minutes"
                value={inputMinutes}
                onChange={(e) => setInputMinutes(Number(e.target.value))}
                disabled={isRunning}
                className="input"
            />
            <div className="buttons">
                {!isRunning ? (
                    <button onClick={handleStart}>Start</button>
                ) : (
                    <button onClick={handleStop}>Stop</button>
                )}
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;
