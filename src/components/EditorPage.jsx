import React from 'react'
import { useState } from 'react'

import Stepper from './Stepper'
import Vocals from './Vocals'
import Songs from './Songs'
import EditReview from './EditReview'
import Results from './Results'

const EditorPage = () => {
  const [stepNumber, setStepNumber] = useState(0);
  
  const [voiceId, selectVoiceId] = useState(0);
  const [songs, selectSongs] = useState([]);
  const [results, setResults] = useState([]);
  
  const handleNext = () => {
    setStepNumber(stepNumber + 1)
  }

  let step = (x) => {
    switch (x) {
      case 1:
        return <Songs {...{handleNext, voiceId, songs, selectSongs}} />;
      case 2:
        return <EditReview {...{handleNext, voiceId, songs, results, setResults}} />;
      case 3:
        return <Results {...{handleNext, results}} />;
      default:
        return <Vocals {...{handleNext, voiceId, selectVoiceId}}  />;
    }
  }

  return (
    <div name="editorPage" className='h-full min-h-screen w-full bg-slate-100'>
      <div className='max-w-screen-lg items-center h-full min-h-screen flex flex-col pt-16 mx-auto'>
        <div className='h-20 mx-auto'>
            <Stepper {...{stepNumber, setStepNumber}} />
        </div>
        <div className='h-[calc(100vh-12rem)] w-full flex flex-col justify-center px-7 bg-slate-200 shadow-xl rounded-xl'>          
          {step(stepNumber)}
        </div>

      </div>
    </div>
  )
}

export default EditorPage