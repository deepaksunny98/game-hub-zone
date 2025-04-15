import useData from "./useData";

export interface Platform {
	id: number;
	name: string;
	image_background: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
