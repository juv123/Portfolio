import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center pt-32 '>
    <form method='POST' action="https://getform.io/f/104da966-6f86-436f-996a-cb660f8056e2" className='flex flex-col max-w-[600px] w-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - deegaaug@gmail.com</p>
        </div>
        <input className='bg-[#7f96e1] p-2 text-white cursor-auto placeholder:text-white' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#7f96e1] cursor-auto text-white placeholder:text-white' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#7f96e1] p-2 cursor-auto text-white placeholder:text-white' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-blue-700 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>
</div>
  )
}

export default Contact;