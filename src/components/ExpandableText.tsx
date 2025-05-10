import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
	children: string;
}

const ExpandableText = ({ children }: Props) => {
	const [isExpanded, setExpanded] = useState(false);
	const limit = 300;

	if (children.length <= limit) return <Text>{children}</Text>;

	const expandedText = isExpanded ? children : `${children.slice(0, limit)}...`;

	return (
		<>
			<Text>
				{expandedText}
				<Button
					onClick={() => setExpanded(!isExpanded)}
					colorScheme='yellow'
					fontWeight={"bold"}
					size={"xs"}
					marginLeft={1}
				>
					{isExpanded ? "Show less" : "Read more"}
				</Button>
			</Text>
		</>
	);
};

export default ExpandableText;
