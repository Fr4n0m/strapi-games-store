import { Game } from '@/mock/games';
import Image from 'next/image';

interface GameCardProps {
	game: Game;
	gradient?: string[];
}

const GameCard: React.FC<GameCardProps> = ({ game, gradient }) => {
	const gradientClasses = gradient?.join(' ') || 'from-slate-500 to-slate-800';

	return (
		<div
			className='group relative h-72 overflow-hidden rounded-xl border border-white/10 shadow-lg transition-transform duration-300 will-change-transform hover:z-20 hover:scale-[1.04]'
		>
			<div
				className={`absolute inset-0 bg-gradient-to-br ${gradientClasses} opacity-20 transition-opacity duration-300 group-hover:opacity-35`}
			/>
			<Image
				src={game.image}
				alt={game.name}
				fill
				unoptimized={game.image.startsWith('http')}
				sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
				className='object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75'
			/>
			<div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent' />
			<div className='absolute inset-x-0 bottom-0 p-4 md:p-5'>
				<h3 className='text-xl md:text-2xl font-bold text-white drop-shadow'>
					{game.name}
				</h3>
				<div
					className='mt-2 max-h-0 overflow-hidden opacity-0 transition-all duration-300 translate-y-2 group-hover:max-h-28 group-hover:opacity-100 group-hover:translate-y-0'
					style={{
						maskImage:
							'linear-gradient(to bottom, rgba(0,0,0,1) 72%, rgba(0,0,0,0))',
						WebkitMaskImage:
							'linear-gradient(to bottom, rgba(0,0,0,1) 72%, rgba(0,0,0,0))',
					}}
				>
					<p className='max-h-28 overflow-y-auto pr-1 text-sm text-slate-200 scrollbar-hidden'>
						{game.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default GameCard;
