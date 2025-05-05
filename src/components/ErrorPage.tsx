import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<>
			<h1>Oops...</h1>
			<p>{isRouteErrorResponse(error) ? "Route Error" : "Unknown error"}</p>
		</>
	);
};

export default ErrorPage;
