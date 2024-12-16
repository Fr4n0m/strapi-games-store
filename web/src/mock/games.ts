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
	{
		slug: 13,
		name: 'The Witcher 3: Wild Hunt',
		description:
			'The Witcher 3 is an open-world RPG that follows Geralt of Rivia, a monster hunter, in a dark, medieval fantasy world. It features a rich narrative and complex character interactions.',
		image: 'https://gaming-cdn.com/images/products/1497/616x353/the-witcher-3-wild-hunt-game-of-the-year-edition-goty-edition-pc-juego-gog-com-cover.jpg?v=1670929985',
		category: 'RPG',
	},
	{
		slug: 14,
		name: 'Hades',
		description:
			'Hades is a rogue-like dungeon crawler that blends action-packed combat with a compelling narrative. As Zagreus, the son of Hades, you attempt to escape the underworld and discover the truth behind your lineage.',
		image: 'https://gaming-cdn.com/images/products/16435/616x353/hades-pc-juego-steam-cover.jpg?v=1731023124',
		category: 'Action',
	},
	{
		slug: 15,
		name: 'Red Dead Redemption 2',
		description:
			'Set in the American frontier, Red Dead Redemption 2 is an open-world action-adventure game that tells the story of Arthur Morgan, a member of the Van der Linde gang. It blends a cinematic story with immersive gameplay.',
		image: 'https://gaming-cdn.com/images/products/5972/616x353/hades-pc-mac-juego-steam-cover.jpg?v=1670573156',
		category: 'Action',
	},
	{
		slug: 16,
		name: 'Cyberpunk 2077',
		description:
			'Cyberpunk 2077 is a futuristic RPG set in the dystopian city of Night City. Players take on the role of V, a mercenary, as they navigate a world of high-tech, neon-lit chaos.',
		image: 'https://gaming-cdn.com/images/products/3578/616x353/cyberpunk-2077-xbox-one-xbox-series-x-s-juego-microsoft-store-europe-cover.jpg?v=1732116101',
		category: 'RPG',
	},
	{
		slug: 17,
		name: 'Forza Horizon 5',
		description:
			'Forza Horizon 5 is an open-world racing game set in a detailed recreation of Mexico. Players race across diverse landscapes while completing events and challenges.',
		image: 'https://gaming-cdn.com/images/products/8701/616x353/forza-horizon-5-pc-xbox-one-xbox-series-x-s-pc-xbox-one-xbox-series-x-s-juego-microsoft-store-cover.jpg?v=1718271679',
		category: 'Simulation',
	},
	{
		slug: 18,
		name: 'Sekiro: Shadows Die Twice',
		description:
			'Sekiro: Shadows Die Twice is an action-adventure game that combines stealth and intense combat. Players control a shinobi named Sekiro as he embarks on a quest for revenge in feudal Japan.',
		image: 'https://gaming-cdn.com/images/products/3520/616x353/sekiro-shadows-die-twice-xbox-one-juego-microsoft-store-cover.jpg?v=1732117146',
		category: 'Action',
	},
	{
		slug: 19,
		name: "Assassin's Creed Odyssey",
		description:
			'Explore Ancient Greece in this open-world action RPG. As Alexios or Kassandra, a mercenary, you will navigate a world filled with historical figures, mythical creatures, and ancient secrets.',
		image: 'https://gaming-cdn.com/images/products/2648/616x353/assassin-s-creed-odyssey-pc-juego-ubisoft-connect-europe-cover.jpg?v=1701185469',
		category: 'RPG',
	},
	{
		slug: 20,
		name: 'Ghost of Tsushima',
		description:
			'A samurai action game set during the Mongol invasion of Japan. Players control Jin Sakai, a warrior who must adapt to new combat techniques to protect his homeland.',
		image: 'https://gaming-cdn.com/images/products/9093/616x353/ghost-of-tsushima-director-s-cut-pc-juego-steam-cover.jpg?v=1715876608',
		category: 'Action',
	},
	{
		slug: 21,
		name: 'Hitman 3',
		description:
			'Play as Agent 47 in a series of meticulously designed levels, where stealth and strategy are key to eliminating targets. Each mission is an opportunity for creative problem-solving.',
		image: 'https://gaming-cdn.com/images/products/9020/616x353/hitman-3-pc-juego-epic-games-europe-cover.jpg?v=1719572218',
		category: 'Action',
	},
	{
		slug: 22,
		name: 'The Elder Scrolls V: Skyrim',
		description:
			'Skyrim is a fantasy RPG where you control the Dragonborn, the prophesied hero who must save the world from an ancient dragon. Explore a vast open world filled with quests and adventures.',
		image: 'https://gaming-cdn.com/images/products/9407/616x353/the-elder-scrolls-v-skyrim-anniversary-edition-anniversary-edition-pc-juego-steam-cover.jpg?v=1702486981',
		category: 'RPG',
	},
	{
		slug: 23,
		name: 'Final Fantasy VII Remake',
		description:
			'A reimagining of the classic RPG, where Cloud Strife and his allies battle the megacorporation Shinra and face the threat of the mysterious Sephiroth.',
		image: 'https://gaming-cdn.com/images/products/18032/616x353/final-fantasy-vii-remake-3-pc-juego-steam-cover.jpg?v=1731922443',
		category: 'RPG',
	},
	{
		slug: 24,
		name: 'Diablo IV',
		description:
			'The latest installment in the legendary action RPG series. Players explore the world of Sanctuary, battling demons and uncovering the truth behind the return of the Prime Evils.',
		image: 'https://gaming-cdn.com/images/products/17471/616x353/diablo-iv-vessel-of-hatred-xbox-one-xbox-series-x-s-xbox-one-xbox-series-x-s-juego-microsoft-store-europe-cover.jpg?v=1728465738',
		category: 'RPG',
	},
	{
		slug: 25,
		name: 'Resident Evil Village',
		description:
			"The eighth entry in the Resident Evil series. Ethan Winters must explore a strange village and fight terrifying monsters while uncovering the truth about his daughter's abduction.",
		image: 'https://gaming-cdn.com/images/products/13107/616x353/resident-evil-village-gold-edition-gold-edition-pc-juego-steam-cover.jpg?v=1683648223',
		category: 'Adventure',
	},
	{
		slug: 26,
		name: 'NBA 2K25 All-Star Edition',
		description:
			'Become the king of the court with ultimate authenticity and realism with ProPLAY, putting you in complete control of your game in NBA 2K25. Define your legacy in MyCAREER, MyTEAM, MyNBA and The W. Express yourself with a host of customization options and explore an all-new City filled with opportunity.',
		image: 'https://gaming-cdn.com/images/products/17237/616x353/nba-2k25-all-star-edition-all-star-edition-pc-juego-steam-europe-cover.jpg?v=1731919759',
		category: 'Sports',
	},
	{
		slug: 27,
		name: 'Minecraft Dungeons',
		description:
			'A dungeon-crawling action RPG set in the Minecraft universe. Players explore dungeons, collect loot, and battle enemies with friends or solo.',
		image: 'https://gaming-cdn.com/images/products/4834/616x353/minecraft-dungeons-only-pc-pc-juego-microsoft-store-cover.jpg?v=1733327101',
		category: 'RPG',
	},
	{
		slug: 28,
		name: "No Man's Sky",
		description:
			'Explore a procedurally generated universe in this space exploration game. Players can mine resources, trade, fight, and build in an infinite galaxy of planets.',
		image: 'https://gaming-cdn.com/images/products/414/616x353/no-man-s-sky-pc-mac-juego-steam-cover.jpg?v=1721211784',
		category: 'Adventure',
	},
	{
		slug: 29,
		name: 'Hollow Knight',
		description:
			'A critically acclaimed action-adventure game where players explore a vast, underground world filled with dangers, mysteries, and powerful enemies.',
		image: 'https://gaming-cdn.com/images/products/3952/616x353/hollow-knight-silksong-pc-juego-steam-cover.jpg?v=1729862155',
		category: 'Action',
	},
	{
		slug: 31,
		name: 'The Outer Worlds',
		description:
			'An RPG where players control a character waking up from cryosleep in an alternate future. The game features a branching narrative, exploration, and character customization.',
		image: 'https://gaming-cdn.com/images/products/7749/616x353/the-outer-worlds-pc-juego-steam-europe-cover.jpg?v=1734077165',
		category: 'RPG',
	},
	{
		slug: 32,
		name: 'The Sims 4',
		description:
			'Create and control people in a virtual world. Customize their homes, help them navigate their careers, and explore various expansions that add even more gameplay options.',
		image: 'https://gaming-cdn.com/images/products/2463/616x353/the-sims-4-bundle-pack-6-pc-mac-juego-ea-app-cover.jpg?v=1707152174',
		category: 'Simulation',
	},
	{
		slug: 33,
		name: 'Cities: Skylines',
		description:
			'A city-building and management simulator where players can design and manage their own metropolis, dealing with issues such as traffic, pollution, and budgeting.',
		image: 'https://gaming-cdn.com/images/products/519/616x353/cities-skylines-pc-mac-juego-steam-cover.jpg?v=1662469928',
		category: 'Simulation',
	},
	{
		slug: 34,
		name: 'Farming Simulator 25',
		description:
			'Manage your own farm by planting crops, raising animals, and expanding your property. The game offers a realistic farming experience with different machinery and farming techniques.',
		image: 'https://gaming-cdn.com/images/products/16993/616x353/farming-simulator-25-pc-mac-juego-steam-cover.jpg?v=1731485914',
		category: 'Simulation',
	},
	{
		slug: 35,
		name: 'Microsoft Flight Simulator',
		description:
			'The most realistic flight simulation experience, offering detailed aircraft models, real-world weather conditions, and an expansive world to fly across.',
		image: 'https://gaming-cdn.com/images/products/17684/616x353/microsoft-flight-simulator-2024-pc-xbox-series-x-s-pc-xbox-series-x-s-juego-microsoft-store-cover.jpg?v=1732096189',
		category: 'Simulation',
	},
	{
		slug: 36,
		name: 'Planet Coaster 2',
		description:
			'Build and manage your own theme park. Players can design roller coasters, manage park finances, and keep guests happy with attractions and amenities.',
		image: 'https://gaming-cdn.com/images/products/17213/616x353/planet-coaster-2-pc-juego-steam-europe-us-canada-cover.jpg?v=1731594936',
		category: 'Strategy',
	},
	{
		slug: 37,
		name: 'Euro Truck Simulator 2',
		description:
			'Drive a truck across Europe, delivering cargo and managing logistics. The game features realistic driving mechanics and a vast open world to explore.',
		image: 'https://gaming-cdn.com/images/products/309/616x353/euro-truck-simulator-2-pc-mac-juego-steam-europe-us-canada-cover.jpg?v=1732535055',
		category: 'Simulation',
	},
	{
		slug: 38,
		name: 'SimCity 4',
		description:
			'One of the most iconic city-building simulations, where players can manage everything from zoning and utilities to public services and transportation systems.',
		image: 'https://gaming-cdn.com/images/products/2996/616x353/simcity-4-deluxe-edition-deluxe-edition-pc-mac-juego-steam-cover.jpg?v=1649846875',
		category: 'Simulation',
	},
	{
		slug: 39,
		name: 'RollerCoaster Tycoon 2',
		description:
			'Design your own theme park with roller coasters, attractions, and manage its growth. The game allows for a fun and engaging simulation of theme park operations.',
		image: 'https://gaming-cdn.com/images/products/2962/616x353/rollercoaster-tycoon-2-triple-thrill-pack-ultimate-pack-pc-juego-steam-cover.jpg?v=1673629813',
		category: 'Strategy',
	},
	{
		slug: 40,
		name: 'Car Mechanic Simulator 2021',
		description:
			'Become a car mechanic and repair vehicles in a detailed simulation environment. The game allows you to restore cars and explore the inner workings of various automotive parts.',
		image: 'https://gaming-cdn.com/images/products/9381/616x353/car-mechanic-simulator-2021-pc-juego-steam-cover.jpg?v=1711472863',
		category: 'Simulation',
	},
	{
		slug: 41,
		name: 'Train Simulator 2021',
		description:
			'Take control of various trains in this simulation game, driving them across a variety of routes while adhering to schedules and managing other operational tasks.',
		image: 'https://gaming-cdn.com/images/products/12836/616x353/train-simulator-classic-2023-pc-juego-steam-cover.jpg?v=1732806889',
		category: 'Simulation',
	},
	{
		slug: 42,
		name: 'Two Point Hospital',
		description:
			'Manage a quirky hospital in this simulation game where you build treatment rooms, hire staff, and cure patients of comically exaggerated diseases.',
		image: 'https://gaming-cdn.com/images/products/2465/616x353/two-point-hospital-pc-mac-juego-steam-europe-cover.jpg?v=1704793473',
		category: 'Simulation',
	},
	{
		slug: 43,
		name: 'Bioshock Infinite',
		description:
			"While more of a first-person shooter, it features deep simulation-like elements as players explore the floating city of Columbia and solve mysteries about its history and the protagonist's role.",
		image: 'https://gaming-cdn.com/images/products/172/616x353/bioshock-infinite-pc-mac-juego-steam-europe-cover.jpg?v=1720623796',
		category: 'Simulation',
	},
	{
		slug: 44,
		name: 'Construction Simulator 3',
		description:
			'Experience the world of construction with realistic machinery and projects, from building roads to large-scale construction sites.',
		image: 'https://gaming-cdn.com/images/products/12936/616x353/construction-simulator-pc-juego-steam-cover.jpg?v=1721289661',
		category: 'Simulation',
	},
	{
		slug: 45,
		name: 'SnowRunner',
		description:
			'Drive through extreme environments with powerful off-road vehicles, completing difficult tasks and navigating treacherous terrain.',
		image: 'https://gaming-cdn.com/images/products/8798/616x353/snowrunner-pc-juego-steam-cover.jpg?v=1704798118',
		category: 'Simulation',
	},
	{
		slug: 47,
		name: 'Oxygen Not Included',
		description:
			'A space-colony simulation where players manage resources and ensure the survival of a group of colonists trapped underground on an alien planet.',
		image: 'https://gaming-cdn.com/images/products/4538/616x353/oxygen-not-included-pc-mac-juego-steam-cover.jpg?v=1717423116',
		category: 'Simulation',
	},
	{
		slug: 48,
		name: 'Football Manager 2025',
		description:
			'Take control of a football club as the manager, making strategic decisions about the team, tactics, and overall development to lead them to success.',
		image: 'https://gaming-cdn.com/images/products/17673/616x353/football-manager-25-multi-platform-pc-juego-europe-cover.jpg?v=1728569800',
		category: 'Sports',
	},
	{
		slug: 49,
		name: 'Surviving Mars',
		description:
			'Colonize Mars in this strategy-simulation game. Build domes, manage resources, and ensure the survival of your settlers in a hostile environment.',
		image: 'https://gaming-cdn.com/images/products/9518/616x353/surviving-mars-below-and-beyond-pc-mac-juego-steam-cover.jpg?v=1652957533',
		category: 'Simulation',
	},
];
