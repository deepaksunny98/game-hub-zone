import APIClient from "./apiClient";

interface GameTrailer {
	id: number;
	name: string;
	preview: string;
	data: {
		max: string;
	};
}

interface FetchGameTrailerResponse {
	count: number;
	results: GameTrailer[];
}

export default new APIClient<FetchGameTrailerResponse>("/games");
