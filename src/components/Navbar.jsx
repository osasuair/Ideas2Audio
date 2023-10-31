import React from 'react'
import { FaIcons } from 'react-icons/fa'
import favicon from '../images/favicon.png'

const Navbar = () => {
  const startAgainClick = () => {
    window.location.reload(false);
  }
    
  return (
    <div className='flex justify-between items-center w-full h-16 px-10 text-black bg-white fixed top-0 z-50'>
        <div className='flex flex-row items-center'>
            <img src={favicon} className='w-10 h-10 rounded-lg'></img>
            <h1 className='pl-2 text-3xl'>Ideas2Audio</h1>
        </div>
        <div className='flex flex-row font-bold'>
            <button onClick={startAgainClick} className='w-fit px-6 py-2 my-2 ml-2 flex items-center rounded-lg bg-slate-200 hover:bg-slate-300 whitespace-nowrap'>Start Again</button>
        </div>
    </div>
  )
}

export default Navbar