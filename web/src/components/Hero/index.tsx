import React from 'react';
import Carousel from '../Carousel';
import './button.css';

interface HeroProps {
	title: string;
	description: string;
	buttonText: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, buttonText }) => {
	return (
		<div className='relative'>
			<div
				className='bg-cover bg-center h-screen'
				style={{
					backgroundImage: 'url(/assets/background-hero.jpg)',
				}}
			>
				<div className='flex items-start justify-center h-full bg-black bg-opacity-50'>
					<div className='flex flex-col mt-24 md:mt-32 justify-center items-center text-center text-white px-4'>
						<h1 className='text-4xl md:text-6xl font-bold mb-4 font-archivo-black'>
							{title}
						</h1>
						<p className='text-md md:text-lg px-10 md:px-0 mb-6'>
							{description}
						</p>
						<a href='/#categories'>
							<button className='font-archivo-black uppercase'>
								{buttonText}
								<div id='clip'>
									<div id='leftTop' className='corner'></div>
									<div
										id='rightBottom'
										className='corner'
									></div>
									<div id='rightTop' className='corner'></div>
									<div
										id='leftBottom'
										className='corner'
									></div>
								</div>
								<span id='rightArrow' className='arrow'></span>
								<span id='leftArrow' className='arrow'></span>
							</button>
						</a>
					</div>
				</div>
				<div className='absolute bottom-10 left-4 md:left-96 right-4 md:right-96 rounded-lg hover:rounded-lg transition-all'>
					<Carousel />
				</div>
			</div>
		</div>
	);
};

export default Hero;
