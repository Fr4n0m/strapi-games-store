'use client';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { games } from '@/mock/games';

const Carousel: React.FC = () => {
	const items = games.map(game => (
		<div
			key={game.id}
			className='relative h-64 md:h-96 group transition-all hover:cursor-pointer rounded-lg'
		>
			<img
				src={game.image}
				alt={game.title}
				className='w-full h-full object-cover rounded-lg hover:rounded-lg group-hover:scale-110 transition-all'
			/>
			<div className='absolute hidden group-hover:flex inset-0 bg-black bg-opacity-70 flex-col items-center justify-center text-center p-4 transition-all'>
				<h2 className='text-xl font-bold text-white mb-5 md:text-3xl transition-all'>
					{game.title}
				</h2>
				<p className='text-white/90 md:px-20 md:text-xl'>
					{game.description}
				</p>
			</div>
		</div>
	));

	return (
		<AliceCarousel
			mouseTracking
			items={items}
			autoPlay
			autoPlayInterval={3000}
			infinite
			disableButtonsControls
			disableDotsControls
		/>
	);
};

export default Carousel;
