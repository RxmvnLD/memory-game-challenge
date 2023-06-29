import background from "../assets/audio/background.mp3";
import correct from "../assets/audio/correct.mp3";
import incorrect from "../assets/audio/incorrect.mp3";
import ticking from "../assets/audio/ticking.mp3";

const bgAudio = new Audio(background),
  correctAudio = new Audio(correct),
  incorrectAudio = new Audio(incorrect),
  tickingAudio = new Audio(ticking);

export const sounds = {
  bgAudio,
  correctAudio,
  incorrectAudio,
  tickingAudio,
};
