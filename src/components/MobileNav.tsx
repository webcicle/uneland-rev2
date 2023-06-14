import { useState } from 'react';

const MobileNav = ({
	isOpen,
	closeMenu,
}: {
	isOpen: boolean;
	closeMenu: () => void;
}) => {
	return (
		// Mobile menu, show/hide based on menu open state.
		<div
			className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}
			role='dialog'
			aria-modal='true'>
			{/* Background backdrop, show/hide based on slide-over state. */}
			<div className='fixed inset-0 z-50'></div>
			<div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
				<div className='flex items-center justify-between'>
					<a href='/' className='-m-1.5 p-1.5'>
						<span className='sr-only'>Your Company</span>
						<img
							className='h-8 w-auto'
							src='/assets/images/unelandia-logo-black.png'
							alt=''
						/>
					</a>
					<button
						type='button'
						onClick={closeMenu}
						className='-m-2.5 rounded-md p-2.5 text-gray-700'>
						<span className='sr-only'>Close menu</span>
						<svg
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							aria-hidden='true'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'></path>
						</svg>
					</button>
				</div>
				<div className='mt-6 flow-root'>
					<div className='-my-6 divide-y divide-gray-500/10'>
						<div className='space-y-2 py-6'>
							<a
								href='#'
								className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
								Home
							</a>
							<a
								href='#contact-us'
								className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
								Contact
							</a>
							<a
								href='#'
								className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
								Blog
							</a>
							<a
								href='#'
								className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
								Services
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MobileNav;
