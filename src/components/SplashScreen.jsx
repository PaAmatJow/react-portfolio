import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { sentence, letter } from '../animations';
// animation

const SplashScreen = ({ finishLoading }) => {
	const logoName = 'developedbyamat';
	useEffect(() => {
		const timeout = setTimeout(() => {
			finishLoading();
		}, 3000);
    return ()=> clearTimeout(timeout)
	}, [finishLoading]);
	return (
		<div className='bg-gray-900 h-screen flex items-center justify-center'>
			<motion.h1
				className='text-white font-bold font-edu text-3xl md:text-4xl'
				variants={sentence}
				initial='hidden'
				animate='visible'
			>
				{logoName.split('').map((char, index) => {
					return (
						<motion.span key={char + '-' + index} variants={letter}>
							{char}
						</motion.span>
					);
				})}
			</motion.h1>
		</div>
	);
};

export default SplashScreen;
