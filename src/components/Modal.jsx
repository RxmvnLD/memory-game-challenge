import { useEffect } from "react";
import { sounds } from "../helpers/audio";
const Modal = ({ showModal, isCorrect }) => {
  useEffect(() => {
    if (showModal === true)
      isCorrect ? sounds.correctAudio.play() : sounds.incorrectAudio.play();
  }, [showModal]);

  return (
    <div
      className={`${
        showModal ? "z-10" : "z-[-10] hidden"
      } bg-gray-700 w-screen h-screen bg-opacity-80 fixed flex items-center justify-center content-center`}
    >
      <section className="flex flex-col items-center gap-2 justify-center  bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-2 w-64 h-64 text-center ">
        <h2 className="text-4xl">{isCorrect ? "Good job!" : "Wrong cards!"}</h2>
        <h3 className="text-2xl">{isCorrect ? "😁" : "😥"}</h3>
        <p className="text-lg">
          {isCorrect ? "nice! it's a match" : "sorry, but this is not a match"}
        </p>
      </section>
    </div>
  );
};

export default Modal;
