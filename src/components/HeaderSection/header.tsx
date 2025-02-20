import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import CreatifLogo from '../../assets/creatifLogo.png'
import Moon from '../../assets/moon.svg'
import Sun from '../../assets/sun.svg'

const navigation = [
	{ name: 'Home', href: '#' },
	{ name: 'Usługi', href: '#uslugi' },
	{ name: 'O nas', href: '#onas' },
	{ name: 'Kontakt', href: '#kontakt' },
]

interface HeaderProps {
	isDark: boolean
	setIsDark: (value: boolean) => void
}

export default function Header({ isDark, setIsDark }: HeaderProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
				isScrolled ? 'bg-white/50 dark:bg-gray-950/50 backdrop-blur-md' : 'bg-transparent'
			}`}>
			<nav
				aria-label='Global'
				className='flex items-center justify-between p-5 lg:px-6 transition-all duration-500 ease-in-out max-w-screen-xl mx-auto'>
				<div className='flex lg:flex-1'>
					<a href='#' className='-m-1.5 p-1.5'>
						<img alt='Company Logo' src={CreatifLogo} className='h-12 w-auto lg:h-auto' />
					</a>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						onClick={() => setMobileMenuOpen(true)}
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600 dark:text-stone-100'>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon aria-hidden='true' className='size-10 cursor-pointer' />
					</button>
				</div>
				<div className='hidden lg:flex lg:gap-x-12'>
					{navigation.map(item => (
						<a
							key={item.name}
							href={item.href}
							className='text-lg/6 font-semibold text-gray-600 dark:text-stone-100 hover:text-[#3eb43e] transition-text duration-300 ease-in-out'>
							{item.name}
						</a>
					))}
				</div>
				<button className='hidden lg:flex ml-5 p-3 cursor-pointer' onClick={() => setIsDark(!isDark)}>
					{isDark ? <img className='h-8' src={Sun} alt='Sun' /> : <img className='h-8' src={Moon} alt='Moon' />}
				</button>
				<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
					<a
						href='#kontakt'
						className='rounded-md bg-[#3eb43e] px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#62dfbb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62dfbb] transition-all duration-300 ease-in-out'>
						Zamów darmową wycenę
					</a>
				</div>
			</nav>
			<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className='lg:hidden'>
				<div className='fixed inset-0 z-50' />
				<DialogPanel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-stone-100 dark:bg-gray-950 p-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='flex items-center justify-between'>
						<button className='flex lg:hidden ml-5 p-3 cursor-pointer' onClick={() => setIsDark(!isDark)}>
							{isDark ? <img className='h-8' src={Sun} alt='Sun' /> : <img className='h-8' src={Moon} alt='Moon' />}
						</button>
						<button
							type='button'
							onClick={() => setMobileMenuOpen(false)}
							className='-m-2.5 rounded-md p-2.5 text-gray-600 dark:text-stone-100 cursor-pointer'>
							<span className='sr-only'>Close menu</span>
							<XMarkIcon aria-hidden='true' className='size-10' />
						</button>
					</div>
					<div className='mt-6 flow-root'>
						<div className='-my-6'>
							<div className='space-y-2 py-6'>
								{navigation.map(item => (
									<a
										key={item.name}
										href={item.href}
										onClick={() => setMobileMenuOpen(false)}
										className='-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-600 dark:text-stone-100'>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	)
}
