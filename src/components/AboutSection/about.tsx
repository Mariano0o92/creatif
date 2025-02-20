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
			<div className='mx-auto grid grid-rows-[1fr_1fr] justify-center items-stretch gap-4'>
				{/* First Content Block */}
				<div
					data-aos='fade-right'
					data-aos-offset='300'
					data-aos-easing='ease-in-sine'
					data-aos-once='true'
					className='grid justify-center grid-cols-1 md:grid-cols-2 h-full bg-green-100 rounded-3xl shadow-md overflow-hidden'>
					<img src={Development} alt='About Us' className='object-cover w-full h-full' />
					<div className='flex flex-col items-start justify-start text-gray-600 p-6'>
						<h3 className='my-3 text-3xl font-semibold'>Nasza misja</h3>
						<p className='text-left text-md'>
						Naszą misją jest dostarczanie nowoczesnych, estetycznych i funkcjonalnych stron internetowych, które nie tylko przyciągają uwagę, ale również pomagają firmom osiągać ich cele biznesowe. Tworzymy rozwiązania szyte na miarę, dbając o najwyższą jakość kodu, responsywność oraz optymalizację SEO, aby każda strona była szybka, bezpieczna i efektywna.
						</p>
					</div>
				</div>

				{/* Second Content Block */}
				<div
					data-aos='fade-left'
					data-aos-offset='300'
					data-aos-easing='ease-in-sine'
					data-aos-once='true'
					className='grid justify-center grid-cols-1 md:grid-cols-2 h-full bg-green-100 rounded-3xl shadow-md overflow-hidden'>
					<img src={Passion} alt='Our Mission' className='object-cover w-full h-full md:col-[2]' />
					<div className='flex flex-col items-start justify-start text-gray-600 text-center p-6 md:col-[1] md:row-[1]'>
						<h3 className='my-3 text-3xl font-semibold'>Nasze wartości</h3>
						<ul className='text-left text-md'> <li><strong>💡 Innowacyjność</strong> – Korzystamy z najnowszych technologii i trendów, aby dostarczać nowoczesne i przyszłościowe rozwiązania.</li> <li><strong>🛠️ Profesjonalizm</strong> – Dbamy o każdy szczegół, zapewniając wysoką jakość kodu i estetyczny design.</li> <li><strong>👥 Partnerstwo</strong> – Stawiamy na otwartą współpracę i indywidualne podejście do każdego klienta.</li> <li><strong>🚀 Efektywność</strong> – Tworzymy strony zoptymalizowane pod kątem szybkości, SEO i konwersji.</li> <li><strong>🔒 Bezpieczeństwo</strong> – Wdrażamy najlepsze praktyki, by chronić dane i zapewnić niezawodne działanie stron.</li> </ul>
					</div>
				</div>
			</div>
		</section>
	)
}
