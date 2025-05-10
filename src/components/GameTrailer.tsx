import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
	game_name: string;
}

const GameTrailer = ({ game_name }: Props) => {
	const { data: gameTrailer, isLoading, error } = useGameTrailer(game_name!);

	if (isLoading) return null;

	if (error) throw error;

	const trailer = gameTrailer?.results[0];

	return trailer ? (
		<video
			controls
			poster={trailer.preview}
			autoPlay
			muted
			loop
		>
			<source
				src={trailer.data.max}
				type='video/mp4'
			/>
			Your browser does not support the video tag.
		</video>
	) : null;
};

export default GameTrailer;
