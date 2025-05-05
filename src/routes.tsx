import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import GameDetailPage from "./components/GameDetailPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{ path: "games/:game_name", element: <GameDetailPage /> },
		],
	},
]);

export default router;
