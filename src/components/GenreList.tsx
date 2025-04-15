import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImaheUrl from "../services/image-url";

const GenreList = () => {
	const { data: genres, error } = useGenres();
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
							<Text
								fontSize='lg'
								ml={1}
							>
								{genre.name}
							</Text>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
