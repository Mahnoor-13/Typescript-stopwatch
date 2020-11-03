import React, { useState, useEffect } from "react";
import "./Main.css";
import CalculateTimer from "../../Helper/CalculateTimer";
import calculateTimer from "../../Helper/CalculateTimer";
import Controls from "../Controls/Controls";

export const Main = () => {
  const [timeInSceonds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timeArray: Array<number | string> = calculateTimer(timeInSceonds);
    setTimerArray(timeArray);
  }, [timeInSceonds]);
  return (
    <main>
      {" "}
      <section className="time-container">
        <p className="timer-text">{timerArray[0]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[1]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[2]}</p>
      </section>
      <Controls setTimeInSeconds={setTimeInSeconds} />
    </main>
  );
};

export default Main;
