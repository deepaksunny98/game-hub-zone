import React from "react";
import useGames from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GamesGrid = () => {
	const { games, error, isLoading } = useGames();

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				spacing={10}
				padding='10px'
			>
				{isLoading &&
					Array.from({ length: 16 }).map((_, index) => (
						<GameCardSkeleton key={index} />
					))}
				{games.map((game) => (
					<GameCard
						key={game.id}
						game={game}
					/>
				))}
			</SimpleGrid>
		</>
	);
};

export default GamesGrid;
