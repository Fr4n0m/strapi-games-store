'use client';

import { useEffect, useState } from 'react';
import GameCard from '@/components/GameCard';
import { defaultGames, Game } from '@/mock/games';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';

interface CategoryPageProps {
	params: {
		categoryName: string;
	};
}

const gradientByCategory: Record<string, string[]> = {
	Action: ['from-blue-400', 'to-blue-700'],
	Adventure: ['from-orange-400', 'to-orange-700'],
	Sports: ['from-green-400', 'to-green-700'],
	Strategy: ['from-yellow-400', 'to-yellow-700'],
	RPG: ['from-red-400', 'to-red-700'],
	Simulation: ['from-indigo-400', 'to-indigo-700'],
};

const titleGradientByCategory: Record<string, string> = {
	Action: 'from-[#3b82f6] to-[#1d4ed8]',
	Adventure: 'from-[#fb923c] to-[#c2410c]',
	Sports: 'from-[#22c55e] to-[#15803d]',
	Strategy: 'from-[#facc15] to-[#ca8a04]',
	RPG: 'from-[#ef4444] to-[#b91c1c]',
	Simulation: 'from-[#6366f1] to-[#3730a3]',
};

const titleShadowByCategory: Record<string, string> = {
	Action: '0 0 14px rgba(59,130,246,0.45)',
	Adventure: '0 0 14px rgba(251,146,60,0.45)',
	Sports: '0 0 14px rgba(34,197,94,0.45)',
	Strategy: '0 0 14px rgba(250,204,21,0.4)',
	RPG: '0 0 14px rgba(239,68,68,0.45)',
	Simulation: '0 0 14px rgba(99,102,241,0.45)',
};

const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
	const [games, setGames] = useState<Game[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const { categoryName } = params;

	useEffect(() => {
		const fetchGames = () => {
			setLoading(true);
			setError(null);

			try {
				const filteredGames = defaultGames.filter(
					game =>
						game.category.toLowerCase() ===
						categoryName.toLowerCase(),
				);

				if (filteredGames.length === 0) {
					throw new Error(
						`No games were found in the "${categoryName}" category.`,
					);
				}

				setGames(filteredGames);
			} catch (error) {
				console.error('Error fetching games:', error);
				setError((error as Error).message);
				setGames([]);
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
				<p>Back</p>
			</Link>

			<div className='flex-grow p-10 mt-10 md:mt-0 md:p-20'>
				<h2
					className={`mb-6 text-3xl md:text-5xl font-bold font-archivo-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r ${titleGradientByCategory[categoryName] || 'from-[#2658ac] to-[#27c39f]'}`}
					style={{
						textShadow:
							titleShadowByCategory[categoryName] ||
							'0 0 14px rgba(38,88,172,0.45)',
					}}
				>
					{categoryName}
				</h2>
				{loading ? (
					<Loading />
				) : error ? (
					<p className='text-red-500'>{error}</p>
				) : (
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
						{games.map((game: Game) => (
							<GameCard
								key={game.slug}
								game={game}
								gradient={
									gradientByCategory[game.category] || [
										'from-gray-400',
										'to-gray-700',
									]
								}
							/>
						))}
					</div>
				)}
			</div>

			<Footer />
		</div>
	);
};

export default CategoryPage;
