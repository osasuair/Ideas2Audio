import React from 'react';
import background from '../images/landingPage.jpg'
import { Link } from 'react-scroll';
import { FaAngleRight } from 'react-icons/fa';

class LandingPage extends React.Component {
    render() {
        return (
            <div name="homepage" className='h-full min-h-screen w-full bg-slate-100 flex justify-center items-center'>
                <div className='max-w-screen-lg p-10 flex flex-row h-full w-full py-16 items-center'>
                    <div className='flex flex-col h-full text-black pr-24'>
                        <h1 className='text-6xl font-bold pb-4'>AI<br/><span className='bg-gradient-to-r text-transparent bg-clip-text from-red-700 to-orange-500 tracking-wide'>Song Cover</span><br />Generator</h1>
                        <h2 className='text-gray-700 mb-2'>Ideas2Audio is your AI-powered song cover generator. Beautifully designed with customization options, it transforms your musical ideas into unique song covers. Dive into the world of music with Ideas2Audio!</h2>
                        <div className='flex flex-row'>
                            <Link to='editorPage' smooth duration={500} className='group w-fit px-2 py-1 flex items-center rounded-lg bg-orange-500 hover:bg-orange-600 duration-200 cursor-pointer font-bold'>
                                Start Creating <FaAngleRight size={20} className='group-hover:pl-1 duration-200'/>
                            </Link>
                        </div>
                    </div>
                    <div className='ml-auto rounded-bl-xl flex justify-center items-center'>
                        <img src={background} alt="background" className='mx-auto rounded-bl-2xl'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
