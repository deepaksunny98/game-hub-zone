import { useQuery } from "@tanstack/react-query";
import gameDetailService from "../services/gameDetailService";
import { CACHE_KEY_GAME_DETAILS } from "../constant";
import { Games } from "../services/gameService";

const useGameDetails = (gameSlug: string) => {
	return useQuery<Games, Error>({
		queryKey: [...CACHE_KEY_GAME_DETAILS, gameSlug],
		queryFn: () => gameDetailService.get(gameSlug),
		staleTime: 10 * 1000,
	});
};

export default useGameDetails;
