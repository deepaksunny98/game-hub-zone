import useGames from "../hooks/useGames";
import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GamesGrid = () => {
	const { data, error, isLoading, hasNextPage, fetchNextPage } = useGames();

	const fetchedGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

	if (error) return <Text>{error.message}</Text>;

	return (
		<InfiniteScroll
			dataLength={fetchedGamesCount}
			hasMore={!!hasNextPage}
			next={() => fetchNextPage()}
			loader={<Spinner />}
		>
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={6}
				padding='10px'
			>
				{isLoading &&
					Array.from({ length: 16 }).map((_, index) => (
						<GameCardContainer key={index}>
							<GameCardSkeleton key={index} />
						</GameCardContainer>
					))}
				{data?.pages.map((page) =>
					page.results.map((game) => (
						<GameCardContainer key={game.id}>
							<GameCard
								key={game.id}
								game={game}
							/>
						</GameCardContainer>
					))
				)}
			</SimpleGrid>
		</InfiniteScroll>
	);
};

export default GamesGrid;
