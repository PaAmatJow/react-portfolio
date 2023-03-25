import Head from 'next/head';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
	AiFillTwitterCircle,
	AiFillLinkedin,
	AiFillInstagram,
} from 'react-icons/ai';
import { FaGithub, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { heroCont, heroAnim, imgAnim, scrollAnim } from '@/animations';
import SplashScreen from '../components/SplashScreen';
import { projects, tech } from '@/projects';
import Image from 'next/image';
import pamz3 from '../../public/pamz2-modified.png';

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);

	const pathname = usePathname();
	const isHome = pathname === '/';
	const [isLoading, setIsLoading] = useState(isHome);

	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>DevelopedByAmat</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			{isLoading && isHome ? (
				<SplashScreen finishLoading={() => setIsLoading(false)} />
			) : (
				<main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
					<section className='min-h-screen'>
						<nav className='py-10 flex justify-between items-center'>
							<h1 className='text-2xl font-edu font-semibold dark:text-white'>
								developedbyamat
							</h1>

							<ul className='flex items-center'>
								<li>
									<BsFillMoonStarsFill
										onClick={() => setDarkMode(!darkMode)}
										className='text-2xl cursor-pointer dark:text-white'
									/>
								</li>
								<li>
									<a
										href='#projects'
										className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-200'
									>
										Projects
									</a>
								</li>
							</ul>
						</nav>
						<motion.div variants={heroCont} initial='hidden' animate='visible'>
							<div className='text-center p-10'>
								<div className='overflow-hidden'>
									<motion.h2
										variants={heroAnim}
										className='text-5xl py-2 text-teal-600 font-medium md:text-6xl '
									>
										Pa Amat Jow
									</motion.h2>
								</div>
								<div className='overflow-hidden'>
									<motion.h3
										variants={heroAnim}
										className='text-2xl font-edu font-semibold tracking-wider py-2 md:text-3xl dark:text-white'
									>
										Frontend Developer.
									</motion.h3>
								</div>
								<div className='overflow-hidden'>
									<motion.p
										variants={heroAnim}
										className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300'
									>
										Hi, I am a frontend enthusiast who aspires to become a
										fullstack developer.
									</motion.p>
								</div>
							</div>
							<div className='overflow-hidden'>
								<motion.div
									variants={heroAnim}
									className='text-5xl flex justify-center gap-16 py-3 transition-all duration-200'
								>
									<a href='https://twitter.com/_PaAmat_' className='text-gray-600 hover:text-gray-400  dark:text-gray-400 dark:hover:text-gray-600' target='_blank' rel='noreferrer'>
										<AiFillTwitterCircle />
									</a>

									<a href='https://www.linkedin.com/in/pa-amat-jow-3034b0244/' className='text-gray-600 hover:text-gray-400  dark:text-gray-400 dark:hover:text-gray-600' target='_blank' rel='noreferrer'>
										<AiFillLinkedin />
									</a>

									<a href='https://instagram.com/paamat_06?igshid=ZDdkNTZiNTM=' className='text-gray-600 hover:text-gray-400  dark:text-gray-400 dark:hover:text-gray-600' target='_blank' rel='noreferrer'>
										<AiFillInstagram />
									</a>
								</motion.div>
							</div>
							<div className='overflow-hidden'>
								<motion.div
									variants={imgAnim}
									className='relative mt-20 mx-auto bg-gradient-to-b from-teal-300 rounded-full w-80 h-80 overflow-hidden md:w-96 md:h-96 dark:from-teal-500'
								>
									<Image
										src={pamz3}
										alt='Pa Amat'
										className='absolute bottom-0 left-0 right-4 mx-auto w-[295px] h-[370px] md:w-[320px] md:h-[430px]'
									/>
								</motion.div>
							</div>
						</motion.div>
					</section>
					{/* technologies */}
					<motion.section
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.4 }}
						className='py-16'
					>
						<motion.div variants={scrollAnim} className='text-center '>
							<h3 className='text-2xl md:text-3xl py-2 my-2 dark:text-white'>
								Technologies I work with
							</h3>
							<div className='border-b-2 border-teal-500 w-[10rem] mx-auto'></div>
							{/* <p className='text-md md:text-xl max-w-xl mx-auto py-2 leading-8 text-gray-800 my-2 dark:text-gray-300'>
							I spend most of my free time building projects to increase my
							knowledge in these technologies.
						</p> */}
						</motion.div>
						<motion.div
							variants={scrollAnim}
							className='flex flex-wrap gap-8 justify-center mx-auto max-w-[900px] my-8 dark:text-white '
						>
							{tech.map((item) => {
								const { id, name, img } = item;
								return (
									<div
										key={id}
										className='flex flex-col space-y-2 items-center w-36 py-2 rounded-lg shadow-[0_4px_15px] shadow-teal-500/40 dark:shadow-teal-500/20 dark:bg-gray-800'
									>
										<div className='relative w-[80px] h-[80px] md:w-[100px] md:h-[100px]'>
											<Image
												src={img}
												fill
												className='object-cover'
												alt='react'
											/>
										</div>
										<h3 className='text-lg'>{name}</h3>
									</div>
								);
							})}
						</motion.div>
					</motion.section>
					{/* projects */}

					<motion.section
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true, amount: 0.1 }}
						id='projects'
						className='py-16'
					>
						<motion.div variants={scrollAnim} className='text-center'>
							<h3 className='text-2xl md:text-3xl py-2 my-2 dark:text-white'>
								Projects
							</h3>
							<div className='border-b-2 border-teal-500 w-[10rem] mx-auto'></div>
							<p className='text-md md:text-xl max-w-xl mx-auto py-2 leading-8 text-gray-800 my-2 dark:text-gray-300'>
								I use my free time to build projects that help me understand the
								concepts I have learned.
							</p>
						</motion.div>
						<motion.div
							variants={scrollAnim}
							className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'
						>
							{projects.map((project) => {
								const { id, name, github, url, image } = project;
								console.log(image);
								return (
									<div
										key={id}
										className='relative group basis-1/3 flex-1 shadow-[0_4px_15px] shadow-teal-500/40 dark:shadow-none rounded-lg'
									>
										<div className='absolute bottom-0 right-0 left-0 h-full p-2 px-4 text-center rounded-lg bg-teal-200 bg-opacity-60 opacity-0 group-hover:opacity-100 duration-500'>
											<div className='flex flex-row space-x-8 items-center justify-center h-full '>
												<a
													href={github}
													target='_blank'
													rel='noreferrer'
													className='text-2xl text-teal-900 hover:text-teal-700 transition-all duration-200'
												>
													<FaGithub />
												</a>
												<a
													href={url}
													target='_blank'
													rel='noreferrer'
													className='text-2xl text-teal-900 hover:text-teal-700'
												>
													<FaPlay />
												</a>
											</div>
										</div>
										<Image
											src={image}
											className='rounded-lg object-cover w-full h-full'
											alt=''
										/>
									</div>
								);
							})}
						</motion.div>
					</motion.section>
				</main>
			)}
		</div>
	);
}
