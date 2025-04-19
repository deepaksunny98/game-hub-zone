import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import usePlatforms, { Platforms } from "../hooks/usePlatforms";

interface Props {
	onSelectPlatform: (platform: Platforms) => void;
	selectedPlatform: Platforms | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data: platforms, error } = usePlatforms();
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
				{platforms.map((platform) => (
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
