const Footer = () => {
	return (
		<footer className='border-t border-cyan-400/20 bg-black/40 text-white py-8'>
			<div className='container mx-auto text-center px-4'>
				<p className='text-sm md:text-base text-slate-200'>
					&copy; 2026 Fran11799 Games Store. Built for demo purposes.
				</p>
				<div className='mt-4 flex items-center justify-center gap-4 text-sm md:text-base'>
					<a
						href='https://codebyfran.es'
						target='_blank'
						rel='noopener noreferrer'
						className='rounded-md border border-cyan-300/30 px-3 py-1 text-cyan-200 transition hover:bg-cyan-500/10 hover:text-cyan-100'
					>
						Fr4n0m
					</a>
					<span className='text-slate-500'>|</span>
					<span className='inline-flex items-center text-slate-300'>
						<span>PRs are welcome on</span>
						<a
							href='https://github.com/Fr4n0m/strapi-games-store'
							target='_blank'
							rel='noopener noreferrer'
							className='ml-3 inline-flex items-center gap-1 text-slate-200 transition hover:text-white'
						>
							<svg
								viewBox='0 0 24 24'
								aria-hidden='true'
								className='h-4 w-4'
								fill='currentColor'
							>
								<path d='M12 .5C5.73.5.75 5.48.75 11.76c0 5.02 3.25 9.27 7.76 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.1-3.15.69-3.82-1.34-3.82-1.34-.52-1.3-1.26-1.65-1.26-1.65-1.03-.71.08-.7.08-.7 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.66 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.62 0-1.24.45-2.25 1.17-3.04-.12-.29-.5-1.44.11-3 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.61 1.56.23 2.71.11 3 .73.79 1.17 1.8 1.17 3.04 0 4.37-2.66 5.33-5.2 5.61.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.12 0 .3.2.66.79.55 4.5-1.5 7.74-5.76 7.74-10.78C23.25 5.48 18.27.5 12 .5z' />
							</svg>
							<span>GitHub</span>
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
