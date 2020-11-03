import React, { useState } from "react";
import "./Controls.css";

type Props = {
  setTimeInSeconds: Function;
};

export const Controls = (props: Props) => {
  const { setTimeInSeconds } = props;
  const [intervalsId, setIntervalsId] = useState<number>(0);

  const handlePlayButton = () => {
    let interval: any = setInterval(() => {
      setTimeInSeconds((previousState: number) => previousState + 1);
    }, 20);
    setIntervalsId(interval);
  };

  const handleStopButton = () => {
    clearInterval(intervalsId)
  }
  


  const handleResetButton = () => {
    clearInterval(intervalsId)
    setTimeInSeconds(0)
  }
  
  
  return (
    <section className="controls-container">
      <button onClick={handlePlayButton}>Play</button>
      <button onClick={handleStopButton}>Stop</button>
      <button onClick={handleResetButton}>Reset</button>
    </section>
  );
};
export default Controls;
