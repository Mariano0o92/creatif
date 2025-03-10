import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import DownArrow from '../../assets/downArrow.svg'

const words: string[] = ['Strony internetowe', 'Hosting', 'Domena', 'SEO', 'Opieka nad stroną']

export default function Hero() {
	const [index, setIndex] = useState(0)
	const [isLastSection, setIsLastSection] = useState(false)

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prevIndex => (prevIndex + 1) % words.length)
		}, 4000)

		const handleScroll = () => {
			const sections = document.querySelectorAll('section')
			const lastSection = sections[sections.length - 1]
			setIsLastSection(lastSection.getBoundingClientRect().top < window.innerHeight / 2)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			clearInterval(interval)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const handleButtonClick = () => {
		if (isLastSection) {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		} else {
			const sections = document.querySelectorAll('.section')
			// eslint-disable-next-line prefer-const
			for (let section of sections) {
				if (section.getBoundingClientRect().top > 90) {
					section.scrollIntoView({ behavior: 'smooth' })
					break
				}
			}
		}
	}

	return (
		<section className='section relative text-gray-600 dark:text-stone-100 h-screen'>
			<div className='px-6 lg:px-8'>
				<div className='max-w-2xl py-32 sm:py-48 lg:py-56'>
					<div className='text-center'>
						<AnimatePresence mode='wait'>
							<motion.h1
								key={words[index]}
								initial={{ opacity: 0, y: 0 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 0 }}
								transition={{ duration: 0.5 }}
								className='text-4xl font-bold text-[#3eb43e] tracking-tight text-balance sm:text-7xl'>
								{words[index]}
							</motion.h1>
						</AnimatePresence>
						<p className='mt-8 text-md font-medium text-pretty sm:text-xl/8'>
							Tworzymy nowoczesne strony internetowe, a także zajmujemy się pozycjonowaniem, aby skutecznie przyciągać
							klientów do Twojego biznesu. Gwarantujemy wysoką jakość, szybkie wykonanie, nowoczesny design oraz pełne
							wsparcie.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<a
								href='#kontakt'
								className='rounded-md bg-[#3eb43e] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#62dfbb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62dfbb] lg:hidden'>
								Zamów darmową wycenę
							</a>
						</div>
					</div>
				</div>
				<button
					onClick={handleButtonClick}
					className={`hidden fixed bottom-18 right-20 z-50 hover:scale-125 transition-all ease-in-out duration-300 cursor-pointer h-12 w-12 ${
						isLastSection ? 'rotate-x-180' : ''
					} lg:flex`}>
					<img src={DownArrow} alt='down arrow' />
					<span className='sr-only'>Navigation button</span>
				</button>
			</div>
		</section>
	)
}
