import { Box, Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
	genre: Genre | null;
	platform: Platforms | null;
	sortOrder: string;
	searchText: string;
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
				<NavBar
					onSearch={(searchText: string) =>
						setGameQuery({ ...gameQuery, searchText })
					}
				/>
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
					<GenreList
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
						selectedGenre={gameQuery?.genre}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<Box paddingLeft={2}>
					<GameHeading gameQuery={gameQuery} />
					<HStack
						marginBottom={4}
						spacing={5}
					>
						<PlatformSelector
							onSelectPlatform={(platform) =>
								setGameQuery({ ...gameQuery, platform })
							}
							selectedPlatform={gameQuery?.platform}
						/>
						<SortSelector
							onSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder })
							}
							sortOrder={gameQuery?.sortOrder}
						/>
					</HStack>
				</Box>
				<GamesGrid gameQuery={gameQuery} />
			</GridItem>
		</Grid>
	);
}

export default App;
