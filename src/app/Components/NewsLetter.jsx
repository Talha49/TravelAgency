"use client"
import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
const NewsLetter = () => {
    return (
<div className='bg-[#b1a4d426] h-full py-9 mt-7'>
<div className='container mx-auto px-6'>
  <h4 className='text-lg md:text-xl lg:text-2xl text-center text-blue-800 font-semibold tracking-widest'>STAY IN THE KNOW</h4>
  <h2 className='text-2xl md:text-3xl lg:text-4xl mt-6 md:mt-9 text-center text-blue-900 font-semibold'>Sign Up For Our Newsletter</h2>
  <div className='bg-red-500 mx-auto mt-4 h-1 w-20 md:w-32 rounded-full' />
  <p className='text-lg md:text-xl lg:text-2xl text-center mt-6 md:mt-8 text-gray-700'>
      Stay updated with the latest travel destinations, tips, and exclusive offers from our travel agency. Explore the world with us!
    </p>
  <div className='mt-8 flex flex-col md:flex-row items-center justify-center'>
    <input type='email' placeholder='Email' className='py-2 px-4 md:w-1/3 lg:w-1/4 xl:w-1/5 rounded-full focus:ring-2 focus:ring-purple-600 focus:outline-none' />
    <button className='bg-yellow-400 py-2 flex items-center px-6 md:ml-4 mt-3 md:mt-0 rounded-full hover:bg-yellow-500 focus:outline-none text-white font-semibold shadow-md transform hover:scale-105 transition-transform duration-300'>
        Subscribe
      
     <AiOutlineArrowRight className='ml-2' />
      
    </button>
  </div>
</div>
</div>




    )
}

export default NewsLetter
