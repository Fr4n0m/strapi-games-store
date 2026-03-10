import Image from 'next/image';
import Link from 'next/link';
import '@/components/Hero/button.css';
import {
	Category,
	getCategories,
	getCategoriesComponentInfo,
} from '@/lib/get-categories';

const Categories = async () => {
	const [categories, copy] = await Promise.all([
		getCategories(),
		getCategoriesComponentInfo(),
	]);
	const { title, buttonText } = copy;

	return (
		<div
			id='categories'
			className='px-10 py-14 flex flex-col justify-center items-center'
		>
			<h2 className='mb-12 text-center text-4xl md:text-5xl lg:text-6xl font-bold font-archivo-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#2658ac] to-[#27c39f] drop-shadow-[0_0_14px_rgba(38,88,172,0.45)]'>
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
								<Image
									src={category.image}
									alt={category.name}
									width={640}
									height={360}
									unoptimized={category.image.startsWith('http')}
									sizes='(max-width: 768px) 50vw, 33vw'
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
			<Link href='/games'>
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
			</Link>
		</div>
	);
};

export default Categories;
