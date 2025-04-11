import create from "./http-service";

export interface Games {
	id: number;
	name: string;
	background_image: string;
}

export interface FetchGames {
	count: number;
	results: Games[];
}

export default create("/games");
