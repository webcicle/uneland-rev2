import React, { useState } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';

type Props = {};

const Header = (props: Props) => {
	const [isOpen, setIsOpen] = useState(false);
	const closeMenu = () => setIsOpen(false);
	const openMenu = () => setIsOpen(true);

	return (
		<header className='absolute inset-x-0 top-0 z-50 font-koulen bg-gray-50 pb-4 shadow-lg'>
			<div className='mx-auto max-w-7xl'>
				<Navbar openMenu={openMenu} />
				<MobileNav closeMenu={closeMenu} isOpen={isOpen} />
			</div>
		</header>
	);
};

export default Header;
