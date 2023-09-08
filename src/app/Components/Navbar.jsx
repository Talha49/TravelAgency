"use client"
import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import {AiOutlineClose} from 'react-icons/ai'
import {BsTelephoneInbound} from 'react-icons/bs'
import {BiLogoFacebook, BiLogoInstagram,BiLogoTiktok, BiLogoTwitter} from 'react-icons/bi'
import Link from 'next/link'
import { useState } from 'react'
const Navbar = () => {
 const [open, setOpen] = useState(false)


    const hanside = ()=> {
      setOpen(!open);
    }
    return (
       <header className='bg-white shadow-3xl  shadow-black fixed w-full top-0 lef-0 z-10'>
        <nav className='flex  md:w-[80%] justify-between mx-auto  py-2 items-center'>
            <div className='flex gap-2 items-center'>
            <svg width="40px" height="50px" viewBox="0 0 1024.00 1024.00" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M398.5 152.1l294.9 308.5L383 933.5l-29.4-92 88.2-155.3-19.6-225.6 45-66.8-127.6-234.3z" fill="#8599A4"/>

<path d="M383 942.5c-0.4 0-0.8 0-1.2-0.1-3.4-0.5-6.3-2.9-7.4-6.2l-29.4-92c-0.8-2.4-0.5-5 0.7-7.2l86.9-152.9-19.4-222.8c-0.2-2 0.4-4.1 1.5-5.8l41.9-62.2-124.9-229.5c-1.4-2.6-1.5-5.8-0.1-8.4 1.4-2.6 3.9-4.5 6.9-4.8l58.9-7.4c2.8-0.4 5.7 0.7 7.6 2.7l294.9 308.5c2.9 3 3.3 7.7 1 11.2L390.5 938.5c-1.7 2.5-4.5 4-7.5 4z m-19.7-100l22.5 70.3 296.1-451.2-286.8-300-41.3 5.2L475 389.5c1.6 2.9 1.4 6.5-0.4 9.3L431.5 463l19.3 222.4c0.2 1.8-0.2 3.6-1.1 5.2l-86.4 151.9z" fill="#3E4152"/>

<path d="M832 86.9c-9.2 0-17.6 3.6-23.8 9.5-6.2-5.9-14.6-9.5-23.8-9.5-19.1 0-34.6 15.5-34.6 34.6s49.9 59.7 58.4 59.7 58.4-40.6 58.4-59.7-15.5-34.6-34.6-34.6z" fill="#9B5C77"/>

<path d="M808.2 190.3c-10.9 0-34-20.9-38.5-25.1-23.9-22.1-28.9-35.9-28.9-43.6 0-24.1 19.6-43.6 43.6-43.6 8.5 0 16.8 2.5 23.8 7.1 7-4.6 15.3-7.1 23.8-7.1 24.1 0 43.6 19.6 43.6 43.6 0 7.7-5 21.5-28.9 43.6-4.5 4.1-27.6 25.1-38.5 25.1z m-23.8-94.4c-14.1 0-25.6 11.5-25.6 25.6 0 2.9 4.5 12.8 21.4 28.8 12.4 11.8 23.7 19.5 28 21.6 4.3-2 15.6-9.8 28-21.6 16.9-16.1 21.4-25.9 21.4-28.8 0-14.1-11.5-25.6-25.6-25.6-6.6 0-12.8 2.5-17.6 7.1-3.5 3.3-8.9 3.3-12.4 0-4.8-4.6-11.1-7.1-17.6-7.1z" fill="#3E4152"/>

<path d="M775.6 123c-9.2 0-17.6 3.6-23.8 9.5-6.2-5.9-14.6-9.5-23.8-9.5-19.1 0-34.6 15.5-34.6 34.6s49.9 59.7 58.4 59.7 58.4-40.6 58.4-59.7-15.5-34.6-34.6-34.6z" fill="#9B5C77"/>

<path d="M751.8 226.4c-10.9 0-34-20.9-38.5-25.1-23.9-22.1-28.9-35.9-28.9-43.6 0-24.1 19.6-43.6 43.6-43.6 8.5 0 16.8 2.5 23.8 7.1 7-4.6 15.3-7.1 23.8-7.1 24.1 0 43.6 19.6 43.6 43.6 0 7.7-5 21.5-28.9 43.6-4.5 4.2-27.6 25.1-38.5 25.1zM728 132c-14.1 0-25.6 11.5-25.6 25.6 0 2.9 4.5 12.8 21.4 28.8 12.4 11.8 23.7 19.5 28 21.6 4.3-2 15.6-9.8 28-21.6 16.9-16.1 21.4-25.9 21.4-28.8 0-14.1-11.5-25.6-25.6-25.6-6.6 0-12.8 2.5-17.6 7.1-3.5 3.3-8.9 3.3-12.4 0-4.8-4.6-11-7.1-17.6-7.1z" fill="#3E4152"/>

<path d="M899.6 391.9H176.2L92 258.4H32.3l47.4 168.4c-40.3 11-58 29.4-58 37.6 0 37.8 71.8 64.9 109.6 64.9h768.4c37.8 0 107.9-30.9 107.9-68.7s-70.2-68.7-108-68.7z" fill="#C1E7D8"/>

<path d="M899.6 538.3H131.2c-40.7 0-118.6-28.8-118.6-73.9 0-13.2 19.2-31.8 56-43.7l-45-159.8c-0.8-2.7-0.2-5.6 1.5-7.9 1.7-2.2 4.4-3.6 7.2-3.6H92c3.1 0 6 1.6 7.6 4.2l81.5 129.3h718.5c20.9 0 49.3 8.4 72.5 21.3 28.6 16 44.4 36 44.4 56.3s-15.8 40.3-44.4 56.3c-23.2 13.1-51.6 21.5-72.5 21.5zM30.7 464.7c0.4 28.7 62.9 55.6 100.6 55.6h768.4c17.8 0 43.4-7.6 63.7-19 22.4-12.5 35.2-27.3 35.2-40.6s-12.8-28.1-35.2-40.6c-20.3-11.4-46-19-63.7-19H176.2c-3.1 0-6-1.6-7.6-4.2L87 267.4H44.2l44.2 156.9c0.7 2.3 0.4 4.8-0.8 6.9-1.2 2.1-3.1 3.6-5.5 4.2-35.5 9.8-50.2 24.9-51.4 29.3z" fill="#3E4152"/>

</g>

</svg>
                <h2 className='text-[21px] md:text-[24px]'>TK Agency</h2>
            </div>
            <ul className='hidden md:flex gap-6 items-center'>
                <Link href="/">
                <li className='text-[18px] hover:text-[#295c29]'>Home</li>
                </Link>
                <Link href="#Co">
                <li className='text-[18px] hover:text-[#295c29]'>About</li>
                </Link>
                <Link href= "#to">
                <li className='text-[18px] hover:text-[#295c29]'>Tours</li>
                </Link>
                <Link href="#Pl">
                <li  className='text-[18px] hover:text-[#295c29]'>Places</li>
                </Link>

               
                <Link href = '/Contact' className='border rounded-[5px] py-1 px-4 bg-[#235b6e] text-white flex gap-2 items-center '>
                Contact Us <BsTelephoneInbound /> 
            </Link>
            </ul>
            <div onClick={hanside} className="block text-3xl md:hidden">
              <RxHamburgerMenu />
              </div>
          
        </nav>
        
               




         
        <div className= {open ? 'fixed bg-[#ecf0f3] md:hidden  border-r border-r-black rounded-md h-full w-[85%]   top-0 left-0 ease-in-out duration-500 delay-150' : 'fixed left-[100%] ease-out duration-200 delay-300'} >
               <div className='flex   items-center justify-between '>
               <h1 className='text-xl mt-3 ml-3 font-bold tracking-wider '>TK Agency </h1>
               <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer' onClick={hanside}>
                  <AiOutlineClose />
                </div>
                </div>
                

                <div className='py-6 px-5 mt-8'>
    <ul className='flex flex-col gap-9 text-xl '>
      <Link href="/" >
        <li onClick={() => setOpen(false)} className='border-b-2 border-b-black/10 pb-3 hover:text-green-600 transition-width duration-300'>Home</li>
      </Link>
      <Link href="#Pl">
        <li onClick={() => setOpen(false)} className='border-b-2 pb-3 border-b-black/10 hover:text-green-600 transition-width duration-300'>Services</li>
      </Link>
      <Link href="/About">
        <li onClick={() => setOpen(false)} className='border-b-2 pb-3 border-b-black/10 hover:text-green-600 transition-width duration-300'>About</li>
      </Link>
      <Link href="#to">
        <li onClick={() => setOpen(false)} className='border-b-2 pb-3 border-b-black/10 hover:text-green-600 transition-width duration-300'>Tours</li>
      </Link>
      <Link href="/Contact">
        <li onClick={() => setOpen(false)} className='border-b-2 pb-3 hover:text-green-600 border-b-black/10 transition-width duration-300'>Contact</li>
      </Link>
    </ul>
  </div>
  <div>
    <h2 className='text-xl ml-3 mt-5 font-thick'> Social Links :-</h2>
  <div className='flex items-center gap-2 ml-3 mt-11'>
               
                <div className='rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300'>
                    <BiLogoFacebook  />
                    </div>
                    <div className='rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300'>
            <BiLogoInstagram />
                    </div>
                    <div className='rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300'>
            <BiLogoTiktok />
                    </div>
                    <div className='rounded-full shadow-xl shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in-out duration-300'>
            <BiLogoTwitter />
                    </div>
                </div>
</div>
</div>
            

           
       
        
       </header>
    )
}

export default Navbar
