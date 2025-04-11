import create from "./http-service";

export interface Genre {
	id: number;
	name: string;
}

export interface FetchGenres {
	count: number;
	results: Genre[];
}

export default create("/genres");
