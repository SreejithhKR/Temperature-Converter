import "./App.css";
import React, { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    if (value === "") {
      setFahrenheit("");
    } else {
      setFahrenheit(((value * 9) / 5 + 32).toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    if (value === "") {
      setCelsius("");
    } else {
      setCelsius(((value - 32) * (5 / 9)).toFixed(2));
    }
  };

  return (
    <div className="Out">
      <div className="input-box">
        <h4>Fahrenheit</h4>
        <input type="number" id="fahren" value={fahrenheit} onChange={handleFahrenheitChange}/>
      </div>

      <p className="Zequl">↹</p>

      <div className="input-box">
        <h4>Celsius</h4>
        <input type="number" id="celsius" value={celsius} onChange={handleCelsiusChange} />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h2 className="title">Temperature Converter</h2>
      <TemperatureConverter />
    </div>
  );
}

export default App;
