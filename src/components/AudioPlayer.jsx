import React from 'react'
import { useRef, useState } from 'react'
import { tracks } from '../data/tracks'

// import components
import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'

const AudioPlayer = () => {
    const [trackIndex, setTrackIndex] = useState(0);
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[trackIndex]);
    const [isPlaying, setIsPlaying] = useState(false);


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

    return (
        <div name="audio-player" className='flex flex-auto'>
            <div className="flex flex-row gap-4 items-center">
                <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef, handleNext }} />
                <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }} />
                <Controls {...{ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext, isPlaying, setIsPlaying }} />
            </div>
        </div>
  )
}

export default AudioPlayer