import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const words: string[] = ['Strony internetowe', 'Hosting', 'Domena', 'SEO', 'Opieka nad stroną']

export default function Hero() {

	const [index, setIndex] = useState(0)


  useEffect(() => {

    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % words.length);
    }, 4000);
  
    return () => {
      clearInterval(interval);
    };
  }, []);
  
	return (
		<section className='text-gray-600 dark:text-stone-100 h-screen'>
			<div className='px-6 lg:px-8'>

				<div className='max-w-2xl py-32 sm:py-48 lg:py-56'>
					<div className='hidden sm:mb-8 sm:flex sm:justify-center'>
						<div className='relative rounded-full px-3 py-1 text-sm/6 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
							Announcing our next round of funding.{' '}
							<a href='#' className='font-semibold text-[#3eb43e]'>
								<span aria-hidden='true' className='absolute inset-0' />
								Read more <span aria-hidden='true'>&rarr;</span>
							</a>
						</div>
					</div>
					<div className='text-center'>
            <AnimatePresence mode='wait'>
						<motion.h1
							key={words[index]}
							initial={{ opacity: 0, y: 0 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 0 }}
							transition={{ duration: 0.5 }}
							className='text-5xl font-bold text-[#3eb43e] tracking-tight text-balance sm:text-7xl'>
							{words[index]}
						</motion.h1>
            </AnimatePresence>
						<p className='mt-8 text-lg font-medium text-pretty sm:text-xl/8'>
							Tworzymy nowoczesne strony internetowe, a także zajmujemy się pozycjonowaniem, aby skutecznie przyciągać
							klientów do Twojego biznesu. Gwarantujemy wysoką jakość, szybkie wykonanie, nowoczesny design oraz pełne
							wsparcie.
						</p>
						<div className='mt-10 flex items-center justify-center gap-x-6'>
							<a
								href='#'
								className='rounded-md bg-[#3eb43e] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#62dfbb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62dfbb] lg:hidden'>
								Zamów darmową wycenę
							</a>
						</div>
					</div>
				</div>

			</div>

		</section>
	)
}
