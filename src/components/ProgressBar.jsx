import React from 'react'

/**
 * A progress bar component that displays the current time and duration of an audio file and allows the user to change the playback position.
 * @param {Object} props - The props object containing the following properties:
 * @param {Object} props.progressBarRef - The reference to the progress bar input element.
 * @param {Object} props.audioRef - The reference to the audio element.
 * @param {number} props.timeProgress - The current time of the audio file in seconds.
 * @param {number} props.duration - The duration of the audio file in seconds.
 * @returns {JSX.Element} - A JSX element representing the progress bar component.
 */
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
        <div className="progress text-sm mx-auto flex flex-row items-center">
            <span className="time current mr-1">{formatTime(timeProgress)}</span>
            <input type="range" className="range slider accent-gray-500" min="0" max="100" defaultValue="0"
                ref={progressBarRef}
                onChange={handleProgressChange}
            />
            <span className="time ml-1">{formatTime(duration)}</span>
        </div>
    )
}

export default ProgressBar