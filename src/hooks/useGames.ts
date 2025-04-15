import useData from "./useData";
import { Genre } from "./useGenres";

export interface Games {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const useGames = (
	selectedGenre: Genre | null,
	selectedPlatforms: Platform | null
) =>
	useData<Games>(
		"/games",
		{ params: { genres: selectedGenre?.id, platforms: selectedPlatforms?.id } },
		[selectedGenre?.id, selectedPlatforms?.id]
	);

export default useGames;
