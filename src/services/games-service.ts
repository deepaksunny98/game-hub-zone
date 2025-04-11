import create from "./http-service";

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

export interface FetchGames {
	count: number;
	results: Games[];
}

export default create("/games");
