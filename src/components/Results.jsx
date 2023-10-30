import React from 'react'
import { useRef, useState } from 'react'

import AudioPlayer from './AudioPlayer'
import { tracks } from '../data/tracks'

import { FiPlay, FiPause } from 'react-icons/fi'
import profile from '../images/profile.png'
import albumCover from '../images/albumCover.png'

const Results = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);

    var selectedSong = 1
    var selectedVoice = "James"
    var selectedVoiceGenre = "Rock"

    const playSong = (key) => {
        return () => {
            console.log(key)
            selectedSong = key
        }
    }

    return (
        <div name="results" className='h-full w-full flex flex-col text-white'>
            <div className='w-full h-20 border-b border-slate-500 pb-2 flex flex-col justify-center text-center font-bold'>
                <h1 className='text-3xl text-green-500'>Results</h1>
            </div>
            <div className='w-full h-full flex flex-row gap-14 justify-center overflow-auto'>
                <div className='h-full w-8/12 justify-center items-center py-5'>
            
                    <div className="flex flex-col h-full w-full bg-gray-800 rounded-lg shadow-lg ">
                        <div className="h-14 w-full flex flex-col px-4 py-2 border-b sm:px-6 justify-center">
                            <h3 className="text-lg font-medium leading-6 dark:text-white">
                                Playlist
                            </h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-400 dark:text-gray-200">
                                Your Playlist of Cover Songs created by <span className='font-bold text-green-400 italic'>Ideas2Audio</span>
                            </p>
                        </div>
                        <div className='h-full w-full overflow-auto bg-gray-700'>
                            <ul className="w-full flex flex-col divide-y border-b bg-gray-800">

                            {tracks.map(({ id, title, artist, thumbnail }) => (

                                <li key={id} onClick={playSong(id)} className={"flex flex-row hover:bg-gray-600" + ((selectedSong === id) && " bg-slate-900") }>
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
                                            <div className="text-sm text-gray-500 dark:text-gray-200">
                                                {artist}
                                            </div>
                                        </div>
                                        {selectedSong === id ? (
                                            <span className="flex justify-end text-right">
                                                <FiPause size={20} className='text-white'/>
                                            </span>
                                        ) : (                                        
                                            <span className="flex justify-end text-right">
                                                <FiPlay size={20} className='text-white'/>
                                            </span>
                                        )}
                                    </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                        
                        <div className="w-full mt-0 p-2 border-b border-t rounded-b-lg sm:px-6">
                            <div className="mb-3 h-full my-auto flex flex-auto items-center">
                                <AudioPlayer />
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-4/12 h-full py-5 px-4 flex flex-col items-center'>
                    <h1 className='text-center text-2xl font-bold mb-2'>Export Playlist</h1>
                    <div className={"flex flex-row bg-slate-300 py-2 px-2 w-full rounded-lg mb-3"}>
                        <div className="flex items-center flex-1">
                            <div className="flex flex-col items-center justify-center h-10 mr-4">
                                <div className="relative block">
                                    <img alt="profile" src={profile} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                                </div>
                            </div>
                            <div className="flex-1 mr-16">
                                <div className="font-medium dark:text-white">
                                    {selectedVoice}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-200">
                                    {selectedVoiceGenre}
                                </div>
                            </div>
                            <span className="flex justify-end text-right">
                                <FiPause size={20} className='text-green-600'/>
                            </span>
                        </div>
                    </div>

                    <h1 className='text-center text-2xl font-bold mb-1'>Selected Songs</h1>
                    {/* <div className='bg-slate-300 rounded-xl p-3 h-full w-full mb-5'>
                        <ul className="flex flex-col divide-y min-w-full overflow-auto rounded-lg">

                        {selectedSongs.map((songKey) => (

                            <li key={songKey} className="flex flex-row bg-slate-100 w-full">
                                <div className="w-full flex items-center flex-1 py-1 px-3 ">
                                    <div className="flex flex-col items-center justify-center mr-4">
                                        <div className="relative block">
                                            <img alt="profile" src={albumCover} className="mx-auto object-cover rounded-full h-5 w-5 "/>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <span className="font-medium text-sm dark:text-white">
                                            {voices.find((song) => song.key === songKey).song}
                                        </span>
                                        <p className='inline'> - </p>
                                        <span className="text-sm text-gray-600 dark:text-gray-200">
                                        {voices.find((song) => song.key === songKey).artist}
                                        </span>
                                    </div>
                                    <button className="flex justify-end ml-auto">
                                        <BsCheckCircleFill size={20} className='text-blue-600'/>
                                    </button>
                                </div>
                            </li>
                        ))}
                        </ul>
                    </div> */}
                    <button className='w-full h-12 mt-auto py-2 bg-blue-300 rounded-lg hover:bg-blue-400 duration-200 cursor-pointer font-bold'>
                        Next Step
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Results