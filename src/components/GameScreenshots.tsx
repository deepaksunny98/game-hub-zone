import { SimpleGrid, Image } from "@chakra-ui/react";
import useGameScreenshot from "../hooks/useGameScreenshot";

interface Props {
	game_name: string;
}

const GameScreenshots = ({ game_name }: Props) => {
	const {
		data: gameScreenshot,
		isLoading,
		error,
	} = useGameScreenshot(game_name!);

	if (isLoading) return null;

	if (error) throw error;

	console.log(gameScreenshot);

	return (
		<SimpleGrid
			columns={{ base: 1, md: 2 }}
			spacing={3}
		>
			{gameScreenshot?.results.map((screenshot) => (
				<Image
					src={screenshot.image}
					alt={`Picture of ${game_name}`}
					key={screenshot.id}
				/>
			))}
		</SimpleGrid>
	);
};

export default GameScreenshots;
