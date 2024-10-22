import React from 'react';
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  return (
    <div name='work' className='w-full bg-[#0a192f] text-gray-300 py-12'>
      <div className='max-w-[1000px] mx-auto px-6 flex flex-col justify-center w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Projects</p>
          <p className='text-xl mt-4'>Want to see some of my recent works?</p>
        </div>

        {/* Container for projects */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center'
            >
              {/* Hover effect for images */}
              <div className='opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                  {item.name}
                </span>
                <div className='pt-8 text-center'>
                  <a href={item.github} target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Code
                    </button>
                  </a>
                  <a href={item.live} target='_blank' rel='noopener noreferrer'>
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
