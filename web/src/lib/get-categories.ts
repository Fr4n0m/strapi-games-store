import { defaultCategories } from '@/mock/categories';
import { shouldUseMockData } from './data-source';
import { getStrapiMediaUrl, query } from './strapi';

export interface Category {
	slug: number;
	name: string;
	image: string;
}

interface StrapiCollectionResponse<T> {
	data: T[];
}

interface StrapiItemResponse<T> {
	data: T;
}

interface StrapiCategory {
	id: number;
	attributes: {
		name: string;
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

interface StrapiCategoryComponent {
	attributes?: {
		title?: string;
		buttonText?: string;
	};
}

export async function getCategories(): Promise<Category[]> {
	if (shouldUseMockData()) {
		return defaultCategories;
	}

	try {
		const response = await query<StrapiCollectionResponse<StrapiCategory>>(
			'game-categories?populate[image][fields][0]=url',
		);

		return response.data.map(category => ({
			slug: Number(category.attributes.slug ?? category.id),
			name: category.attributes.name,
			image:
				getStrapiMediaUrl(category.attributes.image?.data?.attributes?.url) ??
				'/assets/background-hero.webp',
		}));
	} catch (error) {
		console.warn('Falling back to mock categories:', error);
		return defaultCategories;
	}
}

export async function getCategoriesComponentInfo() {
	if (shouldUseMockData()) {
		return {
			title: 'Categories',
			buttonText: 'All Games',
		};
	}

	try {
		const response = await query<StrapiItemResponse<StrapiCategoryComponent>>(
			'category',
		);
		const data = response.data?.attributes;

		return {
			title: data?.title ?? 'Categories',
			buttonText: data?.buttonText ?? 'All Games',
		};
	} catch (error) {
		console.warn('Falling back to default category component copy:', error);
		return {
			title: 'Categories',
			buttonText: 'All Games',
		};
	}
}
