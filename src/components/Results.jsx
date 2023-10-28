import React from 'react'

const Results = () => {
    return (
        <div name="results" className='h-full w-full flex flex-col'>
            <div className='w-full h-20 border-b border-slate-500 self-start top-0 flex flex-col justify-center text-center font-bold'>
                <h1 className='text-3xl text-green-400'>Results</h1>
            </div>
            <div className='h-full w-full grid grid-cols-2'>
                <div>
                    <h1>Song Player</h1>
                </div>
                <div>
                    <h1 className='text-center text-2xl font-bold'>Export</h1>
                    <h1>Song cover images</h1>
                    <h1>James - song name</h1>
                </div>
            </div>
        </div>
    )
}

export default Results