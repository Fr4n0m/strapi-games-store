import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Store - Strapi',
	description: 'Strapi - Next.js',
};

const Home = () => {
	return (
		<>
			<Hero />
			<Categories />
			<Footer />
		</>
	);
};

export default Home;
