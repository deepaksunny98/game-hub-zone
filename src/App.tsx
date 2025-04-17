import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";

export interface GameQuery {
	genre: Genre | null;
	platform: Platforms | null;
}

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
						selectedGenre={gameQuery?.genre}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<PlatformSelector
					onSelectPlatform={(platform) =>
						setGameQuery({ ...gameQuery, platform })
					}
					selectedPlatform={gameQuery?.platform}
				/>
				<GamesGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
