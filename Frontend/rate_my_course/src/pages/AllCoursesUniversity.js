import React from 'react'
import CourseDiv from '../components/CourseDiv';

export default function AllCoursesUniversity() {
    return (
        <div className='p-4'>
            <div className="flex justify-start relative ">

                <button className="text-4xl xl:text-6xl">←</button>

                <h1 className="text-4xl mt-1 xl:text-6xl ml-4">University of Calgary</h1>
                
            </div>
            <div className='ml-4 mt-10'>
                <h2 className=' font-bold text-l text-gray-700'>Search course</h2>
                <input
                    type="search"
                    className=" mt-2 w-3/4 h-12 xl:h-14 xl:w-1/2 pl-4 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                    placeholder="SENG XXX"
                />
            </div>
            
            <div className=' mx-4 '>
                <CourseDiv />
                <CourseDiv />
                <CourseDiv />
                <CourseDiv />
                <CourseDiv />
            </div>

            
        </div>
    );
}
