import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAME_TRAILER } from "../constant";
import gameTrailerService from "../services/gameTrailerService";

const useGameTrailer = (gameSlug: string) => {
	const parameters = `${gameSlug}/movies`;
	return useQuery({
		queryKey: [...CACHE_KEY_GAME_TRAILER, gameSlug],
		queryFn: () => gameTrailerService.get(parameters),
		staleTime: 10 * 1000,
	});
};

export default useGameTrailer;
