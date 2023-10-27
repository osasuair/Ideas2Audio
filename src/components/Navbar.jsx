import React from 'react'
import { FaIcons } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-16 px-40 text-black bg-white fixed top-0 z-50'>
        <div className='flex flex-row items-center'>
            <FaIcons size={25} color='black'></FaIcons>
            <h1 className='pl-2 text-3xl'>Navbar</h1>
        </div>
        <div>
            <h1 className='text-2xl'>Buttons</h1>
        </div>
    </div>
  )
}

export default Navbar