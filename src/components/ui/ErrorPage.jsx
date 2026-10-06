import { useRouteError } from "react-router";

function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center card ">
      <div>
        <h2> Error {error.status} </h2>
        <p>{error.statusText}</p>
      </div>
    </div>
  );
}

export default ErrorBoundary;
