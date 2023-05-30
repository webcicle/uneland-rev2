import type { FC } from 'react';

type Props = {
	openMenu: () => void;
};

const Navbar: FC<Props> = ({ openMenu }) => {
	return (
		<div className='px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0'>
			<nav
				className='flex items-center justify-between lg:justify-start w-full'
				aria-label='Global'>
				<a href='/' className='-m-1.5 p-1.5'>
					<span className='sr-only'>Unelandia</span>
					<img
						alt='Unelandia logo'
						className='h-8 w-auto lg:max-w-[85%]'
						src='/assets/images/unelandia-logo-black.png'
					/>
				</a>
				<button
					onClick={openMenu}
					type='button'
					className='-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden'>
					<span className='sr-only'>Open main menu</span>
					<svg
						className='h-6 w-6'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						aria-hidden='true'>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'></path>
					</svg>
				</button>
				<div className='hidden lg:ml-12 lg:flex lg:gap-x-14'>
					<a href='/' className='navLink'>
						Home
					</a>
					<a href='/#services' className='navLink'>
						Services
					</a>
					<a href='/blog' className='navLink'>
						Blog
					</a>
					<a href='/contact' className='navLink'>
						Contact
					</a>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
