import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
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

interface Props {
	onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
	const { data: genres, error, isLoading } = useGenres();

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
				{genres.map((genre) => (
					<ListItem key={genre.id}>
						<HStack mb={3}>
							<Image
								boxSize={"32px"}
								borderRadius={8}
								src={getCroppedImaheUrl(genre.image_background)}
							/>
							<Button
								fontSize='lg'
								ml={1}
								variant={"link"}
								onClick={() => onSelectGenre(genre)}
								fontWeight={400}
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
