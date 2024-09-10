import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#160d4cc0]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center sm:px-16 md:px-20'>
        <p className='text-xl text-yellow-600 mx-4 sm:mx-6 md:mx-10'>
          Hi, My name is
        </p>
        <h3 className='text-3xl sm:text-5xl font-bold text-[#ccd6f6] hover:scale-110 transition-transform duration-300'>
          DEEGA AUGUSTINE
        </h3>
        <h4 className='text-2xl sm:text-4xl md:text-5xl my-2 text-[#8892b0]'>
          <b>
            I'm a <i className='text-white'>Front end Developer</i>
          </b>
        </h4>
        <p className='text-lg sm:text-xl md:text-2xl text-justify text-indigo-500 py-6 px-4 sm:px-6 md:px-10 mx-auto hover:bg-black transition-colors duration-300'>
          <i>
            Innovative and Detail-Oriented Developer
            Crafting Visually Appealing and Functional Web Solutions
          </i>
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-3 mx-auto flex items-center hover:bg-green-900 hover:border-pink-600 transition-colors duration-300'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;