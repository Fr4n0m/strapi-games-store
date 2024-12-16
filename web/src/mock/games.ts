export interface Game {
	slug: number;
	name: string;
	description: string;
	image: string;
	category: string;
	gradient?: string[];
}

export const defaultGames: Game[] = [
	{
		slug: 1,
		name: 'God of War: Ragnarök',
		description:
			'THE NORDIC SAGA CONTINUES Developed by Santa Monica Studio and adapted for PC in collaboration with Jetpack Interactive, comes God of War Ragnarök, an epic and emotional journey in which Kratos and Atreus must decide what they hold on to and what they let go.',
		image: 'https://gaming-cdn.com/images/products/16797/616x353/god-of-war-ragnarok-pc-juego-steam-europe-cover.jpg?v=1727531756',
		category: 'Action',
	},
	{
		slug: 2,
		name: 'Black Myth: Wukong',
		description:
			'Black Myth: Wukong is an action RPG inspired by Chinese mythology. The story is based on “Journey to the West,” one of the four great classical novels of Chinese literature.',
		image: 'https://gaming-cdn.com/images/products/7678/616x353/black-myth-wukong-pc-juego-steam-europe-us-canada-cover.jpg?v=1728309382',
		category: 'Action',
	},
	{
		slug: 3,
		name: 'EA Sports FC 25',
		description:
			'EA SPORTS FC™ 25 gives you more ways to win for your club. Team up with your teammates in your favorite modes with the new 5v5 Rush and lead your club to victory with more realistic tactical control than ever before with FC IQ.',
		image: 'https://gaming-cdn.com/images/products/17255/616x353/ea-sports-fc-25-xbox-series-x-s-xbox-series-x-s-juego-microsoft-store-cover.jpg?v=1727423490',
		category: 'Sports',
	},
	{
		slug: 4,
		name: 'EA Sports Madden NFL 25',
		description:
			'IMMERSE FRANCHISE MODE The redesigned Franchise mode offers a revamped NFL Draft experience featuring Roger Goodell, team and rookie records, new environments, custom storylines, more ways to customize your team and NFL season, a new Super Bowl celebration experience and Franchise Central.',
		image: 'https://gaming-cdn.com/images/products/17169/616x353/ea-sports-madden-nfl-25-xbox-one-xbox-series-x-s-xbox-series-x-s-xbox-one-juego-microsoft-store-cover.jpg?v=1724144952',
		category: 'Sports',
	},
	{
		slug: 5,
		name: 'Silent Hill 2',
		description:
			'After receiving a letter from his deceased wife, James heads to the place where they shared so many memories in hopes of seeing her one more time: Silent Hill. There, by the lake, he finds a disturbing woman who resembles her... "My name is... Maria," the woman says, smiling.',
		image: 'https://gaming-cdn.com/images/products/13083/616x353/silent-hill-2-pc-juego-steam-europe-cover.jpg?v=1728466526',
		category: 'RPG',
	},
	{
		slug: 6,
		name: 'Grand Theft Auto V: Premium Online Edition',
		description:
			'Grand Theft Auto V: Premium Edition provides the full Grand Theft Auto V story experience, free access to the ever-evolving world of Grand Theft Auto Online, and all existing content and enhancements, including the Cayo Perico Heist, The Diamond Casino & Resort, The Diamond Casino Heist, Gunrunning, and more.',
		image: 'https://gaming-cdn.com/images/products/4211/616x353/grand-theft-auto-v-premium-online-edition-premium-online-edition-pc-juego-rockstar-cover.jpg?v=1713792136',
		category: 'RPG',
	},
	{
		slug: 7,
		name: 'Marvels Spider-Man 2',
		description:
			'Spider-Men Peter Parker and Miles Morales face the ultimate test of power with and without the mask as they fight to save the city, each other and their loved ones from the evil Venom and a dangerous new symbiote threat.',
		image: 'https://gaming-cdn.com/images/products/13335/616x353/marvel-s-spider-man-2-pc-juego-steam-cover.jpg?v=1710151147',
		category: 'Adventure',
	},
	{
		slug: 8,
		name: 'The Last Of Us Part II',
		description:
			'Set four years after The Last of Us (2013), the game focuses on two playable characters in a post-apocalyptic United States whose lives intertwine: Ellie, who sets out to avenge a murder, and Abby, a soldier who becomes embroiled in a conflict between her militia and a religious cult.',
		image: 'https://gaming-cdn.com/images/products/6215/616x353/the-last-of-us-part-ii-pc-juego-steam-cover.jpg?v=1710171908',
		category: 'Adventure',
	},
	{
		slug: 9,
		name: 'EA Sports F1 24',
		description:
			'Secure your pole position today by pre-ordering the F1® 24 Champions Edition before 31 May 2024 and be the first to experience the Red Bull Racing, Mercedes, Aston Martin, Kick Sauber and Visa Cash App RB liveries in the time trial in F1® 23.',
		image: 'https://gaming-cdn.com/images/products/16263/616x353/ea-sports-f1-24-xbox-one-xbox-series-x-s-xbox-one-xbox-series-x-s-juego-microsoft-store-cover.jpg?v=1717164073',
		category: 'Simulation',
	},
	{
		slug: 10,
		name: 'Assetto Corsa Ultimate Edition',
		description:
			'Ya está aquí la versión más completa del aclamado simulador de conducción. Incluye todos los contenidos descargables y todas las actualizaciones que se han lanzado (Dream Pack 1-2-3, Tripl3Pack, Porsche Pack 1-2-3, Red Pack, Ready To Race, Japanese Pack y Ferrari 70th Anniversary DLCs).',
		image: 'https://gaming-cdn.com/images/products/3098/616x353/assetto-corsa-ultimate-edition-ultimate-edition-pc-juego-steam-cover.jpg?v=1715265138',
		category: 'Simulation',
	},
	{
		slug: 11,
		name: 'Jurassic World Evolution 2',
		description:
			'Jurassic World Evolution 2 is a management and strategy simulation game, also called a "disaster management game" by the creators, and understandably so, given the franchise´s focus on the theme of the 2016 United States presidential election. The game is set in the year 2016, and the player is tasked with managing the aftermath of a global pandemic, which has caused the extinction of several species.',
		image: 'https://gaming-cdn.com/images/products/9005/616x353/jurassic-world-evolution-2-pc-juego-steam-cover.jpg?v=1716991825',
		category: 'Strategy',
	},
	{
		slug: 12,
		name: 'Planet Zoo',
		description:
			'Create a world of wildlife in Planet Zoo. From the developers of Planet Coaster and Zoo Tycoon comes the ultimate zoo simulation, with real, living animals that watch, feel and explore the world you create around them. Experience a campaign across the globe or let your imagination run wild with the freedom of Creation Mode. Create unique habitats and outsized landscapes, make important and influential decisions, and raise your animals as you build and manage the world’s wildest zoos.',
		image: 'https://gaming-cdn.com/images/products/4479/616x353/planet-zoo-pc-juego-steam-cover.jpg?v=1717423817',
		category: 'Strategy',
	},
];
