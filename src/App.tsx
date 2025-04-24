import { Box, Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Genre } from "./services/genreService";
import { Platforms } from "./services/platformService";

export interface GameQuery {
	genre: Genre | null;
	platform: Platforms | null;
	sortOrder: string;
	searchText: string;
	page_size: number;
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
					searchText={gameQuery.searchText}
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
						onSelectGenre={(genre) =>
							setGameQuery({ ...gameQuery, genre, searchText: "" })
						}
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
								setGameQuery({ ...gameQuery, platform, searchText: "" })
							}
							selectedPlatform={gameQuery?.platform}
						/>
						<SortSelector
							onSortOrder={(sortOrder) =>
								setGameQuery({ ...gameQuery, sortOrder, searchText: "" })
							}
							sortOrder={gameQuery?.sortOrder}
						/>
					</HStack>
				</Box>
				<GamesGrid gameQuery={{ ...gameQuery, page_size: 20 }} />
			</GridItem>
		</Grid>
	);
}

export default App;
