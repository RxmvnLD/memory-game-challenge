import { createBrowserRouter } from "react-router-dom";
import Home from "../routes/Home";
import Game from "../routes/Play";
import ErrorPage from "../routes/ErrorPage";
import Results from "../routes/Results";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/play",
    element: <Game />,
  },
  {
    path: "/results/:winner",
    element: <Results />,
  },
]);

export default router;
