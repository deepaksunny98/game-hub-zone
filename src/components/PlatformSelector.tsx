import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { Platforms } from "../services/platformService";

interface Props {
	onSelectPlatform: (platform: Platforms) => void;
	selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
	const { data: platforms, error } = usePlatforms();
	const selectedPlatform = platforms?.results.find(
		(platform) => platform.id === selectedPlatformId
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
						onClick={() => onSelectPlatform(platform)}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
