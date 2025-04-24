import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
	onSearch: (searchText: string) => void;
	searchText: string;
}

const SearchInput = ({ onSearch, searchText }: Props) => {
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
				value={searchText}
			/>
		</InputGroup>
	);
};

export default SearchInput;
