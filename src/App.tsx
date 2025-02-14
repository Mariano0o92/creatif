import './App.css'
import { useEffect, useState, useLayoutEffect } from 'react'
import Hero from './components/HeroSection/hero'
import Footer from './components/FooterSection/footer'
import Contact from './components/ContactSection/contact'
import Service from './components/ServiceSection/service'
import Header from './components/HeaderSection/header'

export default function App() {
	// Funkcja pomocnicza do ustawienia motywu z localStorage lub ustawień systemowych
	const getInitialTheme = () => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) return storedTheme === "dark"; // Jeśli jest zapisany motyw, zwróć go
		// Jeśli brak motywu w localStorage, sprawdź preferencje systemowe
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	};

	// Używamy useState z funkcją getInitialTheme
	const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

	// Zastosowanie motywu na stronie w useLayoutEffect
	useLayoutEffect(() => {
		if (isDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [isDark]);

	// Obsługa zmiany ustawień systemowych
	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

		const handleChange = (event: MediaQueryListEvent) => {
			// Tylko jeśli brak motywu w localStorage, ustaw preferencje systemowe
			if (!localStorage.getItem("theme")) {
				setIsDark(event.matches);
			}
		};

		// Dodanie event listenera
		mediaQuery.addEventListener("change", handleChange);

		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	// Funkcja do ręcznej zmiany motywu z przycisku
	const toggleTheme = () => {
		const newTheme = !isDark;
		setIsDark(newTheme);
		localStorage.setItem("theme", newTheme ? "dark" : "light");

		// Ustawienie motywu natychmiast po zmianie
		if (newTheme) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	};

	// Sprawdzanie początkowego motywu tylko po pierwszym renderze
	useEffect(() => {
		// Dodanie klasy "dark" po pierwszym załadowaniu
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, []); // Zostanie wykonane tylko raz

	return (
		<>
			{/* Tło z gradientem */}
			<div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-gray-950">
				<div
					style={{
						clipPath:
							"polygon(80% 40%, 100% 60%, 98% 25%, 88% 0%, 82% 2%, 74% 30%, 62% 65%, 54% 70%, 48% 60%, 46% 35%, 30% 80%, 0% 66%, 15% 100%, 30% 80%, 78% 98%, 80% 40%, 50% 30%, 60% 20%, 10% 50%)",
					}}
					className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#3eb43e] to-[#62dfbb] opacity-30"
				/>
				<div className="absolute inset-0 w-full h-full backdrop-blur-2xl bg-white/5 dark:bg-gray-950/50" />
			</div>

			{/* Nagłówek */}
			<Header isDark={isDark} toggleTheme={toggleTheme} />

			{/* Główna treść */}
			<main>
				<Hero />
				<Service />
				<Contact />
			</main>

			{/* Stopka */}
			<Footer />
		</>
	);
}
