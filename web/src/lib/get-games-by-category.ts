import { Game } from '@/mock/games';
import { getGames } from './get-games';
import { shouldUseMockData } from './data-source';
import { getStrapiMediaUrl, query } from './strapi';

interface StrapiCollectionResponse<T> {
	data: T[];
}

interface StrapiGame {
	id: number;
	attributes: {
		name: string;
		description: string;
		slug?: string | number;
		image?: {
			data?: {
				attributes?: {
					url?: string;
				};
			};
		};
	};
}

export async function getGamesByCategory(category: string): Promise<Game[]> {
	if (shouldUseMockData()) {
		const games = await getGames();
		return games.filter(
			game => game.category.toLowerCase() === category.toLowerCase(),
		);
	}

	try {
		const encodedCategory = encodeURIComponent(category);
		const response = await query<StrapiCollectionResponse<StrapiGame>>(
			`games?filters[game_category][name][$eqi]=${encodedCategory}&populate[image][fields][0]=url`,
		);

		return response.data.map(game => ({
			slug: Number(game.attributes.slug ?? game.id),
			name: game.attributes.name,
			description: game.attributes.description,
			image:
				getStrapiMediaUrl(game.attributes.image?.data?.attributes?.url) ??
				'/assets/background-hero.webp',
			category,
		}));
	} catch (error) {
		console.warn(`Falling back to mock category "${category}":`, error);
		const games = await getGames();
		return games.filter(
			game => game.category.toLowerCase() === category.toLowerCase(),
		);
	}
}

