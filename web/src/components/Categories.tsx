/* import {
	getCategories,
	getCategoriesComponentInfo,
} from '@/lib/get-categories'; */

/* import { getCategoriesComponentInfo } from '@/lib/get-categories';
 */
import { defaultCategories } from '@/mock/categories';
import Link from 'next/link';
import '@/components/Hero/button.css';

export interface Category {
	slug: number;
	name: string;
	image: string;
}

const Categories = async () => {
	/* const strapiCategories = await getCategories(); */

	/* 	const { title } = await getCategoriesComponentInfo();
	 */

	const title = 'Categories',
		buttonText = 'All Games';

	/* const categories =
		strapiCategories.length > 0 ? strapiCategories : defaultCategories; */

	const categories = defaultCategories;

	return (
		<div
			id='categories'
			className='px-10 py-14 flex flex-col justify-center items-center'
		>
			<h2 className='text-5xl font-bold text-center mb-12 font-archivo-black'>
				{title}
			</h2>
			<div className='grid grid-cols-2 mb-12 sm:grid-cols-2 md:grid-cols-3 gap-4'>
				{categories.map((category: Category) => (
					<Link
						key={category.slug}
						href={`/categories/${category.name}`}
						passHref
					>
						<div className='max-w-xs'>
							<div className='relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-all cursor-pointer group'>
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
					</Link>
				))}
			</div>
			<a href='/games'>
				<button className='font-archivo-black uppercase'>
					{buttonText}
					<div id='clip'>
						<div id='leftTop' className='corner'></div>
						<div id='rightBottom' className='corner'></div>
						<div id='rightTop' className='corner'></div>
						<div id='leftBottom' className='corner'></div>
					</div>
					<span id='rightArrow' className='arrow'></span>
					<span id='leftArrow' className='arrow'></span>
				</button>
			</a>
		</div>
	);
};

export default Categories;
