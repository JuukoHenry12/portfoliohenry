import React ,{useEffect,useRef}from 'react'
import portfolioImage from '../../assets/profile.jpg';
import './about.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const About = () => {
const projectRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-left');
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    const element = projectRef.current;
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };

  }, [])
    return (
        <div ref={projectRef}  className='bg-gray-800 animate_on_onscroll'>
            <h2 className='text-center text-3xl mt-2 text-white'>About Me</h2>
            <div className='flex  ml-3'>
             <div className="flex-1 m-4 h-screen w-screen">
               <img src={portfolioImage} alt="" />
             </div>
            
            <div className='flex-1 mt-4'>
                    <h3 className='text-white text-fuchsia-200 text-xl slide-in-left'>
                        I am writing to provide an overview of the value I can bring to the team as a seasoned software
                        engineer. With a distinguished career spanning over a half decade in the realm of software
                        engineering, I have cultivated a deep expertise across diverse technologies and domains. This
                        proficiency is underpinned by a relentless commitment to technical excellence and a disciplined
                        approach to problem-solving.<br/><br/> My approach to engineering is defined by a client-centric mindset and
                        meticulous attention to detail. 
                        I have consistently delivered solutions that align with client
                        needs and exceed expectations. Throughout my journey,<br/><br/> I have successfully undertaken a spectrum of
                        projects, ranging from architecting sophisticated web applications to orchestrating intricate
                        integrations and crafting bespoke software solutions. My skill set is continuously honed to integrate
                        the latest advancements in web technologies, cloud technologies and ensuring solutions that are not
                        only robust but also aligned with contemporary best practices.
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default About