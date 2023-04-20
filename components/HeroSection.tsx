'use client';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';

export const HeroSection = () => {
   return (
      <section id="home">
         <div className="flex flex-col text-center items-center justify-center my-11 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-44">
            <div className="md:w-1/2 md:mt-2">
               <Image
                  className="rounded-full shadow-2xl"
                  src="/cheems.jpg"
                  alt="Picture of me"
                  width={300}
                  height={300}
                  priority
               />
            </div>
            <div className="md:mt-2 md:w-3/5">
               <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
                  Hi I&#39;m Alan
               </h1>
               <p className="text-lg mt-4 mb-6 md:text-2xl">
                  I&#39;m a{' '}
                  <span className="font-semibold text-blue-500">
                     self taught frontend developer{' '}
                  </span>
                  based in Mexico City, MX. I like web techs in general but
                  I&#39;m mostly interested in frontend development, particulary
                  in React.js and frameworks like Next.js
               </p>
               <Link
                  to="projects"
                  className="text-neutral-100 font-semibold px-6 py-3 bg-blue-500 rounded-md shadow hover:bg-blue-700"
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
               >
                  Projects
               </Link>
            </div>
         </div>
         <div className="flex flex-row justify-center">
            <Link
               to="about"
               activeClass="active"
               spy={true}
               smooth={true}
               offset={-100}
               duration={500}
            >
               <HiArrowDown size={35} className="animate-bounce" />
            </Link>
         </div>
      </section>
   );
};
