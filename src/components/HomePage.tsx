import { Box, Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import GenreList from "./GenreList";
import GameHeading from "./GameHeading";
import GamesGrid from "./GamesGrid";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

const HomePage = () => {
	return (
		<Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "260px 1fr",
			}}
		>
			<Show above='lg'>
				<GridItem
					area='aside'
					paddingX={5}
					marginTop={8}
				>
					<Heading
						fontSize={"2xl"}
						marginBottom={2}
					>
						Genres
					</Heading>
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area='main'>
				<Box paddingLeft={2}>
					<GameHeading />
					<HStack
						marginBottom={4}
						spacing={5}
					>
						<PlatformSelector />
						<SortSelector />
					</HStack>
				</Box>
				<GamesGrid />
			</GridItem>
		</Grid>
	);
};

export default HomePage;
