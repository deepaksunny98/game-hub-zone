import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";

function App() {
	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	const [selectedPlatform, setSelectedPlatform] = useState<Platforms | null>(
		null
	);

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
				>
					<GenreList
						onSelectGenre={(genre) => setSelectedGenre(genre)}
						selectedGenre={selectedGenre}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<PlatformSelector
					onSelectPlatform={(platform) => setSelectedPlatform(platform)}
					selectedPlatform={selectedPlatform}
				/>
				<GamesGrid
					genre={selectedGenre}
					platforms={selectedPlatform}
				/>
			</GridItem>
		</Grid>
	);
}

export default App;
