import { useQuery } from "@tanstack/react-query";
import platformService, {
	FetchPlatformResponse,
} from "../services/platformService";
import { CACHE_KEY_PLATFORMS } from "../constant";

const usePlatforms = () =>
	useQuery<FetchPlatformResponse, Error>({
		queryKey: CACHE_KEY_PLATFORMS,
		queryFn: platformService.getAll,
		staleTime: 10 * 1000,
	});

export default usePlatforms;
