interface Category {
	id: number;
	name: string;
	image: string;
}

const categories: Category[] = [
	{
		id: 1,
		name: 'Acción',
		image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/12/mejores-juegos-accion-aventura-2018.jpg?tf=3840x',
	},
	{
		id: 2,
		name: 'Aventura',
		image: 'https://i.blogs.es/ab965a/nintendoswitch_tlozbreathofthewild_artwork_illustration_01.0/1366_2000.jpeg',
	},
	{
		id: 3,
		name: 'Deportes',
		image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/07/ea-sports-fc-24-todo-sabemos-sucesor-fifa-24-3084248.jpg?tf=3840x',
	},
	{
		id: 4,
		name: 'Estrategia',
		image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/03/mejores-juegos-estrategia-pc-2259107.jpg?tf=3840x',
	},
	{
		id: 5,
		name: 'RPG',
		image: 'https://i0.wp.com/www.parapcgamers.com/wp-content/uploads/2017/01/mejores-juegos-de-rpg.jpg?resize=800%2C445&ssl=1',
	},
	{
		id: 6,
		name: 'Simulación',
		image: 'https://media.tycsports.com/files/2022/10/19/494670/f1-22_862x485.webp',
	},
];

const Categories: React.FC = () => {
	return (
		<div
			id='categories'
			className='px-10 py-24 flex flex-col justify-center items-center'
		>
			<h2 className='text-5xl font-bold text-center mb-20 font-archivo-black'>
				Categorías
			</h2>
			<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				{categories.map(category => (
					<div key={category.id} className='max-w-xs'>
						<div className='relative rounded-lg overflow-hidden shadow-lg hover:scale-105 cursor-pointer transition-all group'>
							<img
								src={category.image}
								alt={category.name}
								className='w-full h-48 object-cover'
							/>
							<div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all group-hover:bg-transparent'>
								<span className='text-white shadow-black drop-shadow-lg text-xl font-semibold group-hover:text-3xl transition-all'>
									{category.name}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
