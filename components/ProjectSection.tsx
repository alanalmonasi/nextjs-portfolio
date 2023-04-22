import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRightSquare } from 'react-icons/bs';

const projects = [
   {
      name: 'Omnifood App',
      description:
         'Omnifood is a web app to help you eat healthy again with food tailored to your personal tastes and nutritional needs.',
      image: '/omni.png',
      link: 'https://omnifood-project-v01.netlify.app/',
   },
   {
      name: 'Calendar App',
      description:
         'CalendarApp is a web app where you can manage your activites and see in a calendar your pendings.',
      image: '/calendar.png',
      link: 'https://calendar-app-v01.netlify.app/',
   },
];

export const ProjectSection = () => {
   return (
      <section id="projects">
         <h1 className="text-center font-bold text-4xl">
            Projects
            <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
         </h1>
         <div className="flex flex-col space-y-28">
            {projects.map((project, idx) => {
               return (
                  <div key={idx}>
                     <div className="flex flex-col md:flex-row md:space-x-12 text-center md:text-left">
                        <div className="mt-8 md:w-1/2">
                           <Link href={project.link} target="_blank">
                              <Image
                                 src={project.image}
                                 alt={project.name}
                                 width={800}
                                 height={800}
                                 className="rounded-xl shadow-xl hover:opacity-70 hover:-translate-y-2 transition-all"
                              />
                           </Link>
                        </div>
                        <div className="mt-12 md:w-1/2">
                           <h1 className="text-3xl font-bold mb-6">
                              {project.name}
                           </h1>
                           <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-300 ">
                              {project.description}
                           </p>
                           <div className="flex flex-row align-bottom space-x-4 justify-end md:justify-start">
                              <p className="text-blue-400 dark:text-blue-600 ">
                                 Go to site
                              </p>
                              <Link href={project.link} target="_blank">
                                 <BsArrowRightSquare
                                    size={30}
                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                 />
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </section>
   );
};
