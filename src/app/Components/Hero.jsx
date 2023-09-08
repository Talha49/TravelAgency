"use client"
import React from 'react'
import {MdModeOfTravel} from 'react-icons/md'
import Link from 'next/link'
const Hero = () => {
    return (
        <div className='bg-[url("/Hero4.jpg")] h-screen bg-cover bg-center  flex items-center'>
           <div className='flex flex-col mx-auto md:mt-[5%] mt-[9%] justify-center items-center gap-4 text-center'>
            <h2 className='text-[27px] md:text-[32px] tracking-widest'>Empowering People who help people by travel</h2>
            <p className='text-[15px] tracking-wider md:text-[17px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Recusandae nobis dolorum animi saprnatur magni iure .</p>
            <div>
                <Link href="#Pl" className='flex items-center gap-2 outline-none border  rounded-[5px] py-1 px-4 bg-[#235b6e] text-white'>Explore More <MdModeOfTravel /></Link>
            </div>
         
           </div>
        </div>
    )
}

export default Hero


{/**https://99designs.com/profiles/antonsiribaddana99/designs/1037363    https://99designs.com/profiles/solomia/designs/1567300 */}
