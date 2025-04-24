import APIClient from "./apiClient";
export interface Platforms {
	id: number;
	name: string;
	slug: string;
}
export interface FetchPlatformResponse {
	count: number;
	results: Platforms[];
}

export default new APIClient<FetchPlatformResponse>("/platforms/lists/parents");
