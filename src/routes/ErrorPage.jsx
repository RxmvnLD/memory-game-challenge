import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col gap-5 h-screen justify-center items-center my-auto text-center">
      <h1 className="text-7xl">Oops!</h1>
      <p className="text-4xl">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-xl">{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
