import './App.css'
import { useEffect, useState } from 'react'
import Hero from './components/HeroSection/hero'
import Footer from './components/FooterSection/footer'
import Contact from './components/ContactSection/contact'
import Service from './components/ServiceSection/service'
import Header from './components/HeaderSection/header'

export default function App() {
	// Pobieranie motywu z localStorage lub ustawień systemowych
	const getInitialTheme = () => {
		const storedTheme = localStorage.getItem('theme')
		if (storedTheme) return storedTheme === 'dark'
		return window.matchMedia('(prefers-color-scheme: dark)').matches
	}

	const [isDark, setIsDark] = useState<boolean>(getInitialTheme)

	// Ustawianie klasy 'dark' na <html> oraz zapisywanie do localStorage
	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add('dark')
			localStorage.setItem('theme', 'dark')
		} else {
			document.documentElement.classList.remove('dark')
			localStorage.setItem('theme', 'light')
		}
	}, [isDark])

	// Obsługa zmian w systemowym trybie ciemnym
	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

		const handleChange = (event: MediaQueryListEvent) => {
			if (!localStorage.getItem('theme')) {
				setIsDark(event.matches)
			}
		}

		mediaQuery.addEventListener('change', handleChange)
		return () => mediaQuery.removeEventListener('change', handleChange)
	}, [])

	return (
		<>
			{/* Tło z gradientem */}
			<div aria-hidden='true' className='fixed top-0 left-0 w-screen h-screen -z-10 dark:bg-gray-950'>
				<div
					style={{
						clipPath:
							'polygon(80% 40%, 100% 60%, 98% 25%, 88% 0%, 82% 2%, 74% 30%, 62% 65%, 54% 70%, 48% 60%, 46% 35%, 30% 80%, 0% 66%, 15% 100%, 30% 80%, 78% 98%, 80% 40%, 50% 30%, 60% 20%, 10% 50%)',
					}}
					className='absolute inset-0 bg-gradient-to-tr from-[#3eb43e] to-[#62dfbb] opacity-30'
				/>
				<div className='absolute inset-0 backdrop-blur-2xl dark:bg-gray-950/50' />
			</div>

			{/* Nagłówek */}
			<Header isDark={isDark} setIsDark={setIsDark} />

			{/* Główna treść */}
			<main>
				<Hero />
				<Service />
				<Contact />
			</main>

			{/* Stopka */}
			<Footer />
		</>
	)
}
