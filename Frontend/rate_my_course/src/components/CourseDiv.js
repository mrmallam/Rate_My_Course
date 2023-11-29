import React from 'react'
import uni_logo from '../resources/logo-ucalgary.jpg';

export default function CourseDiv() {
  return (
    <div className=' w-full md:w-1/2 h-24 mt-6 border-2 border-red-600 container shadow-lg py-2 flex items-center justify-between'>
        <img src={uni_logo} className="h-16 md:h-20 object-contain w-1/4 " alt='logo' />

        <div className='w-1/2 px-2 '>
            <span className="block text-lg md:text-2xl font-normal text-left">SENG 513</span>

            <div class="flex items-center">
                {/* Full start */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 .587l3.507 7.106 7.841 1.14-5.675 5.525 1.341 7.813-7.014-3.687-7.014 3.687 1.341-7.813-5.675-5.525 7.841-1.14z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 .587l3.507 7.106 7.841 1.14-5.675 5.525 1.341 7.813-7.014-3.687-7.014 3.687 1.341-7.813-5.675-5.525 7.841-1.14z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24">
                    <path d="M12 .587l3.507 7.106 7.841 1.14-5.675 5.525 1.341 7.813-7.014-3.687-7.014 3.687 1.341-7.813-5.675-5.525 7.841-1.14z"/>
                </svg>

                {/* Half Star */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <defs>
                        <clipPath id="half-star">
                            <rect x="0" y="0" width="12" height="24" />
                        </clipPath>
                    </defs>
                    <path d="M12 .587l3.507 7.106 7.841 1.14-5.675 5.525 1.341 7.813-7.014-3.687-7.014 3.687 1.341-7.813-5.675-5.525 7.841-1.14z" clip-path="url(#half-star)" fill="currentColor" className="text-yellow-400"/>
                </svg>


                {/* Empty Start */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 .587l3.507 7.106 7.841 1.14-5.675 5.525 1.341 7.813-7.014-3.687-7.014 3.687 1.341-7.813-5.675-5.525 7.841-1.14z" fill="#f2f2f2"/>
                </svg>

            </div>
            
            
        </div>

        <span className="flex justify-start text-lg text-gray-600 text-left mr-3">Workload difficulty</span>
    </div>
  )
}
