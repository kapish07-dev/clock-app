import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Clock from "./components/Clock";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import Alarm from "./components/Alarm";
import "./App.css";
import "./components/Clock.css";

const App = () => {
  return (
    <div className="app-container">
      <nav className="nav">
        <NavLink to="/" end>
          Clock
        </NavLink>
        <NavLink to="/stopwatch">Stopwatch</NavLink>
        <NavLink to="/timer">Timer</NavLink>
        <NavLink to="/alarm">Alarm</NavLink>
      </nav>
      <div className="main-view">
        <Routes>
          <Route path="/" element={<Clock />} />
          <Route path="/stopwatch" element={<Stopwatch />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/alarm" element={<Alarm />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
