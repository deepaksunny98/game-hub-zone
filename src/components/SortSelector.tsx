import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

interface Props {
	onSortOrder: (sortOrder: string) => void;
	sortOrder: string;
}

const SortSelector = ({ onSortOrder, sortOrder }: Props) => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average rating" },
	];

	const currentSortOrder = sortOrders.find(
		(SortOrder) => SortOrder.value === sortOrder
	);

	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<ChevronDownIcon />}
			>
				Order by: {currentSortOrder?.label || "Relevance"}
			</MenuButton>
			<MenuList>
				{sortOrders.map((sortOrder) => (
					<MenuItem
						key={sortOrder.value}
						onClick={() => onSortOrder(sortOrder.value)}
					>
						{sortOrder.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
