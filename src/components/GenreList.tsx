import useGenres from "../hooks/useGenres";
import {
	Button,
	HStack,
	Image,
	List,
	ListItem,
	Skeleton,
	Text,
} from "@chakra-ui/react";
import getCroppedImaheUrl from "../services/image-url";
import useGameQueryStore from "../store/useGameQueryStore";

const GenreList = () => {
	const { data: genres, error, isLoading } = useGenres();
	const selectedGenreId = useGameQueryStore((state) => state.gameQuery.genreId);
	const setGenreId = useGameQueryStore((state) => state.setGenreId);

	if (error) return null;

	if (isLoading)
		return (
			<Skeleton
				height={"600px"}
				borderRadius={10}
				marginY={3}
			/>
		);

	return (
		<>
			{error && <Text>{error}</Text>}
			<List paddingY={2}>
				{genres.results.map((genre) => (
					<ListItem key={genre.id}>
						<HStack mb={3}>
							<Image
								boxSize={"32px"}
								borderRadius={8}
								objectFit={"cover"}
								src={getCroppedImaheUrl(genre.image_background)}
							/>
							<Button
								fontSize='md'
								ml={1}
								variant={"link"}
								onClick={() => setGenreId(genre.id)}
								fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
