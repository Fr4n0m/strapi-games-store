import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import Footer from '@/components/Footer';

export const metadata = {
	title: 'Store - Strapi',
	description: 'Strapi - Next.js',
};

export default function Home() {
	return (
		<>
			<Hero
				title='Bienvenido a la Tienda'
				description='Descubre los últimos lanzamientos y las mejores ofertas.'
				buttonText='Juegos'
			/>
			<Categories />
			<Footer />
		</>
	);
}
