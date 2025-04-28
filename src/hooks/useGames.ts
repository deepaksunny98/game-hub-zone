import { useInfiniteQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAMES } from "../constant";
import gameService, { FetchGamesResponse } from "../services/gameService";
import useGameQueryStore from "../store/useGameQueryStore";

const useGames = () => {
	const gameQuery = useGameQueryStore((state) => state.gameQuery);
	return useInfiniteQuery<FetchGamesResponse, Error>({
		queryKey: [...CACHE_KEY_GAMES, gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			gameService.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					search: gameQuery.searchText,
					ordering: gameQuery.sortOrder,
					page: pageParam,
					page_size: gameQuery.page_size,
				},
			}),
		staleTime: 10 * 1000,
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
	});
};

export default useGames;
