import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store/useGameQueryStore";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
	const setSearchText = useGameQueryStore((state) => state.setSearchText);
	const searchText = useGameQueryStore((state) => state.gameQuery.searchText);
	const navigate = useNavigate();

	return (
		<InputGroup>
			<InputLeftElement
				pointerEvents='none'
				children={<BsSearch />}
			/>
			<Input
				variant='filled'
				placeholder='Search games...'
				borderRadius={20}
				onChange={(e) => {
					setSearchText(e.target.value);
					navigate("/");
				}}
				value={searchText}
			/>
		</InputGroup>
	);
};

export default SearchInput;
