import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Card
			borderRadius={10}
			overflow='hidden'
			_hover={{
				transform: "scale(1.05)",
				cursor: "pointer",
			}}
			transition='all 0.2s ease-in-out'
		>
			{children}
		</Card>
	);
};

export default GameCardContainer;
