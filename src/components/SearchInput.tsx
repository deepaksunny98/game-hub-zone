import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
	return (
		<InputGroup>
			<InputLeftElement
				pointerEvents='none'
				children={<BsSearch />}
			/>
			<Input
				variant='filled'
				placeholder='Search gmaes...'
				borderRadius={20}
			/>
		</InputGroup>
	);
};

export default SearchInput;
