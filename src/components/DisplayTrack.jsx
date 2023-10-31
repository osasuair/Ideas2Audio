import React from 'react'
import { BsMusicNoteBeamed } from 'react-icons/bs';

const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef, handleNext }) => {
    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
    };

    return (
        <div>
            <audio src={currentTrack.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata} onEnded={handleNext} />
            <div className="audio-info flex flex-row items-center">
                <div className="audio-image mr-2">
                    {currentTrack.thumbnail ? (
                        <img src={currentTrack.thumbnail} alt="audio avatar" className='h-10'/>
                    ) : (
                        <div className="icon-wrapper">
                            <span className="audio-icon">
                                <BsMusicNoteBeamed />
                            </span>
                        </div>
                    )}
                </div>
                <div className="text">
                    <p className="title font-bold text-sm">{currentTrack.title}</p>
                    <p className='text-sm text-gray-300'>{currentTrack.artist}</p>
                </div>
            </div>
        </div>
    )
}

export default DisplayTrack