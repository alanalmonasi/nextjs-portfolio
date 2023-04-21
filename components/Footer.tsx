import {
   AiOutlineLinkedin,
   AiOutlineGithub,
   AiOutlineMail,
} from 'react-icons/ai';

export const Footer = () => {
   return (
      <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
         <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0" />
         <div className="mx-auto p-4 flex flex-col text-center text-neutral-800 md:flex-row md:justify-between">
            <div className="text-neutral-500 dark:text-neutral-100">
               © 2023 Alan Almonasi
            </div>
            <div className="flex flex-row items-center justify-center space-x-4 mb-1">
               <a
                  href="https://github.com/alanalmonasi"
                  rel="noreferrer"
                  target="_blank"
               >
                  <AiOutlineGithub
                     className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-50"
                     size={30}
                  />
               </a>
               <a
                  href="https://www.linkedin.com/in/alan-almonasi/"
                  rel="noreferrer"
                  target="_blank"
               >
                  <AiOutlineLinkedin
                     className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-50"
                     size={30}
                  />
               </a>
               <a
                  href="mailto:alan.almonasi@gmail.com"
                  rel="noreferrer"
                  target="_blank"
               >
                  {' '}
                  <AiOutlineMail
                     className="hover:-translate-y-1 transition-transform cursor-pointer dark:text-neutral-50"
                     size={30}
                  />
               </a>
            </div>
         </div>
      </footer>
   );
};
