import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GAME_SCREENSHOT } from "../constant";
import gameScreenshotService from "../services/gameScreenshotService";

const useGameScreenshot = (gameSlug: string) => {
	const parameters = `${gameSlug}/screenshots`;
	return useQuery({
		queryKey: [...CACHE_KEY_GAME_SCREENSHOT, gameSlug],
		queryFn: () => gameScreenshotService.get(parameters),
		staleTime: 10 * 1000,
	});
};

export default useGameScreenshot;
