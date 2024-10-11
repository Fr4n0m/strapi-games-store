import { query } from './strapi';
import { Game } from '@/mock/games';

const { STRAPI_HOST } = process.env;

export function getGamesByCategory(category: string) {
	console.log(category);
	return fetch(
		`http://localhost:1337/api/games?filters[game_category][name][$contains]=${category}`,
		{
			headers: {
				Authorization: `Bearer f13dd7838213607d2e66e1d9275b475db806baf8455304345bb82eb7580307d28dcb1fd2bc37f775445c8526bf12c439c94aee031d02e9fe38f3c0fc8f9b8233320c4ff2bc6ead0c1ec66eff2b37ea4622d0f68dd9ea6d661075bf0330aaf30a5db3991a12f06598eb043bb8a8d73e47486fab443682c0f9927a8ccbeebfdc53`,
			},
		},
	)
		.then(res => {
			if (!res.ok) {
				throw new Error(`Error: ${res.status} ${res.statusText}`);
			}
			return res.json();
		})
		.then(data => {
			if (!data.data) {
				throw new Error('Data not found in response');
			}
			const formattedGames = data.data.map((game: Game) => ({
				slug: game.slug,
				name: game.name,
				description: game.description,
				image: game.image,
			}));

			console.log(formattedGames);
			return formattedGames;
		})
		.catch(error => {
			console.error('Fetch error:', error);
			return [];
		});
}
