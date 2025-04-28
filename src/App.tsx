import { Box, Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`,
				lg: `"nav nav" "aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "260px 1fr",
			}}
		>
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
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
}

export default App;
