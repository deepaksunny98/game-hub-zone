import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import useGameDetails from "../hooks/useGameDetails";
import { useParams } from "react-router-dom";
import ExpandableText from "./ExpandableText";

const GameDetailPage = () => {
	const { game_name } = useParams();

	const { data: gameDetail, error } = useGameDetails(game_name!);

	const gameDescription = gameDetail?.description_raw;

	if (error) return <Text>{error.message}</Text>;

	return (
		<>
			<Heading>{gameDetail?.name}</Heading>
			<ExpandableText>{gameDescription || ""}</ExpandableText>
		</>
	);
};

export default GameDetailPage;
