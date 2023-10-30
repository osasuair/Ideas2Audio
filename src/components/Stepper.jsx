import React from 'react'

const Stepper = ({ stepNumber, setStepNumber }) => {

    const steps = [
        {
            "name": "Voice",
            "extra": "Choose",
            "step": 0,
        },
        {
            "name": "Songs",
            "extra": "Choose",
            "step": 1,
        },
        {
            "extra": "Edit/",
            "name": "Review",
            "nospace": true,
            "step": 2,
        },
        {
            "name": "Results",
            "extra": "",
            "step": 3,
        }
    ]
  return (
    <ol className="flex items-center h-10 w-full my-4 px-4 font-medium text-center text-gray-500 text-lg bg-slate-200 rounded-xl shadow-md">
        {steps.map(({name, extra, step, nospace}) => (
            (step <steps.length-1) ? (
                <li key={step} className={`flex md:w-full items-center px-2 text-${stepNumber === steps.length-1 ? 'green' : (stepNumber >= step ?'blue':'gray')}-500`}>
                    <span className="flex items-center">
                        {stepNumber >= step && (
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                        )}
                        <span className={`hidden ${stepNumber<=step && "sm:inline-flex "+(!nospace && "md:mr-1")}`}>{extra}</span>{name}
                    </span>
                    <span className={`hidden md:block md:flex-auto md:border-b-2 border-${stepNumber === steps.length-1 ? 'green-500' : (stepNumber > step ?'blue-500':'gray-400')} md:mt-1 transition duration-500 ease-in-out md:px-4 md:ml-2`}  />
                    <span className={`md:hidden text-${stepNumber === steps.length-1 ? 'green-500' : (stepNumber > step ?'blue-500':'gray-400')}`}>/</span>
                </li>
            ) : (
                <li key={3} className={`flex items-center px-2 text-${stepNumber >= steps.length-1 ? 'green-500' : 'green-800'}`}>
                    {stepNumber >= steps.length-1 && (
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                        </svg>
                    )}
                    {name}
                </li>
            )
        ))}
        {/* <li key={0} className={`flex md:w-full items-center text-${stepNumber === 3 ? 'green': 'blue'}-500 px-2`}>
            <span className="flex items-center">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className={`hidden ${stepNumber<=0 && "sm:inline-flex"} sm:mr-1`}>Choose</span>Voice
            </span>
            <span className={`hidden md:block md:flex-auto md:border-b-2 border-${stepNumber === 3 ? 'green-500' : (stepNumber > 0 ?'blue-500':'gray-400')} md:mt-1 transition duration-500 ease-in-out md:px-4 md:ml-2`}  />
            <span className={`md:hidden text-${stepNumber === 3 ? 'green-500' : (stepNumber > 0 ?'blue-500':'gray-400')}`}>/</span>
        </li>

        <li key={1} className={`flex md:w-full items-center px-2 text-${stepNumber === 3 ? 'green' : (stepNumber >= 1 ?'blue':'gray')}-500`}>
            <span className="flex items-center">
                {stepNumber >= 1 && (
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                )}
                <span className={`hidden ${stepNumber<=1 && "sm:inline-flex"} sm:mr-1`}>Choose</span>Songs
            </span>
            <span className={`hidden md:block md:flex-auto md:border-b-2 border-${stepNumber === 3 ? 'green-500' : (stepNumber > 1 ?'blue-500':'gray-400')} md:mt-1 transition duration-500 ease-in-out md:px-4 md:ml-2`}  />
            <span className={`md:hidden text-${stepNumber === 3 ? 'green-500' : (stepNumber > 1 ?'blue-500':'gray-400')}`}>/</span>
        </li>

        <li key={2} className={`flex md:w-full items-center px-2 text-${stepNumber === 3 ? 'green' : (stepNumber >= 2 ?'blue':'gray')}-500`}>
            <span className="flex items-center">
                {stepNumber >= 2 && (
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                    </svg>
                )}
                <span className={`hidden ${stepNumber<=2 && "sm:inline-flex"}`}>Edit/</span>Review
            </span>
            <span key={12} className={`hidden md:block md:flex-auto md:border-b-2 border-${(stepNumber > 2 ?'green-500':'gray-400')} md:mt-1 transition duration-500 ease-in-out md:px-4 md:ml-2`}  />
            <span key={120} className={`md:hidden text-${(stepNumber > 2 ?'blue-500':'green-400')}`}>/</span>
        </li>
            
        <li key={3} className={`flex items-center px-2 text-${stepNumber >= 3 ? 'green-500' : 'green-800'}`}>
            {stepNumber >= 3 && (
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
            )}
            Results
        </li> */}
    </ol>

  )
}

export default Stepper