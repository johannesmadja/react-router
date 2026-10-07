import { isRouteErrorResponse, useRouteError } from "react-router";

function ErrorBoundary() {
  const error = useRouteError();
  let errorText = "Erreur générique";
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorText = "Cette page n'existe pas !";
    }

    if (error.status === 401) {
      errorText = "Vous n'êtes pas autorisé à voir cette page.";
    }

    if (error.status === 503) {
      errorText = "Le service ne fonctionne pas. Contactez-nous !";
    }
  }

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="card p-20 d-flex flex-column align-items-center">
        <h2> Ooups ! Une erreur s'est produite </h2>
        <p>
          {" "}
          {error.status} {error.statusText}
        </p>
        <p>{errorText}</p>
      </div>
    </div>
  );
}

export default ErrorBoundary;
