import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";

const SortSelector = () => {
	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<ChevronDownIcon />}
			>
				Order by: Relevance
			</MenuButton>
			<MenuList>
				<MenuItem>Relevance</MenuItem>
				<MenuItem>Date Added</MenuItem>
				<MenuItem>Name</MenuItem>
				<MenuItem>Release Date</MenuItem>
				<MenuItem>Popularity</MenuItem>
				<MenuItem>Average</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
