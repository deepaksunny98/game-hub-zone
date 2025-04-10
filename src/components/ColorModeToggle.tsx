// src/ColorModeToggle.tsx
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React from "react";

const ColorModeToggle: React.FC = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			aria-label='Toggle color mode'
			icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
			onClick={toggleColorMode}
			variant='ghost'
			size='md'
			isRound
		/>
	);
};

export default ColorModeToggle;
