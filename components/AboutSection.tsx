import Image from 'next/image';
import { IconBase } from 'react-icons';
import {
   IoLogoHtml5,
   IoLogoReact,
   IoLogoCss3,
   IoLogoJavascript,
   IoLogoNodejs,
   IoLogoGithub,
} from 'react-icons/io5';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
import { BsGit } from 'react-icons/bs';

const skills = [
   { skill: 'HTML', icon: <IoLogoHtml5 /> },
   { skill: 'CSS', icon: <IoLogoCss3 /> },
   { skill: 'JavaScript', icon: <IoLogoJavascript /> },
   { skill: 'TypeScript', icon: <SiTypescript /> },
   { skill: 'Node.js', icon: <IoLogoNodejs /> },
   { skill: 'React', icon: <IoLogoReact /> },
   { skill: 'Next.js', icon: <SiNextdotjs /> },
   { skill: 'Git', icon: <BsGit /> },
   { skill: 'Github', icon: <IoLogoGithub /> },
];

export const AboutSection = () => {
   return (
      <section id="about">
         <div className="my-12 pb-12 md:p-t16 md:pb-48">
            <h1 className="text-center font-bold text-4xl">
               About me
               <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded" />
            </h1>
            <div className="flex flex-col space-y-10 items-stretch text-center justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
               <div className="md:w-1/2">
                  <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                     Get to know me!
                  </h1>
                  <p>
                     {' '}
                     Hi, my name is Alan and I am a{' '}
                     <span className="font-bold">{'highly ambitious'}</span>,
                     <span className="font-bold">{' self-motivated'}</span>,
                     <span className="font-bold">{' dedicated'}</span>,
                     <span className="font-bold">{' communicative'}</span>,
                     <span className="font-bold">{' collaborative'}</span> and
                     <span className="font-bold">{' goal-oriented'}</span>{' '}
                     frontend developer based in Mexico City.
                  </p>
                  <br />
                  <p>
                     I am a self taught developer, I began my journey as a
                     frontend developer by enrolling in a few courses on Udemy
                     in 2022 and I have not stopped learning ever since. I have
                     worked for a fintech company for a few months, where I
                     gained valuable experience working with a team, sharpening
                     my skills and besides learning new ones.
                  </p>
                  <br />
                  <p>
                     I love to keep myself engaged and learning new things,
                     specially those related to technology. I am excited to see
                     where this journey will take me and I am always open to new
                     opportunities.
                  </p>
               </div>
               <div className="md:w-1/2">
                  <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                     My skills
                  </h1>
                  <div className="flex flex-wrap flex-row justify-center md:justify-start">
                     {skills.map((item, idx) => {
                        return (
                           <p
                              key={idx}
                              className="bg-blue-100 px-4 py-2 mr-2 mt-2 text-gray-600 rounded font-semibold hover:-translate-y-1 transition-all"
                           >
                              {item.skill}
                              <IconBase size={25} className="m-auto px-1">
                                 {item.icon}
                              </IconBase>
                           </p>
                        );
                     })}
                  </div>
                  <Image
                     className="hidden md:block md:relative md:bottom-4 m-auto mt-10"
                     src="/myskills.png"
                     alt="skills image"
                     width={275}
                     height={275}
                  />
               </div>
            </div>
         </div>
      </section>
   );
};
