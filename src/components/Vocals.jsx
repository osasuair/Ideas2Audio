import React from 'react'
// import right angle from fa
import { BsCheckCircleFill } from 'react-icons/bs'
import profile from '../images/profile.png'

const Vocals = () => {

    var voices = [
        {
            "name":"James",
            "image": "Image of James"
        },
        {
            "name":"John",
            "image": "Image of John"
        },
        {
            "name":"Mary",
            "image": "Image of Mary"
        },
        {
            "name":"Patricia",
            "image": "Image of Patricia"
        },
        {
            "name":"Patricia",
            "image": "Image of Patricia"
        },
        {
            "name":"Patricia",
            "image": "Image of Patricia"
        },
        {
            "name":"Patricia",
            "image": "Image of Patricia"
        },
        {
            "name":"Patricia",
            "image": "Image of Patricia"
        },
        {
            "name":"Patricia",
            "image": "Image of Patricia"
        },
        {
            "name":"Patricia",
            "image": "Image of Patricia"
        },
        {
            "name":"Patricia",
            "image": "Image of Patricia"
        },
        {
            "name":"Patricia",
            "image": "Image of Patricia"
        }
    ]

    return (
        <div name="vocals" className='h-full w-full flex flex-col'>
            <div className='w-full h-20 border-b border-slate-500 self-start top-0 flex flex-col justify-center text-center font-bold'>
                <h1 className='text-3xl'>Choose a Voice Model</h1>
            </div>
            <div className='h-full w-full grid grid-cols-2 gap-14 overflow-clip'>
                <div className='flex flex-auto max-h-full justify-center py-10'>
            
                    <div className="container flex flex-col h-1/2 items-center w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800  overflow-auto">
                        <div className="w-full px-4 py-5 border-b sm:px-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                Voice Model Database
                            </h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
                                Voices are sorted by popularity.
                            </p>
                        </div>
                        <ul className="flex flex-col divide-y w-full">

                        {voices.map(({ name, image }) => (

                            <li className="flex flex-row">
                                <div className="flex items-center flex-1 py-4 px-6 cursor-pointer select-none grow">
                                    <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                        <div className="relative block">
                                            <img alt="profile" src={profile} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </div>
                                    </div>
                                    <div class="flex-1 pl-1 mr-16">
                                        <div class="font-medium dark:text-white">
                                            Jean Marc
                                        </div>
                                        <div class="text-sm text-gray-600 dark:text-gray-200">
                                            Developer
                                        </div>
                                    </div>
                                    <button class="flex justify-end w-24 text-right">
                                        <BsCheckCircleFill size={20} className='text-green-600'/>
                                    </button>
                                </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-2xl font-bold'>Selected Voice</h1>
                    <h1>Image of Voice</h1>
                    <h1>James</h1>
                </div>
            </div>
        </div>
    )
}

export default Vocals