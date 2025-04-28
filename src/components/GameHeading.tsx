import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store/useGameQueryStore";

const GameHeading = () => {
	const { data: genres } = useGenres();
	const genreId = useGameQueryStore((state) => state.gameQuery.genreId);
	const genre = genres?.results.find((genre) => genre.id === genreId);

	const { data: platforms } = usePlatforms();
	const platformId = useGameQueryStore((state) => state.gameQuery.platformId);
	const platform = platforms?.results.find(
		(platform) => platform.id === platformId
	);

	const heading = `${platform?.name || " "} ${genre?.name || " "} Games`;
	return (
		<Heading
			as={"h1"}
			fontSize='5xl'
			marginY={5}
		>
			{heading}
		</Heading>
	);
};

export default GameHeading;
