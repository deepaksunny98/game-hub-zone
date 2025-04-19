import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
	rating: number;
}

const Emoji = ({ rating }: Props) => {
	console.log("d", rating);

	const emojiMap: { [rating: number]: ImageProps } = {
		3: { src: meh, alt: "meh", boxSize: "25px" },
		4: { src: thumbsUp, alt: "recommanded", boxSize: "25px" },
		5: { src: bullsEye, alt: "exceptional", boxSize: "25px" },
	};

	if (rating < 3) return null;

	return (
		<Image
			{...emojiMap[rating]}
			marginTop={3}
		/>
	);
};

export default Emoji;
