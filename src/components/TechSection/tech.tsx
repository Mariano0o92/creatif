import Css3 from '../../assets/css3.svg'
import Html5 from '../../assets/html5.svg'
import ReactJs from '../../assets/reactjs.svg'
import JavaScript from '../../assets/javascript.svg'
import Tailwind from '../../assets/tailwind.svg'
import TypeScript from '../../assets/typescript.svg'
import Vite from '../../assets/vite.svg'
import Vscode from '../../assets/vscode.svg'
import Wordpress from '../../assets/wordpress.svg'

const logos = [
	{ src: Css3 },
	{ src: Html5 },
	{ src: JavaScript },
	{ src: ReactJs },
	{ src: Tailwind },
	{ src: TypeScript },
	{ src: Vite },
	{ src: Vscode },
	{ src: Wordpress },
]

export default function Tech() {
	return (
		<>
			<div className='w-full max-w-7xl py-8 px-6 overflow-hidden inline-flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
				<ul className='flex items-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll'>
					{[...logos].map((logo, index) => (
						<li>
							<img key={index} src={logo.src} className='w-15 h-15' alt='logo' />
						</li>
					))}
				</ul>
				<ul className='flex items-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll'>
					{[...logos].map((logo, index) => (
						<li>
							<img key={index} src={logo.src} className='w-15 h-15' alt='logo' />
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
