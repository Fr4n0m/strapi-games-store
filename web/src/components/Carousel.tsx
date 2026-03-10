'use client';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

import { Game } from '@/mock/games';
import { defaultGames } from '@/mock/games';

const Carousel = () => {
	const games = defaultGames;
	const handleDragStart = (e: React.DragEvent) => e.preventDefault();

	const items = games.map((game: Game) => (
		<div
			key={game.slug}
			className='group relative h-56 md:h-80 overflow-hidden rounded-lg border border-[#2761c3]/35 transition-all duration-300 hover:cursor-grab active:cursor-grabbing hover:border-[#27c39f]/65 hover:shadow-[0_0_28px_rgba(39,97,195,0.3)] select-none'
		>
			<Image
				src={game.image}
				alt={game.name}
				fill
				draggable={false}
				onDragStart={handleDragStart}
				unoptimized={game.image.startsWith('http')}
				sizes='(max-width: 768px) 100vw, 66vw'
				className='rounded-lg object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75'
			/>
			<div className='pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent' />
			<div className='pointer-events-none absolute inset-x-0 bottom-0 translate-y-1 p-4 text-left opacity-100 transition-all duration-300 md:p-6 group-hover:translate-y-0'>
				<h2 className='mb-2 text-lg font-bold text-[#ddebf0] drop-shadow md:text-3xl'>
					{game.name}
				</h2>
				<p className='max-h-20 overflow-hidden max-w-3xl text-xs text-slate-100/90 md:text-base'>
					{game.description}
				</p>
			</div>
		</div>
	));

	return (
		<AliceCarousel
			mouseTracking
			items={items}
			disableSlideInfo
			touchTracking
			touchMoveDefaultEvents={false}
			autoPlay
			autoPlayInterval={3000}
			infinite
			disableButtonsControls
			disableDotsControls
		/>
	);
};

export default Carousel;
