import { useQuery } from "@tanstack/react-query";
import genreService, { FetchGenreResponse } from "../services/genreService";
import { CACHE_KEY_GENRES } from "../constant";

const useGenres = () =>
	useQuery<FetchGenreResponse, Error>({
		queryKey: CACHE_KEY_GENRES,
		queryFn: genreService.getAll,
		staleTime: 10 * 1000,
	});

export default useGenres;
