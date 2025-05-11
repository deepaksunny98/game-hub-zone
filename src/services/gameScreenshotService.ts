import APIClient from "./apiClient";

interface GameScreenshot {
	id: number;
	image: string;
}

interface FetchGameScreenshotResponse {
	count: number;
	results: GameScreenshot[];
}

export default new APIClient<FetchGameScreenshotResponse>("/games");
