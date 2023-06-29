import commet from "../assets/img/cards/comet.svg";
import moon from "../assets/img/cards/moon.svg";
import star from "../assets/img/cards/star.svg";
import sun from "../assets/img/cards/sun.svg";
const cards = [
  {
    src: commet,
    matched: false,
  },
  {
    src: moon,
    matched: false,
  },
  {
    src: star,
    matched: false,
  },
  {
    src: sun,
    matched: false,
  },
];
const suffleCards = () => {
  /*
  cards: [c1, c2, c3, c4]
  we need an array with 8 cards, so we need to duplicate the cards array
  expected result: 
  [c1, c2, c3, c4]
  [c3, c4, c2, c1]
  */
  const shuffled = [...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .map((card) => {
      //Add ID to card object
      return {
        ...card,
        id: Math.random(),
      };
    });
  /*
    Result: 
    [ {src, id}, {src, id}, {src, id}, {src, id}],
    [ {src, id}, {src, id}, {src, id}, {src, id}]
    */
  return shuffled;
};
export default suffleCards;
