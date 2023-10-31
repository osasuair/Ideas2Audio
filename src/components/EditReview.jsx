import React, { useState } from 'react';
import AdvancedSettings from './AdvancedSettings';
import { Tabs, Tab } from './Tabs';
import { tracks } from '../data/tracks';
import albumCover from '../images/albumCover.png'
import { BsCheckCircleFill } from 'react-icons/bs'


const TabbedInterface = () => {
    const [activeTab, setActiveTab] = useState('songList');

    return (
        <div className="p-8">
            <div className="flex space-x-4 mb-4">
                <button
                    className={`py-2 px-4 ${activeTab === 'songList' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveTab('songList')}
                >
                    Song List
                </button>
                <button
                    className={`py-2 px-4 ${activeTab === 'advancedSettings' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setActiveTab('advancedSettings')}
                >
                    Advanced Settings
                </button>
            </div>
            <div>
                {activeTab === 'songList' && <SongList songs={tracks} />}
                {activeTab === 'Advanced Settings' && <AdvancedSettings />}
            </div>
        </div>
    );
};

const SongList = () => {
    return (
        <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800 ">
            <div className="h-14 w-full flex flex-col px-4 py-2 border-b sm:px-6 justify-center">
                <h3 className="text-lg text-center font-medium leading-6 text-gray-900 dark:text-white">
                    Your Selected Songs
                </h3>
            </div>
            <div className='h-full w-full overflow-auto'>
                <ul className="w-full flex flex-col divide-y border-b">
                    {tracks.map((track, index) => (
                        <li key={index} className="flex flex-row hover:bg-slate-100 bg-slate-100">
                            <div className="flex items-center flex-1 py-2 px-6 grow">
                                <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <div className="relative block">
                                        <img alt="profile" src={albumCover} className="mx-auto object-cover rounded-full h-10 w-10 " />
                                    </div>
                                </div>
                                <div className="flex-1 pl-1 mr-16">
                                    <div className="font-medium dark:text-white">
                                        {track.title}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-200">
                                        {track.artist}
                                    </div>
                                </div>

                                <span className="flex justify-end w-24 text-right">
                                    <BsCheckCircleFill size={20} className='text-blue-600' />
                                </span>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const EditReview = () => {
    return (
        <div className='h-full w-full flex'>
            <div className='w-8/12'>
                <Tabs>
                    <Tab label="Song List">
                        <SongList />
                    </Tab>
                    <Tab label="Advanced Settings">
                        <AdvancedSettings />
                    </Tab>
                </Tabs>
            </div>
            <div className='w-4/12'></div>
        </div>
    );
};

export default EditReview;
