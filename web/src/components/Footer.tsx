const Footer: React.FC = () => {
	return (
		<footer className='bg-transparent text-white py-6'>
			<div className='container mx-auto text-center'>
				<p className='text-sm'>
					&copy; {new Date().getFullYear()} Fran11799 Games Store.
					Todos los derechos reservados.
				</p>
				<div className='mt-2'>
					<a
						href='/politicas'
						className='text-gray-400 hover:text-gray-300 mx-2'
					>
						Políticas de Privacidad
					</a>
					<span>|</span>
					<a
						href='https://professional-portfolio-nine.vercel.app/'
						className='text-gray-400 hover:text-gray-300 mx-2'
					>
						Contacto
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
