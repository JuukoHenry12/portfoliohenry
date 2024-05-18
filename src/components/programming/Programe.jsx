import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import './projamm.css'
const Programe = () => {
  const skills = [
    {
      title: "Typescript",
      level: 60,
    },
    {
      title: "Aws cloud",
      level: 40,
    },
    {
      title: "python",
      level: 40,
    },
    {
      title: "React / React Native",
      level: 90,
    },
    {
      title: "Nodejs",
      level: 90,
    },
    {
      title: "Java",
      level: 90,
    }
  ];
  const languages = [
    {
      title: "Django",
      level: 80,
    },
    {
      title: "Next js",
      level: 20,
    },
    {
      title: "Express js",
      level: 20,
    },
    {
      title: "spring boot",
      level: 20,
    },
    {
      title: "Nest js",
      level: 20,
    },
  ];

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
    <div className="w-screen p-4 max-w-screen-2xl mx-auto flex flex-col  bg-gray-800 animate-on_scroll ">
      <motion.div whileInView={"visible"}>
        <div className="flex flex-wrap justify-between"> {/* Added justify-between here */}
          <div className="w-full lg:w-1/2">
            <div className="mt-4 space-y-2">
              <h2 className="text-4xl font-bold text-white ml-20">Progamming Skills</h2>
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="w-64 ml-20">
                    <motion.h3
                      className="text-xl font-bold text-white"
                      initial={{
                        opacity: 0,
                      }}
                      variants={{
                        visible: {
                          opacity: 1,
                          transition: {
                            duration: 1,
                            delay: 1 + index * 0.2,
                          },
                        },
                      }}
                    >
                      {skill.title}
                    </motion.h3>
                    <div className="h-2 w-full bg-gray-200 rounded-full mt-2 ml-10">
                      <motion.div
                        className="h-full bg-indigo-500 rounded-full "
                        style={{ width: `${skill.level}%` }}
                        initial={{
                          scaleX: 0,
                          originX: 0,
                        }}
                        variants={{
                          visible: {
                            scaleX: 1,
                            transition: {
                              duration: 1,
                              delay: 1 + index * 0.4,
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="mt-8 space-y-2">
              <h2 className="text-5xl font-bold mt-10 text-white">frameworks</h2>
              {languages.map((lng, index) => (
                <div key={index}>
                  <div className="w-64">
                    <motion.h3
                      className="text-xl font-bold text-white"
                      initial={{
                        opacity: 0,
                      }}
                      variants={{
                        visible: {
                          opacity: 1,
                          transition: {
                            duration: 1,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    >
                      {lng.title}
                    </motion.h3>
                    <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                      <motion.div
                        className="h-full bg-indigo-500 rounded-full "
                        style={{ width: `${lng.level}%` }}
                        initial={{
                          scaleX: 0,
                          originX: 0,
                        }}
                        variants={{
                          visible: {
                            scaleX: 1,
                            transition: {
                              duration: 1,
                              delay: 2 + index * 0.2,
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Programe;
