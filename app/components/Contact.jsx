import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '../../../assets/assets.js'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a47787a0-2213-47e0-9252-9bfbdb6ff46f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-15 bg-[url("/footer-bg-color.png")] bg-center bg-no-repeat bg-[length:80%_auto]'>
       <h4 className='text-center mb-2 text-lg font-Ovo'>
        Connect with Me
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
         Get in Touch
      </h2>
      <p className='text-center max-w-2xl mx-auto mt-4 mb-0 font-Ovo'>
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
      </p>
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto flex flex-col items-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-10 w-full'>
            <input type='text' name='name' placeholder='Enter your name..' required className='w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
            <input type='email' name='email' placeholder='Enter your email..' required className='w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white'/>
        </div>
        <textarea rows={4} name='message' placeholder='Enter your message..' required className='w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-3'></textarea>
        <button type='submit' className='py-3 px-8 flex items-center justify-between gap-2 bg-black rounded-full mx-auto hover:bg-gray-800 duration-500 text-white'>
          Submit Now
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </button>
      </form>
      {result && (
        <p className='mt-4 text-center text-sm'>{result}</p>
      )}
    </div>
  )
}

export default Contact