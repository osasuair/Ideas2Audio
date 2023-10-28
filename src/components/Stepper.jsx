import React from 'react'

const Stepper = () => {
  return (
    <ol className="flex items-center h-10 w-full my-4 px-4 font-medium text-center text-gray-500 text-lg bg-slate-200 rounded-xl shadow-md">
        <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 px-5">
            <span className="flex items-center">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span className="hidden sm:inline-flex sm:mr-1">Choose</span>Voice
            </span>
        </li>
        <li className="flex md:w-full items-center px-5">
            <span className="flex items-center">
                <span className="mr-2"></span>
                <span className="hidden sm:inline-flex sm:mr-1">Choose</span>Songs
            </span>
        </li>
        <li className="flex md:w-full items-center px-5">
            <span className="flex items-center">
                <span className="mr-2"></span>
                <span className="hidden sm:inline-flex">Edit/</span>Review
            </span>
        </li>
        <li className="flex items-center px-5 text-green-800">
            <span className="mr-2"></span>
            Results
        </li>
    </ol>

  )
}

export default Stepper