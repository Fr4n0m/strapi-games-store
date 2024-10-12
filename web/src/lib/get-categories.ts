import { query } from './strapi';
import { Category } from '@/components/Categories';
/* 
export function getCategories() {
	return query('game-categories').then(res => {
		const data = res.data;

		const formattedCategories = data.map((category: Category) => ({
			slug: category.slug,
			name: category.name,
			image: category.image,
		}));

		return formattedCategories;
	});
}
*/ //Comment for make it run the vercel demo but if you want to use strapi uncomment this

export function getCategoriesComponentInfo() {
	return query('Category').then(res => {
		return res.data;
	});
}

/*
    export function getCategories() {
        return query("game-categories?fields[0]=slug&fields[1]=description&populate[image][fields][0]=url").then((res) => {
            return res.data.map(category => {
            const {name, slug, image: rawImage} = category
            const image = `${STRAPI_HOST}/${rawImage.url}`
            return {name, slug, image}
            })
        })

*/
