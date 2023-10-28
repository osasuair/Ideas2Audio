import React from 'react'
import { FaIcons } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-16 px-10 text-black bg-white fixed top-0 z-50'>
        <div className='flex flex-row items-center'>
            <FaIcons size={25} color='black'></FaIcons>
            <h1 className='pl-2 text-3xl'>Ideas2Audio</h1>
        </div>
        <div className='flex flex-row font-bold'>
            <button className='w-fit px-6 py-2 my-2 mx-2 flex items-center rounded-lg bg-slate-200 hover:bg-slate-300'>Help</button>
            <button className='w-fit px-6 py-2 my-2 ml-2 flex items-center rounded-lg bg-slate-200 hover:bg-slate-300 whitespace-nowrap'>Start Again</button>
        </div>
    </div>
  )
}

export default Navbar