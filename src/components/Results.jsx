import React from 'react'
import { useRef, useState } from 'react'
import { snakeCase } from 'lodash'

import track1 from '../data/track1.mp3'
import playlistZip from '../data/playlist.zip'

import spotifyIcon from '../images/spotifyIcon.png'
import appleMusicIcon from '../images/appleMusicIcon.png'
import youtubeMusicIcon from '../images/youtubeMusicIcon.png'
import tidalIcon from '../images/tidalIcon.png'

import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'

import { FiPlay, FiPause } from 'react-icons/fi'
import { BsDownload } from 'react-icons/bs'

const Results = ({tracks}) => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [isPlaying, setIsPlaying] = useState(false);

    const exports = [
        {
            id: 0,
            title: "Spotify",
            icon: spotifyIcon,
            link: "https://open.spotify.com/"
        },
        {
            id: 1,
            title: "Apple Music",
            icon: appleMusicIcon,
            link: "https://music.apple.com/"
        }, 
        {
            id: 2,
            title: "YouTube Music",
            icon: youtubeMusicIcon,
            link: "https://music.youtube.com/"
        },
        {
            id: 3,
            title: "Tidal",
            icon: tidalIcon,
            link: "https://tidal.com/"
        }
    ]

    const audioRef = useRef()
    const progressBarRef = useRef();

    const handleNext = () => {
        if (trackIndex >= tracks.length - 1) {
            setTrackIndex(0);
            setCurrentTrack(tracks[0]);
        } else {
            setTrackIndex((prev) => prev + 1);
            setCurrentTrack(tracks[trackIndex + 1]);
        }
        audioRef.current.currentTime = 0;
    };

    const playSong = (id) => {
        return () => {
            setTrackIndex(id);
            setCurrentTrack(tracks[id]);
            setIsPlaying(true);
            console.log("playSong")
            audioRef.current.currentTime = 0;
        }
    }

    const playPause = (id) => {
        return (e) => {
            if (trackIndex === id) {
                setIsPlaying(!isPlaying);
            } else {
                setTrackIndex(id);
                setCurrentTrack(tracks[id]);
                setIsPlaying(true);
                audioRef.current.currentTime = 0;
            }
            console.log("playPause")
            e.stopPropagation();
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
                                {tracks.length === 1 ? "Song" : "Playlist"}
                            </h3>
                            <p className="max-w-2xl mt-1 text-sm text-gray-400 dark:text-gray-200">
                                Your {tracks.length === 1 ? "Cover Song" : "Playlist of Cover Songs"}  created by <span className='font-bold text-green-400 italic'>Ideas2Audio</span>
                            </p>
                        </div>
                        <div className='h-full w-full overflow-auto bg-gray-700'>
                            <ul className="w-full flex flex-col divide-y border-b bg-gray-800">

                            {tracks.map(({ id, title, artist, thumbnail }) => (

                                <li key={id} onClick={playSong(id)} className={"flex flex-row hover:bg-gray-600" + ((trackIndex === id) && " bg-slate-900") }>
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
                                        {(trackIndex === id)&&isPlaying ? (
                                            <button onClick={playPause(id)} className="flex justify-end text-right">
                                                <FiPause size={20} className='text-white'/>
                                            </button>
                                        ) : (                                        
                                            <button onClick={playPause(id)} className="flex justify-end text-right">
                                                <FiPlay size={20} className='text-white'/>
                                            </button>
                                        )}
                                    </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                        
                        <div className="w-full mt-0 p-2 border-b border-t rounded-b-lg sm:px-2">
                            <div className="mb-3 h-full my-auto flex flex-auto items-center">
                                <div name="audio-player" className='flex flex-auto'>
                                    <div className="w-full flex flex-row gap-2 items-center">
                                        <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext }} />
                                        <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
                                        <Controls {...{ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext, isPlaying, setIsPlaying }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className='w-4/12 h-full py-5 px-4 flex flex-col items-center'>
                    <div className={"h-full flex flex-col bg-slate-700 py-3 px-2 w-full rounded-lg mb-3"}>
                        <h1 className='w-full text-center text-2xl font-bold mb-2'> {tracks.length === 1 ? "Add Song to Playlist" : "Export Playlist"}</h1>
                        <ol className='h-full w-full flex flex-col gap-3'>
                            {exports.map(({ id, title, icon, link }) => (
                                <li key={id} className='w-full h-1/4 flex flex-row items-center'>
                                    <a href={link} key={id} target='_blank' rel='noreferrer' className='w-full h-full flex flex-row items-center px-3'>
                                        <button className='w-full h-full bg-gray-800 rounded-lg text-white text-xl font-bold flex flex-row items-center px-2'>
                                            <div>
                                                <img src={icon} alt={title} style={{ aspectRatio: 3/2 }} className='h-20 rounded-lg'/>
                                            </div>
                                            <p className='pl-2 w-full'>{title}</p>
                                        </button>
                                    </a>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className={"h-1/3 flex flex-col bg-gray-800 py-2 px-2 w-full rounded-lg"}>
                        <h1 className='w-full text-center text-2xl font-bold mb-1'>Download {tracks.length === 1 ? "Song" : "Playlist"}</h1>
                        <a href={tracks.length ===1 ? track1 : playlistZip} download={tracks.length===1 ? snakeCase(tracks[0].title) : "playlist"} target='_blank' rel='noreferrer' className='w-full h-full flex flex-auto items-center px-3'>
                            <button className='w-full h-20 bg-green-500 rounded-lg text-white text-xl font-bold flex flex-row items-center'>
                                <div className='w-55 px-2'>
                                    <BsDownload size={55} className='text-white mx-auto border-2 border-white rounded-lg px-1 '/>
                                </div>
                                <p className='w-full'>Download</p>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results