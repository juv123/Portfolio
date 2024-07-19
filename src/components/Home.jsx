import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#160d4cc0]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-16 px-9 flex flex-col justify-center h-full'>
        <p className='text-xl text-yellow-600 mx-14'>Hi, my name is</p>
        <h1 className='text-2xl sm:text-5xl font-bold text-[#ccd6f6] hover:scale-125'>
           DEEGA AUGUSTINE
        </h1>
        <h4 className='sm:text-5xl my-2 text-[#8892b0]'>
          I'm a Front end Developer.
        </h4>
        <p className='text-white py-6 px-5 max-w-[700px] mx-16 hover:bg-black'><i>
           I can build the ‘client-side’ of your web applications and I am able to translate your company and customer needs into functional and appealing interactive applications.</i>
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-3 mx-16 flex items-center hover:bg-green-900 hover:border-pink-600'>
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
