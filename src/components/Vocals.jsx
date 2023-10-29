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
    var selectVoice = "James"

    return (
        <div name="vocals" className='min-h-full w-full flex flex-col'>
            <div className='w-full h-20 border-b border-slate-500 pb-2 flex flex-col justify-center text-center font-bold'>
                <h1 className='text-3xl'>Choose a Voice Model</h1>
            </div>
            <div className='w-full h-full flex flex-row gap-14 justify-center'>
                <div className='flex flex-auto h-full w-8/12 justify-center items-center py-5'>
            
                    <div className="flex flex-col h-full w-full mx-auto bg-white rounded-lg shadow dark:bg-gray-800 ">
                        <div className="w-full px-4 py-5 border-b h-20 sm:px-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                Voice Model Database
                            </h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
                                Voices are sorted by popularity
                            </p>
                        </div>
                        <div className="w-full px-4 py-2 bg-slate-100 order-3 border-b border-t rounded-lg sm:px-6">
                            <div className="mb-3 w-96">
                                <label
                                    htmlFor="formFileMultiple"
                                    className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                                >
                                Add a Voice Model (File types: .vc)
                                </label>
                                <input
                                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                    type="file"
                                    id="formFile"
                                />
                            </div>
                        </div>
                        <ul className="flex flex-col divide-y h-[21rem] w-full overflow-auto">

                        {voices.map(({ name, image }) => (

                            <li className={"flex flex-row hover:bg-slate-100" + (name===selectVoice ? " bg-slate-100" : "") }>
                                <div className="flex items-center flex-1 py-4 px-6 cursor-pointer select-none grow">
                                    <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                        <div className="relative block">
                                            <img alt="profile" src={profile} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                        </div>
                                    </div>
                                    <div className="flex-1 pl-1 mr-16">
                                        <div className="font-medium dark:text-white">
                                            {name}
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-200">
                                            Developer
                                        </div>
                                    </div>
                                    {name === selectVoice && (
                                        <button className="flex justify-end w-24 text-right">
                                            <BsCheckCircleFill size={20} className='text-green-600'/>
                                        </button>
                                    )}
                                </div>
                            </li>
                        ))}
                        </ul>
                        
                    </div>
                </div>

                <div className='w-4/12 h-full py-5 flex flex-col items-center'>
                    <h1 className='text-center text-2xl font-bold mb-2'>{selectVoice}</h1>
                    <div className='bg-slate-300 rounded-xl p-5'>
                        <img src={profile} alt="profile" className='object-cover rounded-full h-64 '/>
                    </div>
                    <div className='pb-2 text-center items-center text-lg font-bold mt-2 text-gray-700'>
                        <h1>Image of Voice</h1>
                    </div>
                    <button className='w-64 h-12 mt-auto bg-red-300 rounded-lg hover:bg-red-400 duration-200 cursor-pointer font-bold'>
                        Select Voice
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Vocals