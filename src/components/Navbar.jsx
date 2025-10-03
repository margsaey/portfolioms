import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>Margot Saeyens</div>
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        {/* <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button> */}
        <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full inline-block'>Resume</a>
      </div>
    </nav>
  )
}

export default Navbar