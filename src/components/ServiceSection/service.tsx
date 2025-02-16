import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Service1 from '../../assets/service1.svg'
import Service2 from '../../assets/service2.svg'
import Service3 from '../../assets/service3.svg'
import Service4 from '../../assets/service4.svg'
import Service5 from '../../assets/service5.svg'
import Service6 from '../../assets/service6.svg'

export default function Service() {
	useEffect(() => {
		AOS.init({ duration: 1000, once: false })
	}, [])
	return (
		<section id='uslugi' className='section text-gray-600 '>
			<div className='mx-auto p-4 my-6 space-y-2 text-center'>
				<h2 className='text-4xl font-bold text-[#3eb43e] sm:text-6xl'>Czym się zajmujemy?</h2>
				<p className='dark:text-stone-100'>Libero minima optio qui</p>
			</div>
			<div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				<div
				data-aos='zoom-in-up'
				data-aos-delay='300'
				className='flex flex-col items-center py-10 px-4 bg-green-100 rounded-3xl shadow-md'>
					<img src={Service1} alt='Website icon' />
					<h3 className='my-3 text-3xl font-semibold'>Strony internetowe</h3>
					<div className='space-y-1 leading-tight'>
						<p>Similique quas ea veniam</p>
						<p>Tempore quasi porro</p>
						<p>Blanditiis aut mollitia ex</p>
					</div>
				</div>
				<div
				data-aos='zoom-in-up'
				data-aos-delay='200'
				className='flex flex-col items-center py-10 px-4 bg-green-100 rounded-3xl shadow-md'>
					<img src={Service2} alt='Domain icon' />
					<h3 className='my-3 text-3xl font-semibold'>Hosting & Domena</h3>
					<div className='space-y-1 leading-tight'>
						<p>Similique quas ea veniam</p>
						<p>Tempore quasi porro</p>
						<p>Blanditiis aut mollitia ex</p>
					</div>
				</div>
				<div
				data-aos='zoom-in-up'
				data-aos-delay='400'
				className='flex flex-col items-center py-10 px-4 bg-green-100 rounded-3xl shadow-md'>
					<img src={Service3} alt='SEO icon' />
					<h3 className='my-3 text-3xl font-semibold'>Optymalizacja SEO</h3>
					<div className='space-y-1 leading-tight'>
						<p>Similique quas ea veniam</p>
						<p>Tempore quasi porro</p>
						<p>Blanditiis aut mollitia ex</p>
					</div>
				</div>
				<div
				data-aos='zoom-in-up'
				data-aos-delay='150'
				className='flex flex-col items-center py-10 px-4 bg-green-100 rounded-3xl shadow-md'>
					<img src={Service4} alt='Website icon' />
					<h3 className='my-3 text-3xl font-semibold'>Modernizacja stron</h3>
					<div className='space-y-1 leading-tight'>
						<p>Similique quas ea veniam</p>
						<p>Tempore quasi porro</p>
						<p>Blanditiis aut mollitia ex</p>
					</div>
				</div>
				<div
				data-aos='zoom-in-up'
				data-aos-delay='350'
				className='flex flex-col items-center py-10 px-4 bg-green-100 rounded-3xl shadow-md'>
					<img src={Service5} alt='Website icon' />
					<h3 className='my-3 text-3xl font-semibold'>Wsparcie i utrzymanie strony</h3>
					<div className='space-y-1 leading-tight'>
						<p>Similique quas ea veniam</p>
						<p>Tempore quasi porro</p>
						<p>Blanditiis aut mollitia ex</p>
					</div>
				</div>
				<div
				data-aos='zoom-in-up'
				data-aos-delay='250'
				className='flex flex-col items-center py-10 px-4 bg-green-100 rounded-3xl shadow-md'>
					<img src={Service6} alt='Website icon' />
					<h3 className='my-3 text-3xl font-semibold'>Strony wizytówki</h3>
					<div className='space-y-1 leading-tight'>
						<p>Similique quas ea veniam</p>
						<p>Tempore quasi porro</p>
						<p>Blanditiis aut mollitia ex</p>
					</div>
				</div>
			</div>
		</section>
	)
}
