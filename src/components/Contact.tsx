import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type InputForm = {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	message: string;
};

export default function ContactForm() {
	const [status, setStatus] = useState<'Idle' | 'Sending' | 'Sent'>('Idle');
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<InputForm>();

	const submitForm: SubmitHandler<InputForm> = (data) => {
		setStatus('Sending');
		console.log(data);
	};

	return (
		<div className='relative isolate bg-white font-koulen' id='contact-us'>
			<img
				className='absolute inset-0 w-full z-[-1] h-full object-cover'
				src='/assets/images/seo-bg.webp'
				alt=''
			/>

			<div className='absolute inset-0 w-full z-[-1] h-full object-cover bg-blue-200 opacity-80' />
			<div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2'>
				<div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
					<div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
						<div className='absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-800/10 lg:w-1/2'>
							<svg
								className='absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
								aria-hidden='true'>
								<defs>
									<pattern
										id='83fd4e5a-9d52-42fc-97b6-718e5d7ee527'
										width='200'
										height='200'
										x='100%'
										y='-1'
										patternUnits='userSpaceOnUse'>
										<path d='M130 200V.5M.5 .5H200' fill='none'></path>
									</pattern>
								</defs>
								<rect
									width='100%'
									height='100%'
									strokeWidth='0'
									fill='white'></rect>
								<svg x='100%' y='-1' className='overflow-visible fill-gray-50'>
									<path d='M-470.5 0h201v201h-201Z' strokeWidth='0'></path>
								</svg>
								<rect
									width='100%'
									height='100%'
									strokeWidth='0'
									fill='url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)'></rect>
							</svg>
						</div>
						<h2 className='text-3xl font-bold tracking-tight text-gray-50'>
							Ready to Grow? Let's go!
						</h2>
						<p className='mt-6 text-lg leading-8 text-blue-900'>
							If you're to elevate your brand and drive your business forward,
							we'd love to hear from you. Share your project ideas, business
							needs, or even your toughest challenges, and let's craft a
							strategy tailored just for you.
						</p>
					</div>
				</div>
				<form
					onSubmit={handleSubmit(submitForm)}
					className='px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48 bg-white border-l-8 border-l-gray-600'>
					<div className='mx-auto max-w-xl lg:mr-0 lg:max-w-lg'>
						<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
							<div>
								<label
									htmlFor='first-name'
									className='block text-base font-semibold leading-6 text-gray-800'>
									First name
								</label>
								<div className='mt-2.5'>
									<input
										type='text'
										{...register('firstName', { required: true })}
										id='first-name'
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6'
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor='last-name'
									className='block text-base font-semibold leading-6 text-gray-800'>
									Last name
								</label>
								<div className='mt-2.5'>
									<input
										type='text'
										{...register('lastName', { required: true })}
										id='last-name'
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='email'
									className='block text-base font-semibold leading-6 text-gray-800'>
									Email
								</label>
								<div className='mt-2.5'>
									<input
										type='email'
										{...register('email', { required: true })}
										id='email'
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='phone-number'
									className='block text-base font-semibold leading-6 text-gray-800'>
									Phone number
								</label>
								<div className='mt-2.5'>
									<input
										type='tel'
										{...register('phoneNumber', { required: true })}
										id='phone-number'
										className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6'
									/>
								</div>
							</div>
							<div className='sm:col-span-2'>
								<label
									htmlFor='message'
									className='block text-base font-semibold leading-6 text-gray-800'>
									Message
								</label>
								<div className='mt-2.5'>
									<textarea
										{...register('message', { required: true })}
										id='message'
										rows={4}
										className='resize-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-base sm:leading-6'></textarea>
								</div>
							</div>
						</div>
						<div className='mt-8 flex justify-end'>
							<button
								type='submit'
								className='rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
								Send message
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
