import APIClient from "./apiClient";

export interface Games {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface FetchGamesResponse {
	count: number;
	results: Games[];
	next: string | null;
}

export default new APIClient<FetchGamesResponse>("/games");
