import { query } from './strapi';

export function getHomeInfo() {
	return query('Home').then(res => {
		console.log(res.data);
		return res.data;
	});
}

//? Para sacar una imagen si es necesario
/* 
    const { STRAPI_HOST } = process.env

    export function getHomeInfo() {
	return query('home?populate=cover').then(res => {
		const { title, description, cover } = res.data
        const image = ´${STRAPI_HOST}/${cover.url}´
        return { title, description, image }
	});
}
 */
