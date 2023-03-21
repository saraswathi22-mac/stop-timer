import React, { useEffect, useState } from "react";

const StopTimer = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 100);
      }, 100);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="font-bold">
      <h2 className="text-5xl tracking-wide text-center uppercase bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-500 mt-8">
        Stop timer
      </h2>

      <div className="flex justify-center text-4xl pt-12">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="flex justify-center gap-4 pt-12 text-2xl">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)} className="btn-primary">
            Start
          </button>
        )}
        {timerOn && (
          <button onClick={() => setTimerOn(false)} className="btn-primary">
            Stop
          </button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)} className="btn-primary">
            Reset
          </button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)} className="btn-primary">
            Resume
          </button>
        )}
      </div>
    </div>
  );
};

export default StopTimer;
