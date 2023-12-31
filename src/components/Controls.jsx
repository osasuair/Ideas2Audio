import React, { useCallback } from 'react'
import { useState, useEffect, useRef } from 'react'

// icons
import {
    IoPlayBackSharp,
    IoPlayForwardSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPlaySharp,
    IoPauseSharp,
  } from 'react-icons/io5';
  import { IoMdVolumeHigh, IoMdVolumeLow, IoMdVolumeOff } from 'react-icons/io';

/**
 * Controls component for audio player
 * @param {Object} props - Component props
 * @param {Object} props.audioRef - Reference to audio element
 * @param {Object} props.progressBarRef - Reference to progress bar element
 * @param {number} props.duration - Duration of the current track
 * @param {function} props.setTimeProgress - Function to set time progress of the track
 * @param {Array} props.tracks - Array of tracks
 * @param {number} props.trackIndex - Index of the current track
 * @param {function} props.setTrackIndex - Function to set the index of the current track
 * @param {function} props.setCurrentTrack - Function to set the current track
 * @param {function} props.handleNext - Function to handle next track
 * @param {boolean} props.isPlaying - Boolean indicating if the track is playing
 * @param {function} props.setIsPlaying - Function to set the playing state of the track
 * @returns {JSX.Element} Controls component JSX
 */
const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress, tracks, trackIndex, setTrackIndex, setCurrentTrack, handleNext, isPlaying, setIsPlaying}) => {
    const [volume, setVolume] = useState(60);
    const [muteVolume, setMuteVolume] = useState(false);

    const playAnimationRef = useRef();

    /**
     * Toggles the playing state of the track
     * @returns {void}
     */
    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
    };

    /**
     * Repeats the animation frame for the track progress
     * @returns {void}
     */
    const repeat = useCallback(() => {
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            '--range-progress',
            `${(progressBarRef.current.value / duration) * 100}%`
        );

        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressBarRef, setTimeProgress]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying, audioRef, repeat]);

    useEffect(() => {
        if (audioRef) {
          audioRef.current.volume = volume / 100;
          audioRef.current.muted = muteVolume;
        }
    }, [volume, audioRef, muteVolume]);

    /**
     * Skips the track forward by 15 seconds
     * @returns {void}
     */
    const skipForward = () => {
        audioRef.current.currentTime += 15;
    };
        
    /**
     * Skips the track backward by 15 seconds
     * @returns {void}
     */
    const skipBackward = () => {
        audioRef.current.currentTime -= 15;
    };

    /**
     * Handles the previous track
     * @returns {void}
     */
    const handlePrevious = () => {
        if (trackIndex === 0) {
            let lastTrackIndex = tracks.length - 1;
            setTrackIndex(lastTrackIndex);
            setCurrentTrack(tracks[lastTrackIndex]);
        } else {
            setTrackIndex((prev) => prev - 1);
            setCurrentTrack(tracks[trackIndex - 1]);
        }
        audioRef.current.currentTime = 0;
    };

    return (
        <div className="h-full controls-wrapper ml-auto text-sm flex flex-col items-end justify-end">
            <div className="controls text-base flex flex-row gap-1">
                <button onClick={handlePrevious}>
                    <IoPlaySkipBackSharp />
                </button>
                <button onClick={skipBackward}>
                    <IoPlayBackSharp />
                </button>

                <button onClick={togglePlayPause}>
                    {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </button>
                <button onClick={skipForward}>
                    <IoPlayForwardSharp />
                </button>
                <button onClick={handleNext}>
                    <IoPlaySkipForwardSharp />
                </button>
            </div>
            <div className="volume">
                <button onClick={() => setMuteVolume((prev) => !prev)}>
                {muteVolume || volume < 5 ? (
                        <IoMdVolumeOff />
                    ) : volume < 40 ? (
                        <IoMdVolumeLow />
                    ) : (
                        <IoMdVolumeHigh />
                    )}
                </button>
                <input
                    type="range" 
                    value={volume} 
                    min={0} 
                    max={100}
                    className='w-20 accent-gray-500'
                    onChange={(e) => setVolume(e.target.value)}
                />
            </div>
        </div>
    )
}

export default Controls