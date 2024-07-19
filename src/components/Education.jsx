import React from 'react';
import { edu } from "../data/edu.js";

const Education = () => {
        const education = edu;
         return (
         
<div name='education' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-36 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 mt-16'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Education
          </p>
         
        </div>
{/* container for education */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* Gird Item */}
          {education.map((item, index) => (
  <div
    key={index}
    style={{ backgroundImage: `url(${item.image})` }}
    className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
  >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.name}
      </span>
      <br/>
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.year}
      </span>
      <br/>
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.college}
      </span>
      <br/>
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.location}
      </span>
      
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
      
        {/* eslint-disable-next-line */}
       
      </div>
    </div>
  </div>
))}


</div>
      </div>
    </div>
  );

  
}

export default Education;