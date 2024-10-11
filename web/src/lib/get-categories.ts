import { query } from './strapi';
import { Category } from '@/components/Categories';

export function getCategories() {
	return query('game-categories').then(res => {
		const data = res.data;

		const formattedCategories = data.map((category: Category) => ({
			slug: category.slug,
			name: category.name,
			image: category.image,
		}));

		console.log(formattedCategories);

		return formattedCategories;
	});
}
