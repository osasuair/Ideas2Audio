import React, { useState } from 'react';

import { Tab, Tabs } from './Tabs';


const categories = [
    {
        key: 'voice',
        title: 'Voice',
        content: (
            <div className="flex flex-col items-center justify-center h-full">
                <div className="grid w-full justify-items-center pb-4 border-b">
                    <div className="flex w-3/4 justify-between mb-2 font-medium text-gray-700">
                        <label htmlFor="voicePitch" className="block">
                            Voice Pitch
                        </label>
                        <output id="voicePitchOutput" className="text-gray-700">{0}</output>
                    </div>
                    <input
                        type="range"
                        id="voicePitch"
                        name="voicePitch"
                        min="-5"
                        max="5"
                        defaultValue="0"
                        className="w-3/4 h-4 bg-gray-300 rounded-full appearance-none"
                        onChange={(e) => {
                            const value = e.target.value;
                            const output = document.querySelector('#voicePitchOutput');
                            output.value = value;
                        }}
                    />
                    <p className='block text-gray-700'>
                        Change the pitch of the songs vocals in octaves.
                    </p>
                    <p className='block text-gray-700'>
                    Generally, use 1 for male to female conversions and -1 for vice-versa.
                    </p>
                </div>
                <div className='grid w-full justify-items-center py-4 border-b'>
                    <div className="flex w-3/4 justify-between mb-2 font-medium text-gray-700">
                        <label htmlFor="songPitch" className="block font-medium text-gray-700">
                            Song Pitch
                        </label>
                        <output id="songPitchOutput" className="text-gray-700">{0}</output>
                    </div>
                    <input
                        type="range"
                        id="songPitch"
                        name="songPitch"
                        min="-5"
                        max="5"
                        defaultValue="0"
                        className="w-3/4 h-4 bg-gray-300 rounded-full appearance-none"
                        onChange={(e) => {
                            const value = e.target.value;
                            const output = document.querySelector('#songPitchOutput');
                            output.value = value;
                        }}
                    />
                    <p className='block text-gray-700'>
                        Change the pitch of the entire song (vocals and instruments) in octaves.
                    </p>
                </div>
            </div>
        ),

    },
    {
        key: 'generation',
        title: 'Generation',
        content: (
            <div className="flex flex-col items-center justify-center h-full px-4">
                <div className="w-full mb-4">
                    <label htmlFor="pitchDetectionAlgorithm" className="block font-medium text-gray-700">
                        Pitch Detection Algorithm
                    </label>
                    <select
                        id="pitchDetectionAlgorithm"
                        name="pitchDetectionAlgorithm"
                        className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                        defaultValue="rmvpe"
                    >
                        <option value="rmvpe">rmvpe</option>
                        <option value="mangio">mangio</option>
                    </select>
                </div>
                <div className='flex w-full justify-items-center mb-4'>
                    <div className="w-full mb-4 pr-2 border-r">
                        <div className="flex justify-between mb-2 font-medium text-gray-700">
                            Index Rate
                            <output id="indexRateOutput" className="text-gray-700">{0.5}</output>
                        </div>
                        <input
                            type="range"
                            id="indexRate"
                            name="indexRate"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue="0.5"
                            className="w-full h-4 bg-gray-300 rounded-full appearance-none"
                            onChange={(e) => {
                                const value = e.target.value;
                                const output = document.querySelector('#indexRateOutput');
                                output.value = value;
                            }}
                        />

                        <p className='block text-gray-700'>
                            Controls how much of the AI voice's accent to keep in the vocals
                        </p>
                    </div>
                    <div className="w-full mb-4 px-2 border-r">
                        <div className="flex justify-between mb-2 font-medium text-gray-700">
                            RMS Mix Rate
                            <output id="rmsMixRateOutput" className="text-gray-700">{0.5}</output>
                        </div>
                        <input
                            type="range"
                            id="rmsMixRate"
                            name="rmsMixRate"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue="0.5"
                            className="w-full h-4 bg-gray-300 rounded-full appearance-none"
                            onChange={(e) => {
                                const value = e.target.value;
                                const output = document.querySelector('#rmsMixRateOutput');
                                output.value = value;
                            }}
                        />
                        <p className='block text-gray-700'>
                            Control how much to mimic the original vocal's loudness (0) or a fixed loudness (1)
                        </p>

                    </div>
                    <div className="w-full mb-4 pl-2">
                        <div className="flex justify-between mb-2 font-medium text-gray-700">
                            Protect Rate
                            <output id="protectRateOutput" className="text-gray-700">{0.33}</output>
                        </div>
                        <input
                            type="range"
                            id="protectRate"
                            name="protectRate"
                            min="0"
                            max="0.5"
                            step="0.01"
                            defaultValue="0.33"
                            className="w-full h-4 bg-gray-300 rounded-full appearance-none"
                            onChange={(e) => {
                                const value = e.target.value;
                                const output = document.querySelector('#protectRateOutput');
                                output.value = value;
                            }}
                        />
                        <p className='block text-gray-700'>
                            Protect voiceless consonants and breath sounds. Set to 0.5 to disable.
                        </p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        key: 'outputMix',
        title: 'Output Mix',
        content: (
            <div className="flex flex-col h-full px-4">
                <div className="w-full mb-4">
                    <label htmlFor="outputFormat" className="block text-gray-700 font-medium mb-2">
                        Output Format
                    </label>
                    <select
                        id="outputFormat"
                        name="outputFormat"
                        className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline"
                        defaultValue="mp3"
                    >
                        <option value="mp3">mp3</option>
                        <option value="wav">wav</option>
                    </select>
                </div>
                <div className="w-full mb-4">
                    <div className="font-medium text-gray-700 mb-2 text-center">Volume Levels</div>
                    <div className="flex flex-col pb-2">
                        <div className="flex justify-between mb-2 font-medium text-gray-700">
                            Main Vocals
                            <output id="mainVocalsOutput" className="text-gray-700">{0.5}</output>
                        </div>
                        <input
                            type="range"
                            id="mainVocals"
                            name="mainVocals"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue="0.5"
                            className="w-full h-4 bg-gray-300 rounded-full appearance-none"
                            onChange={(e) => {
                                const value = e.target.value;
                                const output = document.querySelector('#mainVocalsOutput');
                                output.value = value;
                            }}
                        />
                    </div>
                    <div className="flex flex-col pb-2">
                        <div className="flex justify-between mb-2 font-medium text-gray-700">
                            Backup Vocals
                            <output id="backupVocalsOutput" className="text-gray-700">{0.5}</output>
                        </div>
                        <input
                            type="range"
                            id="backupVocals"
                            name="backupVocals"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue="0.5"
                            className="w-full h-4 bg-gray-300 rounded-full appearance-none"
                            onChange={(e) => {
                                const value = e.target.value;
                                const output = document.querySelector('#backupVocalsOutput');
                                output.value = value;
                            }}
                        />
                    </div>
                    <div className="flex flex-col pb-2">
                        <div className="flex justify-between mb-2 font-medium text-gray-700">
                            Instrumental
                            <output id="instrumentalOutput" className="text-gray-700">{0.5}</output>
                        </div>
                        <input
                            type="range"
                            id="instrumental"
                            name="instrumental"
                            min="0"
                            max="1"
                            step="0.01"
                            defaultValue="0.5"
                            className="w-full h-4 bg-gray-300 rounded-full appearance-none"
                            onChange={(e) => {
                                const value = e.target.value;
                                const output = document.querySelector('#instrumentalOutput');
                                output.value = value;
                            }}
                        />
                    </div>
                </div>
            </div>
        ),
    },
];

const AdvancedSettings = () => {
    return (
        <div>
            <Tabs>
                {categories.map((category) => (
                    <Tab label={category.title}>
                        <div className="flex-1 border-gray-300">
                            {category.content}
                        </div>
                    </Tab>
                ))}

            </Tabs>

        </div>
    );
};

export default AdvancedSettings;
