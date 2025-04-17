import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
	onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
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
				onChange={(e) => onSearch(e.target.value)}
			/>
		</InputGroup>
	);
};

export default SearchInput;
