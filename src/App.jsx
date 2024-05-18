import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbard/Navbar'
import Header from './components/Header/Header'
import About from './components/Aboutme/About'
import Programe from './components/programming/Programe'
import Project from './components/Projects/Project'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <>
      <Navbar />
      <div id="header">
        <Header />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="progamme">
        <Programe />
      </div>
      <div id="project">
        <Project />
      </div>
      <Footer />
    </>
  )
}

export default App
