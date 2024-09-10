import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 flex items-center'>
      <div className='max-w-[1000px] w-full mx-auto px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
          <div className='sm:text-right text-3xl sm:text-4xl font-bold'>
            <p>Hi. I'm Deega Augustine. Please find my Details.</p>
          </div>
          <div>
            <p className='text-lg sm:text-xl font-semibold'>
              A dedicated Frontend Developer with knowledge of HTML, CSS, JavaScript and
              React.js seeking to use technical proficiency and creativity to develop engaging user experiences and advance
              in a professional career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;