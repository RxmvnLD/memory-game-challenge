import { useEffect, useState } from "react";
import { sounds } from "../helpers/audio";
import soundOn from "../assets/img/sound--on.svg";
import soundOff from "../assets/img/sound--off.svg";
const MuteBtn = () => {
  const [isPaused, setIsPaused] = useState(false);
  useEffect(() => {
    isPaused ? sounds.bgAudio.pause() : sounds.bgAudio.play();
  }, [isPaused]);
  return (
    <div
      className="w-10 bg-gradient-to-r from-violet-200 to-pink-200 rounded-3xl self-end mr-5 md:mr-20 lg:mr-44 xl:mr-96 "
      onClick={() => {
        return setIsPaused(!isPaused);
      }}
    >
      {isPaused ? <img src={soundOn} /> : <img src={soundOff} />}
    </div>
  );
};

export default MuteBtn;
