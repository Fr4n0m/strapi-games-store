import Image from 'next/image';
import Link from 'next/link';
import Carousel from '../Carousel';
import './button.css';
import { getHomeInfo } from '@/lib/get-home-info';

const Hero = async () => {
	const { title, description, buttonText, image } = await getHomeInfo();

	return (
		<div className='relative'>
			<div className='relative min-h-screen'>
				<Image
					src={image}
					alt='Featured games banner'
					fill
					priority
					sizes='100vw'
					className='object-cover object-center z-0'
				/>
				<div className='relative z-10 min-h-screen bg-black/55 px-4 pt-20 pb-10 md:pt-24 md:pb-14'>
					<div className='mx-auto flex max-w-6xl flex-col items-center text-center text-white'>
						<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-archivo-black uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#2658ac] to-[#27c39f] drop-shadow-[0_0_16px_rgba(38,88,172,0.55)]'>
							{title}
						</h1>
						<div className='mb-6 max-w-2xl px-4 md:px-0 text-base md:text-xl font-medium tracking-wide text-[#ddebf0] leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.75)]'>
							{description}
						</div>
						<Link href='/#categories'>
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
						<div className='mt-8 w-full max-w-4xl rounded-xl border border-[#2761c3]/45 bg-slate-950/45 p-2 shadow-[0_0_30px_rgba(39,97,195,0.22)]'>
							<Carousel />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
