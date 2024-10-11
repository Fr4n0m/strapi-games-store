export interface Game {
	slug: number;
	name: string;
	description: string;
	image: string;
	category: string;
}

export const defaultGames: Game[] = [
	{
		slug: 1,
		name: 'God of War: Ragnarök',
		description:
			'LA SAGA NÓRDICA CONTINÚA Desarrollado por Santa Monica Studio y adaptado para PC en colaboración con Jetpack Interactive, llega God of War Ragnarök, un épico y emotivo viaje en el que Kratos y Atreus deberán decidir a qué se aferran y qué dejan ir.',
		image: 'https://gaming-cdn.com/images/products/16797/616x353/god-of-war-ragnarok-pc-juego-steam-europe-cover.jpg?v=1727531756',
		category: 'Acción',
	},
	{
		slug: 2,
		name: 'Black Myth: Wukong',
		description:
			'Black Myth: Wukong es un RPG de acción inspirado en la mitología china. La historia está basada en «Viaje al Oeste», una de las cuatro grandes novelas clásicas de la literatura china.',
		image: 'https://gaming-cdn.com/images/products/7678/616x353/black-myth-wukong-pc-juego-steam-europe-us-canada-cover.jpg?v=1728309382',
		category: 'Acción',
	},
	{
		slug: 3,
		name: 'EA Sports FC 25',
		description:
			'EA SPORTS FC™ 25 te ofrece más formas de ganar por el club. Forma equipo con tus colegas en tus modos favoritos con el nuevo Rush de 5 contra 5 y lleva a tu club a la victoria gracias a un control táctico más realista que nunca con FC IQ.',
		image: 'https://gaming-cdn.com/images/products/17255/616x353/ea-sports-fc-25-xbox-series-x-s-xbox-series-x-s-juego-microsoft-store-cover.jpg?v=1727423490',
		category: 'Deportes',
	},
	{
		slug: 4,
		name: 'EA Sports Madden NFL 25',
		description:
			'INMERSIÓN EN EL MODO FRANCHISE El modo Franchise rediseñado ofrece una experiencia renovada del draft de la NFL con la presencia de Roger Goodell, registros de equipos y novatos, nuevos entornos, historias personalizadas, más formas de personalizar tu equipo y tu temporada de la NFL, una nueva experiencia de celebración de la Super Bowl y Franchise Central.',
		image: 'https://gaming-cdn.com/images/products/17169/616x353/ea-sports-madden-nfl-25-xbox-one-xbox-series-x-s-xbox-series-x-s-xbox-one-juego-microsoft-store-cover.jpg?v=1724144952',
		category: 'Deportes',
	},
	{
		slug: 5,
		name: 'Silent Hill 2',
		description:
			'Tras recibir una carta de su mujer fallecida, James se dirige al lugar donde compartieron tantos recuerdos con la esperanza de verla una vez más: Silent Hill. Allí, junto al lago, encuentra a una inquietante mujer que se parece a ella... "Me llamo... Maria", dice la mujer, sonriendo.',
		image: 'https://gaming-cdn.com/images/products/13083/616x353/silent-hill-2-pc-juego-steam-europe-cover.jpg?v=1728466526',
		category: 'RPG',
	},
	{
		slug: 6,
		name: 'Grand Theft Auto V: Premium Online Edition',
		description:
			'Grand Theft Auto V: Premium Edition permite disfrutar por completo de la trama de Grand Theft Auto V, acceder gratuitamente al mundo en constante evolución de Grand Theft Auto Online y a todas las mejoras y contenidos existentes, como Golpe a Cayo Perico, The Diamond Casino & Resort, Golpe a The Diamond Casino, Tráfico de armas y mucho más.',
		image: 'https://gaming-cdn.com/images/products/4211/616x353/grand-theft-auto-v-premium-online-edition-premium-online-edition-pc-juego-rockstar-cover.jpg?v=1713792136',
		category: 'RPG',
	},
	{
		slug: 7,
		name: 'Marvels Spider-Man 2',
		description:
			'Los Spider-Men Peter Parker y Miles Morales se enfrentarán a la prueba definitiva de poder con y sin la máscara mientras luchan para salvar la ciudad, el uno al otro y a sus seres queridos del malvado Venom y de una nueva y peligrosa amenaza simbionte.',
		image: 'https://gaming-cdn.com/images/products/13335/616x353/marvel-s-spider-man-2-pc-juego-steam-cover.jpg?v=1710151147',
		category: 'Aventura',
	},
	{
		slug: 8,
		name: 'The Last Of Us Part II',
		description:
			'Ambientado cuatro años después de The Last of Us (2013), el juego se centra en dos personajes jugables en un Estados Unidos post-apocalíptico cuyas vidas se entrelazan: Ellie, que parte en venganza por un asesinato, y Abby, una soldado que se ve involucrada en un conflicto entre su milicia y un culto religioso.',
		image: 'https://gaming-cdn.com/images/products/6215/616x353/the-last-of-us-part-ii-pc-juego-steam-cover.jpg?v=1710171908',
		category: 'Aventura',
	},
	{
		slug: 9,
		name: 'EA Sports F1 24',
		description:
			'Asegura tu pole hoy al reservar la F1® 24 Champions Edition antes del 31 de mayo de 2024 y disfruta antes que nadie de los diseños de Red Bull Racing, Mercedes, Aston Martin, Kick Sauber y Visa Cash App RB en la prueba contrarreloj** en F1® 23.',
		image: 'https://gaming-cdn.com/images/products/16263/616x353/ea-sports-f1-24-xbox-one-xbox-series-x-s-xbox-one-xbox-series-x-s-juego-microsoft-store-cover.jpg?v=1717164073',
		category: 'Simulación',
	},
	{
		slug: 10,
		name: 'Assetto Corsa Ultimate Edition',
		description:
			'Ya está aquí la versión más completa del aclamado simulador de conducción. Incluye todos los contenidos descargables y todas las actualizaciones que se han lanzado (Dream Pack 1-2-3, Tripl3Pack, Porsche Pack 1-2-3, Red Pack, Ready To Race, Japanese Pack y Ferrari 70th Anniversary DLCs).',
		image: 'https://gaming-cdn.com/images/products/3098/616x353/assetto-corsa-ultimate-edition-ultimate-edition-pc-juego-steam-cover.jpg?v=1715265138',
		category: 'Simulación',
	},
	{
		slug: 11,
		name: 'Jurassic World Evolution 2',
		description:
			'Jurassic World Evolution 2 es un juego de simulación de gestión y estrategia, también llamado un "juego de gestión de desastres" según los creadores, y es comprensible, dada la premisa arriesgada de la franquicia. Este juego es la secuela de Jurassic World Evolution y una continuación de los eventos que suceden en la película Jurassic World: Fallen Kingdom.',
		image: 'https://gaming-cdn.com/images/products/9005/616x353/jurassic-world-evolution-2-pc-juego-steam-cover.jpg?v=1716991825',
		category: 'Estrategia',
	},
	{
		slug: 12,
		name: 'Planet Zoo',
		description:
			'Crea un mundo de vida salvaje en Planet Zoo. De los desarrolladores de Planet Coaster y Zoo Tycoon, llega el simulador de zoológicos definitivo, con auténticos animales vivos que observan, sienten y exploran el mundo que tú generes a su alrededor. Vive una campaña por todo el mundo o deja volar tu imaginación con la libertad del modo Creación. Crea hábitats únicos y paisajes descomunales, toma decisiones importantes e influyentes, y cría tus animales durante la construcción y gestión de los zoológicos más salvajes del mundo.',
		image: 'https://gaming-cdn.com/images/products/4479/616x353/planet-zoo-pc-juego-steam-cover.jpg?v=1717423817',
		category: 'Estrategia',
	},
];
