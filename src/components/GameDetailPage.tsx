import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import useGameDetails from "../hooks/useGameDetails";
import { useParams } from "react-router-dom";

const GameDetailPage = () => {
	const { game_name } = useParams();

	const { data: gameDetail, error } = useGameDetails(game_name!);

	if (error) return <Text>{error.message}</Text>;

	return (
		<>
			<Heading>{gameDetail?.name}</Heading>
			<Text>{gameDetail?.description_raw}</Text>
		</>
	);
};

export default GameDetailPage;
