import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store/useGameQueryStore";

const PlatformSelector = () => {
	const { data: platforms, error } = usePlatforms();
	const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
	const platformId = useGameQueryStore((state) => state.gameQuery.platformId);

	const selectedPlatform = platforms?.results.find(
		(platform) => platform.id === platformId
	);
	if (error) return null;
	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<ChevronDownIcon />}
			>
				{selectedPlatform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{platforms?.results.map((platform) => (
					<MenuItem
						key={platform.id}
						onClick={() => setPlatformId(platform.id)}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
