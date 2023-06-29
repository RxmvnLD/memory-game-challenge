const initialState = {
  cards: [],
  selectedCard: { first: null, second: null },
  disabled: false,
  showModal: false,
  isCorrect: false,
  matches: 0,
  flag: false,
};

const TYPES = {
  SET_CARDS: "SET_CARDS",
  SET_SELECTED_CARD: "SET_SELECTED_CARD",
  SET_DISABLED: "SET_DISABLED",
  SET_SHOW_MODAL: "SET_SHOW_MODAL",
  SET_IS_CORRECT: "SET_IS_CORRECT",
  SET_MATCHES: "SET_MATCHES",
  SET_FLAG: "SET_FLAG",
};
export default function reducer(state, action) {
  switch (action.type) {
    case TYPES.SET_CARDS:
      return { ...state, cards: action.payload };
    case TYPES.SET_SELECTED_CARD:
      if (state.selectedCard.first === null) {
        //If there's no card flipped sets the data to the first one
        return {
          ...state,
          selectedCard: { ...state.selectedCard, first: action.payload },
        };
      } else {
        //Both cards match
        if (state.selectedCard.first.src === action.payload.src) {
          const updatedCards = state.cards.map((card) => {
            if (state.selectedCard.first.src === card.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
          return {
            ...state,
            cards: updatedCards,
            matches: state.matches + 1,
            selectedCard: { first: null, second: null },
            isCorrect: true,
            showModal: true,
          };
        } //Wrong cards
        else {
          return {
            ...state,
            disabled: true,
            selectedCard: { ...state.selectedCard, second: action.payload },
            isCorrect: false,
            flag: true,
          };
        }
      }
    case TYPES.SET_DISABLED:
      return { ...state, disabled: action.payload };
    case TYPES.SET_SHOW_MODAL:
      return { ...state, showModal: action.payload };
    case TYPES.SET_IS_CORRECT:
      return { ...state, isCorrect: action.payload };
    case TYPES.SET_MATCHES:
      return { ...state, matches: action.payload };
    case TYPES.SET_FLAG:
      if (action.payload === true) {
        return {
          ...state,
          selectedCard: { first: null, second: null },
          disabled: false,
          showModal: true,
          flag: false,
        };
      } else {
        return { ...state, showModal: false, flag: false };
      }
    default:
      return state;
  }
}

export { initialState, TYPES };
