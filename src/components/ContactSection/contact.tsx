import { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Toaster, toast } from 'sonner';

export default function Contact() {
  const [state, handleSubmit] = useForm('mqaeyvjy');

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Dziękujemy! Wiadomość została wysłana.');
      // Resetowanie formularza po udanym wysłaniu
      const form = document.getElementById('contact-form') as HTMLFormElement;
      form?.reset();
    }
  }, [state.succeeded]);

  return (
    <section className="section text-gray-600" id="kontakt">
      <div className="mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-4xl font-bold text-[#3eb43e] sm:text-6xl">Skontaktuj się z nami</h2>
        <p className="dark:text-stone-100 text-xl">
          Masz pytania? Zadzwoń lub napisz. Chętnie udzielimy odpowiedzi i omówimy szczegóły.
        </p>
      </div>

      <div className="flex flex-col w-full gap-4">
        <div className="mx-auto grid justify-center grid-cols-1 w-full max-w-3xl gap-4 sm:grid-cols-2">
          <div className="flex flex-col items-center justify-items-center flex-1 gap-2 py-10 px-4 bg-green-100 rounded-3xl shadow-md hover:-translate-y-1 transform transition-all duration-300 ease-in-out hover:shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3eb43e" className="w-20 h-20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <h3 className="font-semibold text-xl">Zadzwoń</h3>
            <a href='tel:+48792241724' target='_blank' className="font-bold">+48 792 241 724</a>
          </div>
          <div className="flex flex-col items-center justify-items-center flex-1 gap-2 py-10 px-4 bg-green-100 rounded-3xl shadow-md hover:-translate-y-1 transform transition-all duration-300 ease-in-out hover:shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#3eb43e" className="w-20 h-20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <h3 className="font-semibold text-xl">Napisz maila</h3>
            <a href='mailto:kontakt.creatifstudio@gmail.com' target='_blank' className="font-bold">kontakt.creatifstudio@gmail.com</a>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <form
            id="contact-form"
            className="space-y-6 w-full max-w-3xl"
            onSubmit={handleSubmit}
          >
            <Toaster position="bottom-right" richColors />

            <label className="block">
              <span className="font-semibold text-[#3eb43e]">Imię i nazwisko</span>
              <input
                type="text"
                name="name"
                required
                placeholder="Imię i nazwisko"
                className="block w-full mt-1 py-3 px-4 bg-green-100 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62dfbb] shadow-md"
              />
              <ValidationError field="name" errors={state.errors} />
            </label>

            <label className="block">
              <span className="font-semibold text-[#3eb43e]">Adres e-mail</span>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="block w-full mt-1 py-3 px-4 bg-green-100 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62dfbb] shadow-md"
              />
              <ValidationError field="email" errors={state.errors} />
            </label>

            <label className="block">
              <span className="font-semibold text-[#3eb43e]">Wiadomość</span>
              <textarea
                rows={3}
                name="message"
                required
                placeholder="wiadomość"
                className="block w-full mt-1 min-h-40 py-3 px-4 bg-green-100 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62dfbb] shadow-md"
              />
              <ValidationError field="message" errors={state.errors} />
            </label>

            <button
              type="submit"
              disabled={state.submitting}
              className="self-center rounded-md bg-[#3eb43e] px-10 py-2.5 text-sm font-semibold text-white hover:bg-[#62dfbb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62dfbb] cursor-pointer transition-all duration-300 ease-in-out shadow-md"
            >
              {state.submitting ? 'Wysyłanie...' : 'Wyślij'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
