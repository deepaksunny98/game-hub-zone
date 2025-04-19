import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImaheUrl from "../services/image-url";
import { Games } from "../hooks/useGames";
import Emoji from "./Emoji";

interface Props {
	game: Games;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card>
			<Image src={getCroppedImaheUrl(game.background_image)} />
			<CardBody>
				<HStack
					justifyContent='space-between'
					marginY={2}
				>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					<CriticScore score={game.metacritic} />
				</HStack>
				<Heading
					fontSize='2xl'
					marginTop={3}
				>
					{game.name}
				</Heading>
				<Emoji rating={game.rating_top} />
			</CardBody>
		</Card>
	);
};

export default GameCard;
