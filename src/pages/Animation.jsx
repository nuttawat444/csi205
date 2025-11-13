import { useEffect, useState, useRef } from "react";
import "./Animation.css";

import basketball from "/img/Basketball.png";
import football from "/img/Football.png";
import volleyball from "/img/Volleyball.png";
import human from "/img/Human.png";
import cartoon from "/img/Cartoon.png";
import wood from "/img/wood.png"; 

export default function App() {
  const fieldRef = useRef(null);
  const ballRef = useRef(null);

  const images = {
    Basketball: basketball,
    Football: football,
    Volleyball: volleyball,
    Human: human,
    Cartoon: cartoon
  };

  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [vx] = useState(5);
  const [vy] = useState(5);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [lastSelected, setLastSelected] = useState("none");
  const [imgSrc, setImgSrc] = useState(null);

  const fieldWidth = 650;
  const fieldHeight = 400;
  const ballDiameter = 100;
  const maxX = fieldWidth - ballDiameter - 2;
  const maxY = fieldHeight - ballDiameter - 2;

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setX((prevX) => {
        let newX = goRight ? prevX + vx : prevX - vx;
        if (newX >= maxX) {
          setGoRight(false);
          newX = maxX;
        } else if (newX <= 0) {
          setGoRight(true);
          newX = 0;
        }
        return newX;
      });

      setY((prevY) => {
        let newY = goDown ? prevY + vy : prevY - vy;
        if (newY >= maxY) {
          setGoDown(false);
          newY = maxY;
        } else if (newY <= 0) {
          setGoDown(true);
          newY = 0;
        }
        return newY;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [running, goRight, goDown, vx, vy]);

  const toggleRun = () => setRunning((prev) => !prev);

  const handleSelect = (name) => {
    setLastSelected(name);
    setImgSrc(images[name] || null);
  };

  const handleNone = () => {
    setImgSrc(null);
    setLastSelected("none");
  };

  const ballStyle = {
    left: `${x}px`,
    top: `${y}px`,
    width: `${ballDiameter}px`,
    height: `${ballDiameter}px`,
    position: "relative",
    borderRadius: "50%",
    backgroundColor: imgSrc ? "transparent" : "lightblue",
    backgroundImage: imgSrc ? `url(${imgSrc})` : "",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="anim-container">
      <div
        ref={fieldRef}
        className="anim-field"
        style={{
          width: `${fieldWidth}px`,
          height: `${fieldHeight}px`,
          position: "relative",
          overflow: "hidden",
          border: "2px solid black",
          margin: "0 auto",
          backgroundImage: `url(${wood})`,   
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div ref={ballRef} className="anim-ball" style={ballStyle}></div>
      </div>

      <div className="anim-control d-flex justify-content-between mt-3">
        <button
          className={`btn ${running ? "btn-warning" : "btn-success"}`}
          onClick={toggleRun}
        >
          <i className="bi bi-play"></i>&nbsp;
          {running ? "PAUSE" : "RUN"}
        </button>

        <div className="btn-group">
          <button
            className={`btn ${
              lastSelected === "none" ? "btn-secondary" : "btn-outline-secondary"
            }`}
            onClick={handleNone}
          >
            None
          </button>

          {Object.keys(images).map((name) => (
            <button
              key={name}
              className={`btn ${
                lastSelected === name ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => handleSelect(name)}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
// End of Animation.jsx//