import React, { useEffect, useRef } from 'react'
import { projects } from '../../utils/Contants'
const Project = () => {
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
    <div ref={projectRef} className="animate_on_scroll">
      <div className='bg-gray-800 stroke-lime-5'>
        <h1 className='text-center text-white text-2xl'>Projects</h1>
        <div className="flex flex-1">
          {
            projects.map((items, index) => (
              <div class="max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dar
          k:border-gray-700 m-4
          ">
                <a href="#">
                  <img class="rounded-t-lg" src={items.image} alt="" height={1400}
                  />
                </a>
                <div class="p-3">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{items.name}</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{items.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Project