'use client';

import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { Game } from '@/mock/games';
import { getGames } from '@/lib/get-games';
import { defaultGames } from '@/mock/games';

const Carousel = () => {
	const [games, setGames] = useState<Game[]>([]);

	useEffect(() => {
		const fetchGames = async () => {
			try {
				const fetchedGames = await getGames();
				setGames(fetchedGames);
			} catch (error) {
				console.error('Error fetching games:', error);
				setGames(defaultGames);
			}
		};

		fetchGames();
	}, []);

	const items = games.map((game: Game) => (
		<div
			key={game.slug}
			className='relative h-64 md:h-96 group transition-all hover:cursor-pointer rounded-lg'
		>
			<img
				src={game.image}
				alt={game.name}
				className='w-full h-full object-cover rounded-lg hover:rounded-lg group-hover:scale-110 transition-all'
			/>
			<div className='absolute hidden group-hover:flex inset-0 bg-black bg-opacity-70 flex-col items-center justify-center text-center p-4 transition-all'>
				<h2 className='text-xl font-bold text-white mb-5 md:text-3xl transition-all'>
					{game.name}
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
