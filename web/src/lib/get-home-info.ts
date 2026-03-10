import { shouldUseMockData } from './data-source';
import { getStrapiMediaUrl, query } from './strapi';

interface HomeInfo {
	title: string;
	description: string;
	buttonText: string;
	image: string;
}

interface StrapiItemResponse<T> {
	data: T;
}

interface StrapiHome {
	attributes?: {
		title?: string;
		description?: string;
		buttonText?: string;
		cover?: {
			data?: {
				attributes?: {
					url?: string;
				};
			};
		};
	};
}

const defaultHomeInfo: HomeInfo = {
	title: 'Level Up Your Library',
	description:
		'Discover top new releases, essential classics, and great deals for your next gaming marathon.',
	buttonText: 'Explore',
	image: '/assets/background-hero.webp',
};

export async function getHomeInfo(): Promise<HomeInfo> {
	if (shouldUseMockData()) {
		return defaultHomeInfo;
	}

	try {
		const response = await query<StrapiItemResponse<StrapiHome>>(
			'home?populate[cover][fields][0]=url',
		);
		const attributes = response.data?.attributes;
		const image = getStrapiMediaUrl(attributes?.cover?.data?.attributes?.url);

		return {
			title: attributes?.title ?? defaultHomeInfo.title,
			description: attributes?.description ?? defaultHomeInfo.description,
			buttonText: attributes?.buttonText ?? defaultHomeInfo.buttonText,
			image: image ?? defaultHomeInfo.image,
		};
	} catch (error) {
		console.warn('Falling back to mock home info:', error);
		return defaultHomeInfo;
	}
}
