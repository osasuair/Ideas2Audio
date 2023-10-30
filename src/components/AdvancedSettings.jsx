import React, { useState } from 'react';

import { Tab, Tabs } from './Tabs';


const categories = [
    {
        key: 'voice',
        title: 'Voice',
        content: <div>Voice Settings</div>,
    },
    {
        key: 'generation',
        title: 'Generation',
        content: <div>Generation Settings</div>,
    },
    {
        key: 'outputMix',
        title: 'Output Mix',
        content: <div>Output Mix Settings</div>,
    },
];

const AdvancedSettings = () => {
    return (
        <div>
            <div className="flex-1 overflow-y-scroll border-r border-gray-300">
                <Tabs>
                    {categories.map((category) => (
                        <Tab label={category.title}>
                            {category.content}
                        </Tab>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default AdvancedSettings;
