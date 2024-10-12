'use client';

import { useEffect, useState } from 'react';
import GameCard from '@/components/GameCard';
import { getGamesByCategory } from '@/lib/get-games-by-category';
import { defaultGames, Game } from '@/mock/games';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';

const PAGE_SIZE = 1;

const CategoryPage = ({ params }: { params: { categoryName: string } }) => {
	const [games, setGames] = useState<Game[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const { categoryName } = params;

	useEffect(() => {
		const fetchGames = async () => {
			setLoading(true);
			setError(null);
			try {
				const fetchedGames = await getGamesByCategory(categoryName);
				setGames(fetchedGames);
			} catch (error) {
				console.error('Error fetching games:', error);
				setError(
					'No se pudieron cargar los juegos, mostrando los juegos predeterminados.',
				);
				setGames(defaultGames);
			} finally {
				setLoading(false);
			}
		};

		fetchGames();
	}, [categoryName]);

	return (
		<div className='flex flex-col min-h-screen'>
			<Link
				href={'/'}
				className='relative w-fit flex justify-center items-center gap-2 left-10 md:left-20 top-10 text-md font-bold text-white hover:underline group'
			>
				<div className='size-5 group-hover:-translate-x-1 transition-all'>
					<svg
						viewBox='0 0 1024 1024'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
					>
						<path
							fill='currentColor'
							d='M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z'
						/>
						<path
							fill='currentColor'
							d='m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z'
						/>
					</svg>
				</div>
				<p>Volver a Inicio</p>
			</Link>

			<div className='flex-grow p-10 mt-10 md:p-20'>
				<h2 className='text-3xl font-bold mb-6 font-archivo-black'>
					{categoryName}
				</h2>
				{loading ? (
					<Loading />
				) : error ? (
					<p className='text-red-500'>{error}</p>
				) : (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
						{games.map((game: Game) => (
							<GameCard key={game.slug} game={game} />
						))}
					</div>
				)}
			</div>

			<Footer />
		</div>
	);
};

export default CategoryPage;
