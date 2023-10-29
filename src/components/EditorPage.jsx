import React from 'react'
import Stepper from './Stepper'
import Vocals from './Vocals'
import Songs from './Songs'
import EditReview from './EditReview'
import Results from './Results'

const EditorPage = () => {

  let step = (x) => {
    switch (x) {
      case 0:
        return <Vocals />;
      case 1:
        return <Songs />;
      case 2:
        return <EditReview />;
      case 3:
        return <Results />;
      default:
        return <Vocals />;
    }
  }


  return (
    <div name="editorPage" className='h-full min-h-screen w-full bg-slate-100'>
      <div className='max-w-screen-lg items-center h-full min-h-screen flex flex-col pt-16 mx-auto'>
        <div className='h-20 mx-auto'>
            <Stepper />
        </div>
        <div className='h-[calc(100vh-12rem)] w-full flex flex-col justify-center p-7 bg-slate-200 shadow-xl rounded-xl'>          
          {step(1)}
        </div>

      </div>
    </div>
  )
}

export default EditorPage