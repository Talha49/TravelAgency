"use client"
import React from 'react'
import Image from 'next/image';
import RWM from '../img/Blogs.png'

const Blog = () => {
    return (
        <div className=' w-full mt-10 py-9'>
            <div className='text-center  max-w-[1240px] mx-auto px-8'>
            <h2 className='text-lg  font-semibold md:text-3xl  mt-9 tracking-wide md:leading-9'><span className='text-4xl text-purple-800'>“ </span>Each and every business and person has a heart to make a difference <br /> in this world by doing good and doing it through travel <span className='text-4xl text-purple-800'>”</span> </h2>
             <p className='text-md md:text-xl lg:text-2xl mt-9 tracking-wide md:leading-8'>Embark on a Journey of Discovery with Our Travel Agency! Explore the Worlds Wonders, Capture Unforgettable Moments, and Create Lifelong Memories. Join Us Today and Let Your Wanderlust Soar! Your Adventure Begins Here. </p>
            
            </div>
            <div className='mt-8 max-w-[790px] mx-auto'>
                <Image src={RWM} alt='/' />
            </div>
        </div>
    )
}

export default Blog
