import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Deega Augustine. Please find my Details.</p>
            </div>
            <div>
              <p className='text-lg font-semibold'>A dedicated Frontend Developer with knowledge of HTML, CSS, JavaScript and
React.js seeking to use technical proficiency and creativity to develop engaging user experiences and advance
in a professional career.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
