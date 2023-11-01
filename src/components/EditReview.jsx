import AdvancedSettings from './AdvancedSettings';
import { Tabs, Tab } from './Tabs';
import { voices } from '../data/voices';
import { songList } from '../data/songs';
import { BsCheckCircleFill } from 'react-icons/bs';
import { generate } from './GenerateTracks'


const SongList = ({ songs }) => {
    return (
        <div className="flex flex-col h-full w-full bg-white rounded-lg dark:bg-gray-800 ">
            <div className="h-14 w-full flex flex-col px-4 py-2 border-b sm:px-6 justify-center">
                <h3 className="text-lg text-center font-medium leading-6 text-gray-900 dark:text-white">
                    Your Selected Songs
                </h3>
            </div>
            <div className='h-full w-full overflow-auto'>
                <ul className="w-full h-full flex flex-col divide-y border-b">
                    {console.log(songs)}
                    {songs.map((id) => (
                        <li key={id} className="flex flex-row hover:bg-slate-100 bg-slate-100">
                            <div className="flex items-center flex-1 py-2 px-6 grow">
                                <div className="flex flex-col items-center justify-center w-10 h-10 mr-4">
                                    <div className="relative block">
                                        <img alt="profile" src={songList.find((song) => song.id === id).thumbnail} className="mx-auto object-cover rounded-full h-5 w-5 " />
                                    </div>
                                </div>
                                <div className="flex-1 pl-1 mr-16">
                                    <div className="font-medium dark:text-white">
                                        {songList.find((song) => song.id === id).title}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-200">
                                        {songList.find((song) => song.id === id).artist}
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


const EditReview = ({ handleNext, voiceId, songs, results, setResults }) => {
    const voice = voices.find(voice => voice.id === voiceId);
    const nextClick = () => {
        setResults(generate(voiceId, songs, {}))
        handleNext()
      }

    return (
        <div className='h-full w-full flex-1 justify-items-center'>
            <div className='h-3/4 flex divide-y'>
                <div className='flex-1 w-8/12 bg-white rounded-lg my-4 dark:bg-gray-800 '>
                    <Tabs>
                        <Tab label="Song List">
                            <SongList songs={songs} />
                        </Tab>
                        <Tab label="Advanced Settings">
                            <AdvancedSettings />
                        </Tab>
                    </Tabs>
                </div>
                <div className='w-4/12 p-5 flex flex-col items-center'>

                    <div className='my-auto'>
                        <h1 className='text-center text-2xl mb-2'>Your Selected Voice:</h1>
                        <h1 className='text-center text-2xl font-bold mb-2'>{voice.name}</h1>
                        <div className='bg-slate-300 rounded-xl p-5'>
                            <img src={voice.profile} alt="profile" className='object-cover rounded-full w-full' />
                        </div>
                        <div className='pb-2 text-center items-center text-lg font-bold mt-2 text-gray-700'>
                            <h1>{voice.genre}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 h-1/4 justify-items-center">
                <button className="w-full h-12 mt-auto bg-green-400 rounded-lg hover:bg-green-500 duration-200 cursor-pointer font-bold" onClick={nextClick}>Generate!</button>
            </div>
        </div>
    );
};

export default EditReview;
