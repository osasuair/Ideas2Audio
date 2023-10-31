import React from 'react'
import { generate } from './GenerateTracks'

const EditReview = ({handleNext, voiceId, songs, results, setResults}) => {
  const nextClick = () => {
    setResults(generate(voiceId, songs, {}))
    handleNext()
  }
  return (
    <div>
      <button onClick={nextClick} className='w-full h-12 mt-auto bg-purple-300 rounded-lg hover:bg-purple-400 duration-200 cursor-pointer font-bold'>
        Next Step
      </button>
    </div>
  )
}

export default EditReview