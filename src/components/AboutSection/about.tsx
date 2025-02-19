import Development from '../../assets/development.jpg'
import Passion from '../../assets/passion.jpg'

export default function About() {

	return (
		<section id='onas' className='section relative text-gray-600 dark:text-stone-100'>
			{/* Header Section */}
			<h2 className='text-4xl font-bold text-[#3eb43e] sm:text-6xl'>O nas</h2>
			<p className='mb-12'>
				Naszym celem jest tworzenie innowacyjnych rozwiązań cyfrowych, które poprawiają doświadczenia użytkowników.
			</p>
			<div className='mx-auto grid justify-center gap-4'>
				{/* First Content Block */}
				<div
					data-aos='fade-right'
					data-aos-offset='100'
					data-aos-easing='ease-in-sine'
                    data-aos-once='true'
					className='grid justify-center grid-cols-1 md:grid-cols-2 bg-green-100 rounded-3xl shadow-md overflow-hidden'>
					<img src={Development} alt='About Us' className='object-cover w-full' />
					<div className='flex items-center justify-center text-gray-600 text-center p-6'>
						Nasz zespół składa się z doświadczonych profesjonalistów, dla których priorytetem jest projektowanie
						ukierunkowane na preferencje użytkownika i funkcjonalność.
					</div>
				</div>

				{/* Second Content Block */}
				<div
					data-aos='fade-left'
					data-aos-offset='100'
					data-aos-easing='ease-in-sine'
                    data-aos-once='true'
					className='grid justify-center grid-cols-1 md:grid-cols-2 bg-green-100 rounded-3xl shadow-md overflow-hidden'>
					<img src={Passion} alt='Our Mission' className='object-cover w-full md:col-[2]' />
					<div className='flex items-center justify-center text-gray-600 text-center p-6 md:col-[1] md:row-[1]'>
						Dążymy do opracowywania wysokiej jakości produktów, które upraszczają i usprawniają codzienne interakcje
						cyfrowe.
					</div>
				</div>
			</div>
		</section>
	)
}
