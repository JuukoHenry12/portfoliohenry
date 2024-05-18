// Header.js
import React, { useRef } from 'react';
import './Header.css';
import Globe from 'react-globe.gl';

const Header = () => {
  const globeRef = useRef();

  // Rotate the globe
  const animate = () => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 1;
    }
  };

  // // Define your point data
  // const pointData = [
  //   { id: 'point1', lat: 0, lng: 0, color: 'red', value: 100 },
  //   { id: 'point2', lat: 20, lng: 10, color: 'blue', value: 200 },
  //   // Add more points as needed
  //   { id: 'uganda', lat: 1.3733, lng: 32.2903, color: 'red', value: 300 }, // Uganda
  // ];

  return (
    <div className='flex flex-col w-full header'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2 '>
          <div className='text-5xl mt-10 p-5 text-center text-white'>
            <h2>Hi,Am Juuko Henry</h2>
            <h2 className='mt-3 text-4xl'>
              a Software Developer<br /> &<br/>
              I love creating beautiful things
            </h2>
          </div>
        </div>
        <div className='md:w-1/2'>
          <div className='globe-container'>
            <Globe
              ref={globeRef}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              width={650}
              height={600}
              backgroundColor="rgba(0, 0, 0, 0)" // Make the globe transparent
              onGlobeReady={animate} // Start animation when globe is ready
              pointAltitude={0.1} // Adjust altitude if needed
              pointRadius={0.03} // Adjust radius if needed
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
