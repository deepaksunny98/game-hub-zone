import { Box, Button, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import ExpandableText from "./ExpandableText";
import GameAttributes from "./GameAttributes";
import GameTrailer from "./GameTrailer";
import GameScreenshots from "./GameScreenshots";

const GameDetailPage = () => {
	const { game_name } = useParams();
	const navigate = useNavigate();

	const { data: game, error, isLoading } = useGameDetails(game_name!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	const gameDescription = game?.description_raw;

	return (
		<Box>
			<Button
				onClick={() => navigate("/")}
				colorScheme='yellow'
				fontWeight={"bold"}
				paddingX={{ base: 5, md: 8 }}
			>
				Back
			</Button>
			<SimpleGrid
				columns={{ base: 1, md: 2 }}
				spacing={5}
				marginTop={5}
			>
				<Box>
					<Heading>{game?.name}</Heading>
					<ExpandableText>{gameDescription}</ExpandableText>
					<GameAttributes game={game} />
				</Box>
				<Box>
					<GameTrailer game_name={game_name!} />
					<GameScreenshots game_name={game_name!} />
				</Box>
			</SimpleGrid>
		</Box>
	);
};

export default GameDetailPage;
