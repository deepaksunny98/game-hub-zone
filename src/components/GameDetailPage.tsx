import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";

const GameDetailPage = () => {
	const { game_name } = useParams();

	const { data: game, error, isLoading } = useGameDetails(game_name!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	const gameDescription = game?.description_raw;

	return (
		<Box>
			<Heading>{game?.name}</Heading>
			<ExpandableText>{gameDescription}</ExpandableText>
			<GameAttributes game={game} />
		</Box>
	);
};

export default GameDetailPage;
