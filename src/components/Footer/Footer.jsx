import React from 'react'
const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <p className="text-white text-sm">
            &copy; 2024 Your Name. All rights reserved.
          </p>
        </div>
        <div className="mt-4 md:mt-0">
          <ul className="flex justify-center md:justify-start space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/in/juuko-henry-13bb70128/"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JuukoHenry12"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://x.com/henryjuuko23"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};



export default Footer