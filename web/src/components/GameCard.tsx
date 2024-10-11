import { Game } from '@/mock/games';
import { useState } from 'react';

interface GameCardProps {
	game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`bg-gradient-to-br group from-blue-300 to-blue-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ${isHovered ? 'h-auto' : 'h-48'}`}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img
				src={game.image}
				alt={game.name}
				className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
			/>
			<div className='p-4'>
				<h3 className='text-2xl font-bold text-white mt-5'>
					{game.name}
				</h3>
			</div>
			<div
				className={`transition-all duration-300 ease-in-out ${isHovered ? 'max-h-40 p-4' : 'max-h-0 p-0 overflow-hidden'}`}
			>
				<div
					className={`overflow-y-auto max-h-32 transition-all duration-300 ease-in-out ${isHovered ? '-mt-5' : 'p-0'} scrollbar-hidden`}
				>
					<p className='text-white text-left'>{game.description}</p>
				</div>
			</div>
		</div>
	);
};

export default GameCard;
