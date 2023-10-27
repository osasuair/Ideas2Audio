import React from 'react';
import background from '../images/landingPage.jpg'

class LandingPage extends React.Component {
    render() {
        return (
            <div name="landingPage" className='h-full min-h-screen w-full bg-slate-100 '>
                <div className='flex flex-row h-full w-full min-w-screen'>
                    <div className='flex flex-col h-full min-h-screen items-center justify-center text-black'>
                        <h1>BLAH BLAH BLAH</h1>
                    </div>
                    <div className='ml-auto rounded-bl-xl'>
                        <img src={background} alt="background" className='mx-auto h-[90vh] rounded-bl-2xl'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
