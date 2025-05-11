import { create } from "zustand";

interface GameQuery {
	genreId?: number;
	platformId?: number;
	sortOrder?: string;
	searchText?: string;
	page_size?: number;
}

interface GameQueryStore {
	gameQuery: GameQuery;
	setSearchText: (searchText: string) => void;
	setGenreId: (genreId: number) => void;
	setPlatformId: (platformId: number) => void;
	setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: { page_size: 20, searchText: "" },
	setSearchText: (searchText: string) =>
		set(() => ({ gameQuery: { searchText } })),
	setGenreId: (genreId: number) =>
		set((state) => ({
			gameQuery: { ...state.gameQuery, genreId, searchText: "" },
		})),
	setPlatformId: (platformId: number) =>
		set((state) => ({
			gameQuery: { ...state.gameQuery, platformId, searchText: "" },
		})),
	setSortOrder: (sortOrder: string) =>
		set((state) => ({
			gameQuery: { ...state.gameQuery, sortOrder, searchText: "" },
		})),
}));

export default useGameQueryStore;
