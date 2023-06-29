import { useParams, Link } from "react-router-dom/dist";
const Results = () => {
  const { winner } = useParams();

  return (
    <main className="flex flex-col items-center gap-10 content-center h-screen justify-center">
      <h1 className="text-4xl md:text-7xl">
        {" "}
        {winner === "true" ? "You did it!!!" : "Oops you didn't find them all"}
      </h1>

      <Link
        to="/play"
        className="text-blue-800 bg-gradient-to-r from-emerald-400 to-cyan-400 w-max px-10 py-2 rounded-xl hover:animate-bounce text-3xl font-bold"
      >
        {" "}
        Play again!{" "}
      </Link>
    </main>
  );
};

export default Results;
