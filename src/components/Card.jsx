const Card = ({ data, sendDataToParent, flipped, isDisabled }) => {
  const handleClick = () => {
    sendDataToParent(data);
  };

  return (
    <div className="relative">
      <div
        className={`flex justify-center items-center absolute ${
          data.matched || flipped
            ? "rotate-y-0 transition-all delay-300 duration-400 ease-in"
            : "rotate-y-90 transition-all duration-200 ease-in"
        } w-24 h-24 bg-gradient-to-b from-cyan-600 to-indigo-900  rounded-md p-2 sm:w-32 sm:h-32`}
      >
        <img src={data.src} />
      </div>
      <div
        onClick={() => {
          if (!isDisabled) return handleClick();
        }}
        className={`${
          data.matched || flipped
            ? "rotate-y-90 delay-200"
            : "transition-all delay-200 duration-200 ease-in"
        } flex justify-center items-center w-24 h-24 bg-gradient-to-b from-cyan-600 to-indigo-900  font-black text-7xl rounded-md sm:w-32 sm:h-32`}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-300 to-yellow-700">
          ?
        </span>
      </div>
    </div>
  );
};

export default Card;
