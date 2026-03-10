import { defaultGames, Game } from '@/mock/games';
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
		game_category?: {
			data?: {
				attributes?: {
					name?: string;
				};
			};
		};
	};
}

export async function getGames(): Promise<Game[]> {
	if (shouldUseMockData()) {
		return defaultGames;
	}

	try {
		const response = await query<StrapiCollectionResponse<StrapiGame>>(
			'games?populate[image][fields][0]=url&populate[game_category][fields][0]=name',
		);

		return response.data.map(game => {
			const imageUrl =
				getStrapiMediaUrl(game.attributes.image?.data?.attributes?.url) ??
				'/assets/background-hero.webp';

			return {
				slug: Number(game.attributes.slug ?? game.id),
				name: game.attributes.name,
				description: game.attributes.description,
				image: imageUrl,
				category: game.attributes.game_category?.data?.attributes?.name ?? 'Action',
			};
		});
	} catch (error) {
		console.warn('Falling back to mock games:', error);
		return defaultGames;
	}
}

