import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        success: false,
        error: true,
        message: 'All fields are required.'
      });
      return;
    }

    fetch('https://getform.io/f/104da966-6f86-436f-996a-cb660f8056e2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        setFormStatus({
          success: true,
          error: false,
          message: 'Thank you for your message! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      })
      .catch((error) => {
        setFormStatus({
          success: false,
          error: true,
          message: 'There was an error submitting your message. Please try again later.'
        });
      });
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            Submit the form below or shoot me an email - deegaaug@gmail.com
          </p>
        </div>
        <input 
          className='bg-[#7f96e1] p-2 text-white placeholder:text-white mb-4 rounded-md' 
          type="text" 
          placeholder='Name' 
          name='name' 
          value={formData.name}
          onChange={handleChange}
        />
        <input 
          className='bg-[#7f96e1] p-2 text-white placeholder:text-white mb-4 rounded-md' 
          type="email" 
          placeholder='Email' 
          name='email' 
          value={formData.email}
          onChange={handleChange}
        />
        <textarea 
          className='bg-[#7f96e1] p-2 text-white placeholder:text-white mb-4 rounded-md' 
          name="message" 
          rows="10" 
          placeholder='Message'
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button 
          type='submit'
          className='text-white border-2 hover:bg-blue-700 hover:border-blue-700 px-4 py-3 rounded-md mx-auto flex items-center transition-colors duration-300'>
          Let's Collaborate
        </button>
        {formStatus.message && (
          <p className={`mt-4 text-center ${formStatus.success ? 'text-green-500' : 'text-red-500'}`}>
            {formStatus.message}
          </p>
        )}
      </form>
    </div>
  );
}

export default Contact;