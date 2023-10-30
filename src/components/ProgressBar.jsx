import React from 'react'

const ProgressBar = ({ progressBarRef, audioRef, timeProgress, duration }) => {
    const handleProgressChange = () => {
        progressBarRef.value = progressBarRef.current.value;
        audioRef.current.currentTime = progressBarRef.current.value;
    };

    const formatTime = (time) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
    };

    return (
        <div className="progress">
            <span className="time current">{formatTime(timeProgress)}</span>
            <input type="range" className="range slider" min="0" max="100" defaultValue="0"
                ref={progressBarRef}
                onChange={handleProgressChange}
            />
            <span className="time">{formatTime(duration)}</span>
        </div>
    )
}

export default ProgressBar