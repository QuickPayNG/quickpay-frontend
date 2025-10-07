import { useParams } from "react-router-dom";

const Waitlist = () => {
  const { name } = useParams();
  return (
    <div className="bg-background dark:bg-background-dark font-display">
      <div className="flex flex-col min-h-screen">
        <header className="w-full bg-primary text-background py-3 px-6 text-center">
          <p className="font-semibold">
            You're on the list! Welcome to the future of payments.
          </p>
        </header>
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl w-full">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-extrabold text-text dark:text-content-dark tracking-tight mb-4">
                Welcome to QuickPay
              </h1>
              <p className="text-lg md:text-xl text-text/80 dark:text-content-dark/80">
                You’re on the waitlist. We’ll notify you as soon as we launch.
              </p>
            </div>
            <div className="bg-zinc-900/50 rounded-xl shadow-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 text-left">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold text-text dark:text-content-dark mb-2">
                  Thank you, {name}!
                </h2>
                <p className="text-text/80 dark:text-content-dark/80 mb-6">
                  You're now officially part of the QuickPay early community.
                  Get ready for a seamless payment experience.
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-text dark:text-content-dark mb-3">
                    Follow Us for Updates
                  </p>
                  <div className="flex space-x-4">
                    <a
                      className="bg-primary/20 text-primary hover:bg-primary hover:text-background-dark rounded-full p-3 transition-colors duration-300"
                      href="#"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                      </svg>
                    </a>
                    <a
                      className="bg-primary/20 text-primary hover:bg-primary hover:text-background-dark rounded-full p-3 transition-colors duration-300"
                      href="#"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                    <a
                      className="bg-primary/20 text-primary hover:bg-primary hover:text-background-dark rounded-full p-3 transition-colors duration-300"
                      href="#"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm4.5-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  alt="Fintech illustration showing a successful payment on a phone"
                  className="rounded-lg object-cover w-full h-auto max-w-xs md:max-w-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvgSn6csNvVkZ3yrp8eKrhagLo1mOoB46iHwTU7WCGH_C_vT3ySRtT81ejTynP9UQkhFjOpb8kbyCa7pI4_XtxHNvYo15xMhSnkng1mgtsS_F93_FpQPwhEOBlDqO9XIDf3TMnEyZHk6YwEl_Hhd2iwoKf2UYdaU94ErxwmEa-kHKWFhBMKFe1XNbxi2fCWvocVczxEkdw2ByJe-uWx8j51DYTI7sWBdWpkxewXXe5w5nj-0nB-odAyJNL-64x2B4-oPG-hqj9iPW2"
                />
              </div>
            </div>
          </div>
        </main>
        <footer className="w-full text-center py-6 px-4">
          <p className="text-sm text-text/60 dark:text-content-dark/60">
            Fast. Secure. Simple. QuickPay is coming soon.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Waitlist;
