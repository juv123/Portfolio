import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Redux from '../assets/redux.jpeg';
import tailwind_css from '../assets/tailwind.png';
import php from '../assets/php.jpg';
import jquery from '../assets/jquery.jpg';
import GitHub from '../assets/github.png';
import mysql from '../assets/mysql.jpg';

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a192f] text-gray-300 py-12'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full'>
        <div className='text-center'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4 text-xl'>The following are the technologies I've worked with:</p>
        </div>

        {/* Grid Container for skills */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-500'>
            <img className='w-20 mx-auto' src={Redux} alt="Redux icon" />
            <p className='my-4'>Redux</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-500'>
            <img className='w-20 mx-auto' src={tailwind_css} alt="Tailwind CSS icon" />
            <p className='my-4'>Tailwind CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
            <p className='my-4'>GitHub</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-500'>
            <img className='w-20 mx-auto' src={php} alt="PHP icon" />
            <p className='my-4'>PHP</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-500'>
            <img className='w-20 mx-auto' src={mysql} alt="MySQL icon" />
            <p className='my-4'>MySQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 transition-transform duration-500'>
            <img className='w-20 mx-auto' src={jquery} alt="jQuery icon" />
            <p className='my-4'>jQuery</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
