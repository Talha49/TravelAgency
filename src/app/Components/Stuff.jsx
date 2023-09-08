"use client"
import React from 'react'
import {LiaSchoolSolid} from 'react-icons/lia'
import {BsStar} from 'react-icons/bs'
import {FaTruckMonster} from 'react-icons/fa'
import {LiaMoneyBillWaveAltSolid} from 'react-icons/lia'
import {RiCustomerService2Line} from 'react-icons/ri';
import {LuLibrary} from 'react-icons/lu';


function Stuff () {
    return (
        <div className=' '>
    <div className='grid grid-cols-3 md:flex bg-[#b1a4d426] px-2 justify-center py-4  gap-8 mx-[5%] sm:mx-[9%] '>
        <div className='flex flex-col items-center gap-1 text-center'>
             <LiaSchoolSolid className='text-blue-500 text-[29px]' />
             <h3 className='uppercase'>Certified <br /> Agents</h3>
        </div>
        <div className='flex flex-col text-center items-center gap-1'>
             <LuLibrary className='text-blue-500 text-[29px]' />
             <h3 className='uppercase'  >3000+ <br />Things to do</h3>
        </div>
        <div className='flex flex-col text-center items-center gap-1'>
             <BsStar className='text-blue-500 text-[29px]' />
             <h3 className='uppercase' >2000+ <br />Tour Operators</h3>
        </div>
        <div className='flex flex-col text-center items-center gap-1'>
             <FaTruckMonster className='text-blue-500 text-[29px]' />
             <h3 className='uppercase'>500+ <br/>Rental Companies</h3>
        </div>
        <div className='flex flex-col text-center items-center gap-1'>
             <LiaMoneyBillWaveAltSolid className='text-blue-500 text-[29px]' />
             <h3 className='uppercase'>Best <br/> Prices</h3>
        </div>
        <div className='flex flex-col text-center items-center gap-1'>
             <RiCustomerService2Line className='text-blue-500 text-[29px]' />
             <h3 className='uppercase'>Excellent <br/>Customer Support</h3>
        </div>
    </div>
</div>

    )
}

export default Stuff;

