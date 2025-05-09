import APIClient from "./apiClient";
import { Genre } from "./genreService";

export interface Games {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
	slug: string;
	description_raw: string;
	genres: Genre[];
	publishers: Publishers[];
}

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Publishers {
	id: number;
	name: string;
}

export interface FetchGamesResponse {
	count: number;
	results: Games[];
	next: string | null;
}

export default new APIClient<FetchGamesResponse>("/games");
