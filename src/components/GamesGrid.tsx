import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platforms } from "../hooks/usePlatforms";

interface Props {
	genre: Genre | null;
	platforms: Platforms | null;
}

const GamesGrid = ({ genre, platforms }: Props) => {
	const { data: games, error, isLoading } = useGames(genre, platforms);

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={3}
				padding='10px'
			>
				{isLoading &&
					Array.from({ length: 16 }).map((_, index) => (
						<GameCardContainer key={index}>
							<GameCardSkeleton key={index} />
						</GameCardContainer>
					))}
				{games.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard
							key={game.id}
							game={game}
						/>
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GamesGrid;
