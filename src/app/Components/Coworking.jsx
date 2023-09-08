"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Cowork from '../img/Coworking.jpg'
const Coworking = () => {
    return (
        <section id='Co' className='grid md:grid-cols-1 lg:grid-cols-2 place-content-center place-items-center mt-1 py-7 w-full px-6 bg-[#86b6b113] md:px-9 gap-4 md:gap-9'>
        <div className='flex flex-col gap-4 items-center md:items-start text-center md:text-left'>
          <h2 className='text-lg md:text-2xl lg:text-4xl'>Our Coworking Team</h2>
          <p className='text-md md:text-2xl  max-w-prose'>
          Our passionate team of coworking experts is here to make your workspace experience exceptional. We're committed to providing a vibrant and collaborative environment that empowers your work and fosters connections.
          </p>
          <Link href='/About' className='border rounded-md py-2 px-6  text-center bg-[#235b6e] text-white text-sm md:text-lg'>
            Learn More
          </Link>
        </div>
        <div className='flex justify-center'>
          <Image src={Cowork} alt='/' className='rounded-lg shadow-2xl w-full max-w-sm md:max-w-[80%]' />
        </div>
      </section>
      
    
    )
}

export default Coworking


