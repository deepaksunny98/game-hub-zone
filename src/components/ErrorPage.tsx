import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "./NavBar";
import { Box, Heading, Text } from "@chakra-ui/react";

const ErrorPage = () => {
	const error = useRouteError();

	return (
		<>
			<NavBar />
			<Box padding={5}>
				<Heading>Oops...</Heading>
				<Text>
					{isRouteErrorResponse(error)
						? "The page does not exist"
						: "Sorry, something went wrong"}
				</Text>
			</Box>
		</>
	);
};

export default ErrorPage;
