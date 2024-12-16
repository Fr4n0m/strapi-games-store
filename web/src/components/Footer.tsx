const Footer = () => {
	return (
		<footer className='bg-transparent text-white py-6'>
			<div className='container mx-auto text-center'>
				<p className='text-sm'>
					&copy; {new Date().getFullYear()} Fran11799 Games Store. All
					rights reserved.
				</p>
				<div className='mt-2'>
					<a
						href='https://professional-portfolio-nine.vercel.app/'
						className='text-gray-400 hover:text-gray-300 mx-2'
					>
						Personal Web
					</a>
					<span>|</span>
					<a
						href='mailto:fran11799@gmail.com'
						className='text-gray-400 hover:text-gray-300 mx-2'
					>
						Contact
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
