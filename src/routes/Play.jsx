import shuffle from "../helpers/shuffle";
import { useEffect, useReducer } from "react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Timer from "../components/Timer";
import { useNavigate } from "react-router-dom/dist";
import MuteBtn from "../components/MuteBtn";
import reducer, { initialState, TYPES } from "../helpers/reducer";
const Play = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  ////////////////             EFFECTS             ////////////////

  //shuffle the cards on render
  useEffect(() => {
    dispatch({ type: TYPES.SET_CARDS, payload: shuffle() });
  }, []);

  useEffect(() => {
    if (state.showModal && state.isCorrect === true) {
      setTimeout(() => {
        dispatch({ type: TYPES.SET_SHOW_MODAL, payload: false });
      }, 1000);
    }
  }, [state.showModal, state.isCorrect]);

  //Async calls to reducer
  useEffect(() => {
    if (state.flag === true) {
      setTimeout(() => {
        dispatch({ type: TYPES.SET_FLAG, payload: true });
      }, 1000);
      setTimeout(() => {
        dispatch({ type: TYPES.SET_FLAG, payload: false });
      }, 2000);
    }
  }, [state.flag]);

  //If the user finish before the coundown redirect to /results
  useEffect(() => {
    if (state.matches === 4) {
      setTimeout(() => {
        navigate("/results/true");
      }, 500);
    }
  }, [state.matches]);

  //Checks if the cards selected are the same
  const getData = (cardData) => {
    dispatch({ type: TYPES.SET_SELECTED_CARD, payload: cardData });
  };

  const getTimeOut = (isTimeOver) => {
    if (isTimeOver) {
      setTimeout(() => {
        state.matches === 4
          ? navigate("/results/true")
          : navigate("/results/false");
      }, 500);
    }
  };

  return (
    <>
      <Modal showModal={state.showModal} isCorrect={state.isCorrect} />
      <main className="flex flex-col gap-10 pt-5 md:pt-20 h-screen">
        {/* Timer/music btn container */}
        <div className="flex flex-col items-center gap-5">
          <MuteBtn />
          <Timer sendDataToParent={getTimeOut} />
        </div>
        <section className="h-full content-center mx-auto grid grid-cols-2 gap-5 sm:grid-cols-4 md:gap-10">
          {state.cards.map((card) => (
            <Card
              key={card.id}
              data={card}
              sendDataToParent={getData}
              flipped={
                card.matched ||
                card === state.selectedCard.first ||
                card === state.selectedCard.second
              }
              isDisabled={state.disabled}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Play;
