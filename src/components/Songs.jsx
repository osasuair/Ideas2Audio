import React from 'react'

const Songs = () => {

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
        }
    ]

    return (
        <div name="songs" className='h-full w-full flex flex-col'>
            <div className='w-full h-20 border-b border-slate-500 self-start top-0 flex flex-col justify-center text-center font-bold'>
                <h1 className='text-3xl'>Choose Songs</h1>
            </div>
            <div className='h-full w-full grid grid-cols-2'>
                <div>
                    {voices.map(({ name, image }) => (
                        <div>
                            <h6>{name}</h6>
                            <h6>{image}</h6>
                        </div>
                    ))}
                </div>
                <div>
                    <h1 className='text-center text-2xl font-bold'>Selected Songs</h1>
                    <h1>Song cover images</h1>
                    <h1>James - song name</h1>
                </div>
            </div>
        </div>
    )
}

export default Songs