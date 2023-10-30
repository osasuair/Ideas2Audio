import React, {useState} from 'react';
import AdvancedSettings from './AdvancedSettings';
import { Tabs, Tab } from './Tabs';
import { tracks } from '../data/tracks';


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

const SongList = ({ songs }) => {
    return (
        <div>
            <h1>Song List</h1>
            <table border="1">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Genre</th>
                </tr>
                </thead>
                <tbody>
                {songs.map((song, index) => (
                    <tr key={index}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};


const EditReview = () => {
  return (
    <div className='h-full w-full'>
        <Tabs>
            <Tab label="Song List">
                <SongList songs={tracks} />
            </Tab>
            <Tab label="Advanced Settings">
                <AdvancedSettings />
            </Tab>
        </Tabs>
    </div>
  );
};

export default EditReview;
