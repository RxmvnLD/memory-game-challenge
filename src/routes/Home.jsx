import { useState } from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
const Home = () => {
  const [playStyles, setPlayStyles] = useState(
    "animate__animated animate__slideInUp"
  );
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <div className="animate__animated animate__slideInDown flex flex-col items-center gap-5 w-5/6 text-center md:gap-7 md:w-4/5 lg:w-1/2">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-violet-200 to-pink-300 md:text-7xl md:pb-2">
          Memory Game
        </h1>
        <img
          src={logo}
          alt="logo"
          className="bg-gradient-to-r from-violet-200 to-pink-200 rounded-3xl p-2 w-64 h-64"
        />
        <p className="md: text-md">
          The game starts with all the cards face down and you have to turn over
          two cards. If the two cards have the same picture, you must leave them
          face up, otherwise they will turn face down again.{" "}
          <u>You have 30 seconds to guess all the cards correctly.</u>
        </p>
      </div>
      <Link
        to="/play"
        className={`${playStyles} text-blue-800 bg-gradient-to-r from-emerald-400 to-cyan-400 w-max px-10 py-2 rounded-xl  text-3xl font-bold `}
        onMouseEnter={() => {
          setPlayStyles("hover:animate-bounce");
        }}
        onMouseLeave={() => {
          setPlayStyles("");
        }}
      >
        {" "}
        Play!{" "}
      </Link>
    </div>
  );
};

export default Home;
