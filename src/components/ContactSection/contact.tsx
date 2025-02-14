export default function Contact() {
	return (
		<section className='text-gray-600' id='kontakt'>
			<div className='mx-auto p-4 my-6 space-y-2 text-center'>
				<h2 className='text-4xl font-bold text-[#3eb43e] sm:text-6xl'>Skontaktuj się z nami</h2>
				<p className='dark:text-stone-100 font-semibold'>
					Masz pytania? Zadzwoń lub napisz. Chętnie udzielimy odpowiedzi i omówimy szczegóły.
				</p>
			</div>
			<div className='flex flex-col w-full gap-4'>
				<div className='mx-auto grid justify-center grid-cols-1 w-full max-w-3xl gap-4 sm:grid-cols-2'>
					<p className='flex flex-col items-center justify-items-center flex-1 gap-2 py-10 px-4 bg-green-100 rounded-3xl shadow-md hover:-translate-y-1 transform transition-all duration-300 ease-in-out hover:shadow-lg'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='#3eb43e' className='w-20 h-20'>
							<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'></path>
						</svg>
						<h3 className='font-semibold text-xl'>Zadzwoń</h3>
						<span className='font-bold'>+48 792 241 724</span>
					</p>
					<p className='flex flex-col items-center justify-items-center flex-1 gap-2 py-10 px-4 bg-green-100 rounded-3xl shadow-md hover:-translate-y-1 transform transition-all duration-300 ease-in-out hover:shadow-lg'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='#3eb43e' className='w-20 h-20'>
							<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
							<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
						</svg>
						<h3 className='font-semibold text-xl'>Napisz maila</h3>
						<span className='font-bold'>creatif@business.com</span>
					</p>
				</div>
				<div className='flex justify-center gap-4'>
					<form className='space-y-6 w-full max-w-3xl'>
						<label className='block'>
							<span className='font-semibold text-[#3eb43e]'>Full name</span>
							<input
								type='text'
								placeholder='Imię i nazwisko'
								className='block w-full mt-1 py-3 px-4 bg-green-100 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62dfbb] shadow-md'
							/>
						</label>
						<label className='block'>
							<span className='font-semibold text-[#3eb43e]'>Email address</span>
							<input
								type='email'
								placeholder='email'
								className='block w-full mt-1 py-3 px-4 bg-green-100 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62dfbb] shadow-md'
							/>
						</label>
						<label className='block'>
							<span className='font-semibold text-[#3eb43e]'>Message</span>
							<textarea
								rows={3}
								placeholder='wiadomość'
								className='block w-full mt-1 min-h-40 py-3 px-4 bg-green-100 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62dfbb] shadow-md'></textarea>
						</label>
						<button
							type='button'
							className='self-center rounded-md bg-[#3eb43e] px-10 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-[#62dfbb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62dfbb] cursor-pointer transition-all duration-300 ease-in-out shadow-md'>
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}
