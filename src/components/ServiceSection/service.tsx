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
		AOS.init({ duration: 1000, once: true })
	}, [])
	return (
		<section id='uslugi' className='section text-gray-600 '>

				<h2 className='text-4xl font-bold text-[#3eb43e] sm:text-6xl'>Czym się zajmujemy?</h2>
				<p className=' mb-12 text-xl dark:text-stone-100'>Główne sektory działań</p>

			<div className='mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3'>
				<div
				data-aos='zoom-in-up'
				data-aos-delay='300'
				className='flex flex-col items-center p-6 bg-green-100 rounded-3xl shadow-md'>
					<img src={Service1} alt='Website icon' />
					<h3 className='my-3 text-3xl font-semibold'>Strony internetowe</h3>
					<div className='space-y-1 leading-tight'>
						<p>Tworzymy nowoczesne, responsywne strony internetowe, które nie tylko wyróżniają się estetyką, ale także są funkcjonalne i łatwe w obsłudze. Dzięki naszym rozwiązaniom Twoja strona stanie się skutecznym narzędziem marketingowym.</p>
					</div>
				</div>
				<div
				data-aos='zoom-in-up'
				data-aos-delay='200'
				className='flex flex-col items-center p-6 bg-green-100 rounded-3xl shadow-md'>
					<img src={Service2} alt='Domain icon' />
					<h3 className='my-3 text-3xl font-semibold'>Hosting & Domena</h3>
					<div className='space-y-1 leading-tight'>
						<p>Oferujemy kompleksowe usługi hostingu oraz rejestracji domen, zapewniając Ci niezawodność, szybkość ładowania strony oraz pełną ochronę danych. Dostosowujemy rozwiązania do indywidualnych potrzeb Twojego biznesu.</p>
					</div>
				</div>
				<div
				data-aos='zoom-in-up'
				data-aos-delay='400'
				className='flex flex-col items-center p-6 bg-green-100 rounded-3xl shadow-md'>
					<img src={Service3} alt='SEO icon' />
					<h3 className='my-3 text-3xl font-semibold'>Optymalizacja SEO</h3>
					<div className='space-y-1 leading-tight'>
						<p>Zwiększ widoczność swojej strony w wynikach wyszukiwania dzięki naszym usługom SEO. Skupiamy się na optymalizacji, która przyciąga ruch i poprawia pozycję w Google, co przekłada się na większą liczbę klientów.</p>
					</div>
				</div>
				<div
				data-aos='zoom-in-up'
				data-aos-delay='150'
				className='flex flex-col items-center p-6 bg-green-100 rounded-3xl shadow-md'>
					<img src={Service4} alt='Website icon' />
					<h3 className='my-3 text-3xl font-semibold'>Modernizacja stron</h3>
					<div className='space-y-1 leading-tight'>
						<p>Wykonujemy kompleksowe modernizacje stron internetowych, poprawiając ich funkcjonalność, wygląd oraz dostosowanie do nowych standardów technologicznych. Twoja strona będzie zawsze na czasie i gotowa na wyzwania przyszłości.</p>
					</div>
				</div>
				<div
				data-aos='zoom-in-up'
				data-aos-delay='350'
				className='flex flex-col items-center p-6 bg-green-100 rounded-3xl shadow-md'>
					<img src={Service5} alt='Website icon' />
					<h3 className='my-3 text-3xl font-semibold'>Wsparcie i utrzymanie strony</h3>
					<div className='space-y-1 leading-tight'>
						<p>Oferujemy pełne wsparcie techniczne oraz usługi utrzymania strony internetowej. Dzięki naszym usługom możesz mieć pewność, że Twoja strona działa sprawnie i jest zabezpieczona przed ewentualnymi awariami.</p>
					</div>
				</div>
				<div
				data-aos='zoom-in-up'
				data-aos-delay='250'
				className='flex flex-col items-center p-6 bg-green-100 rounded-3xl shadow-md'>
					<img src={Service6} alt='Website icon' />
					<h3 className='my-3 text-3xl font-semibold'>Strony wizytówki</h3>
					<div className='space-y-1 leading-tight'>
						<p>Proponujemy tworzenie profesjonalnych stron wizytówek, które będą doskonałą reprezentacją Twojej firmy w internecie. Zadbamy o to, aby Twoja strona była prosta, elegancka i efektywna w przyciąganiu potencjalnych klientów.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
