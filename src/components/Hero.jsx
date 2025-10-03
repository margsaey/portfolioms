import React from 'react'
import HeroImage from '../assets/stage_img/hero-img.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <img 
      src={HeroImage} 
      alt="" 
      className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
      transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
          I'm {" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Margot Saeyens</span>
          , Graphic Designer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        I specialize in 3D-modeling and graphic design.
      </p>
      <div className='mt-8 space-x-4'>
        <a
        href="#contact"
        rel="noopener noreferrer"
        className='bg-gradient-to-r from-green-400 to-blue-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact Me</a>
        <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block'>Resume</a>
      </div>

    </div>
  )
}

export default Hero