import React from 'react'
import shoppingCard from '../assets/shopping-cart.png';
import search from '../assets/search.png';
import logo from '../assets/logo.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='w-full flex flex-wrap justify-between items-center mt-2 rounded-full p-3 shadow-md'>
          <div className='flex gap-3 lg:gap-5'>
               <button className='rounded-full text-sm bg-red text-white px-3 py-2'>ورود / ثبت نام</button>
               <span className='rounded-full p-3 bg-gray-1 cursor-pointer'>
                    <Image src={shoppingCard} className="w-5 h-5" />
               </span>
               <div className='flex bg-gray-1 rounded-full items-center pr-5 '>
                    <Image src={search} className="w-4 h-4 cursor-pointer mx-3"/>
                    <input className='text-right bg-transparent flex-1 outline-none text-sm' placeholder='...جستجوی محصولات'/>
               </div>
          </div>
          <div>
               <Image src={logo} className="w-5 h-5 lg:w-8 lg:h-8"/>
               <div>
              
               </div>
          </div>
    </nav>
  )
}

export default Navbar
