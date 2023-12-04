import React from 'react';
import { Link } from 'react-router-dom';
import uni_logo from '../resources/logo-ucalgary.jpg';
import Stars from '../resources/stars.jpg';


export default function Course_div({ data }) {


    const courseChoice = (result) => {
        console.log("Choosing class", result);
    };

    if (data) {
        return (
            <Link to={`/overallCourseReview/${encodeURIComponent(data.name)}`} className="w-3/4 md:w-4/12 h-24 mt-6">
                <div className='search-results'>
                    <div key={data.id} className='result-box' onClick={() => courseChoice(data)}>
                        <div className='results-left'>
                            <h2 className="text-3xl">{data.name}</h2>
                            <img src={Stars} alt="Starts-4" className='stars' />
                        </div>
                        <div className='result-right'>
                            <div className="text-2xl">Workload: {data.workload}</div>
                            <div className="text-2xl">Difficulty: {data.difficulty}</div>
                            <div className="text-2xl">Usefulness: {data.usefulness}</div>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}
