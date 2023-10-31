import React from 'react'
import { useState } from 'react'

import { voices } from '../data/voices'
import { songList } from '../data/songs'

import { BsCheckCircleFill } from 'react-icons/bs'

const Songs = ({handleNext, voiceId, songs, addSong, removeSong}) => {
    const voice = voices.find(voice => voice.id === voiceId)
    const [hiddenUpload, setHiddenUpload] = useState(true);

    const nextClick = () => {
        if (songs.length > 0) {
            handleNext()
        }
    }

    const handleClick = (id) => {
        return () => {
            if (songs.includes(id)) {
                removeSong(id)
            } else {
                addSong(id)
            }
        }
    }

    const newSong = () => {
        addSong(0)
        setHiddenUpload(false);
    }

    return (
        <div name="songs" className='h-full w-full flex flex-col'>
            <div className='w-full h-20 border-b border-slate-500 pb-2 flex flex-col justify-center text-center font-bold'>
                <h1 className='text-3xl'>Select Songs</h1>
            </div>
            <div className='w-full h-full flex flex-row gap-14 justify-center overflow-auto'>
                <div className='h-full w-8/12 justify-center items-center py-5'>
            
                    <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800 ">
                        <div className="h-14 w-full flex flex-col px-4 py-2 border-b sm:px-6 justify-center">
                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                                Songs Database
                            </h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-500 dark:text-gray-200">
                                Songs are sorted by popularity
                            </p>
                        </div>
                        <div className='h-full w-full overflow-auto'>
                            <ul className="w-full flex flex-col divide-y border-b">

                            {songList.map(({ id, title, artist, thumbnail }) => (!(id===0 &&hiddenUpload) &&

                                <li key={id} onClick={handleClick(id)} className={"flex flex-row hover:bg-slate-100" + (songs.includes(id) ? " bg-slate-100" : "") }>
                                    <div className="flex items-center flex-1 py-2 px-6 cursor-pointer select-none grow">
                                        <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                            <div className="relative block">
                                                <img alt="profile" src={thumbnail} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                            </div>
                                        </div>
                                        <div className="flex-1 pl-1 mr-16">
                                            <div className="font-medium dark:text-white">
                                                {title}
                                            </div>
                                            <div className="text-sm text-gray-600 dark:text-gray-200">
                                                {artist}
                                            </div>
                                        </div>
                                        {songs.includes(id) && (
                                            <span className="flex justify-end w-24 text-right">
                                                <BsCheckCircleFill size={20} className='text-blue-600'/>
                                            </span>
                                        )}
                                    </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                        
                        <div className="w-full mt-0 px-4 py-2 bg-slate-100 border-b border-t rounded-b-lg sm:px-6">
                            <div className="mb-3 w-96">
                                <label
                                    htmlFor="formFileMultiple"
                                    className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                                >
                                Add a Song (File types: .mp3, .wav)
                                </label>
                                <input
                                    onClick={newSong}
                                    className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                    type="file"
                                    accept='.mp3,.wav'
                                    id="formFile"
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-4/12 h-full py-5 px-4 flex flex-col items-center'>
                    <h1 className='text-center text-2xl font-bold mb-2'>Selected Voice</h1>
                    <div className={"flex flex-row bg-slate-300 py-2 px-2 w-full rounded-lg mb-3"}>
                        <div className="flex items-center flex-1">
                            <div className="flex flex-col items-center justify-center h-10 mr-4">
                                <div className="relative block">
                                    <img alt="profile" src={voice.profile} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                </div>
                            </div>
                            <div className="flex-1 mr-16">
                                <div className="font-medium dark:text-white">
                                    {voice.name}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-200">
                                    {voice.genre}
                                </div>
                            </div>
                            <span className="flex justify-end text-right">
                                <BsCheckCircleFill size={20} className='text-green-600'/>
                            </span>
                        </div>
                    </div>

                    <h1 className='text-center text-2xl font-bold mb-1'>Selected Songs</h1>
                    <div className='bg-slate-300 rounded-xl p-3 h-full w-full mb-5'>
                        <ul className="flex flex-col divide-y min-w-full overflow-auto rounded-lg">

                        {songs.map((id) => (

                            <li key={id} className="flex flex-row bg-slate-100 w-full">
                                <div className="w-full flex items-center flex-1 py-1 px-3 ">
                                    <div className="flex flex-col items-center justify-center mr-4">
                                        <div className="relative block">
                                            <img alt="profile" src={songList.find((song) => song.id === id).thumbnail} className="mx-auto object-cover rounded-full h-5 w-5 "/>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <span className="font-medium text-sm dark:text-white">
                                            {songList.find((song) => song.id === id).title}
                                        </span>
                                        <p className='inline'> - </p>
                                        <span className="text-sm text-gray-600 dark:text-gray-200">
                                            {songList.find((song) => song.id === id).artist}
                                        </span>
                                    </div>
                                    <button onClick={handleClick(id)} className="flex justify-end ml-auto">
                                        <BsCheckCircleFill size={20} className='text-blue-600'/>
                                    </button>
                                </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <button onClick={nextClick} className={`w-full h-12 mt-auto py-2 ${songs.length > 0? 'bg-blue-300 hover:bg-blue-400 cursor-pointer': "bg-gray-300 cursor-not-allowed"} rounded-lg duration-200 font-bold`}>
                        Next Step
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Songs