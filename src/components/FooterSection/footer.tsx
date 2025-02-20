
import CreatifLogo from '../../assets/creatifLogo.png'


const Footer = () => {
  return (
    <footer className="text-gray-600 dark:text-stone-100 mt-4 py-6 px-6 flex justify-center items-center text-sm lg:h-25">
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-7xl gap-4 lg:gap-0'>

      <div className="flex flex-col items-center gap-2">
        <a href="#">
        <img
          src={CreatifLogo}
          alt="Creatif Studio logo"
          className="h-8"
        />
        </a>
        <p>&copy;{new Date().getFullYear()}. Creatif Studio. Wszystkie prawa zastrzeżone.</p>
      </div>
      <div className="flex lg:flex-col gap-2 text-left">
        <p>
          <span className="text-[#3eb43e] font-bold">E:</span>
          <a href="mailto:kontakt.creatifstudio@gmail.com" target='_blank' className="ml-1 hover:text-[#3eb43e] transition-all ease-in-out duration-300">
          kontakt.creatifstudio@gmail.com
          </a>
        </p>
        <p>
          <span className="text-[#3eb43e] font-bold">T:</span>
          <a href="tel:+48792241724" target='_blank' className="ml-1 hover:text-[#3eb43e] transition-all ease-in-out duration-300">
            +48 792 241 724
          </a>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-3 text-[#3eb43e] font-bold">
        <a href="#" className="hover:text-gray-600 dark:hover:text-stone-100 transition-all ease-in-out duration-300">
          Polityka prywatności
        </a>
        <a href="#" className="hover:text-gray-600 dark:hover:text-stone-100 transition-all ease-in-out duration-300">
          Linkedin
        </a>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
