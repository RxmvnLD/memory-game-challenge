import { useEffect, useState } from "react";
import { sounds } from "../helpers/audio";
const Timer = ({ sendDataToParent }) => {
  const [timeLeft, setTimeLeft] = useState(30);
  useEffect(() => {
    timeLeft <= 10 && timeLeft > 0
      ? sounds.tickingAudio.play()
      : sounds.tickingAudio.pause();

    if (timeLeft === 0) {
      sendDataToParent(true);
      return;
    }
    setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
  }, [timeLeft]);

  return (
    <h1
      className={` text-4xl sm:text-6xl ${
        timeLeft <= 20 ? "text-yellow-200" : ""
      } ${timeLeft <= 10 ? "text-red-400" : ""}`}
    >
      Time left: {timeLeft}
    </h1>
  );
};

export default Timer;
