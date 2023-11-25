
import UniLogo from '../resources/logo-ucalgary.jpg'
import Stars from '../resources/stars.jpg'

import '../styles/SearchResults.css';

import React, { useState } from 'react';

function Reviews() {
    const [courseCode, setCourseCode] = useState('Code');
    const [courseNumber, setCourseNumber] = useState('xxx');
    const [filter, setFilter] = useState('Filter');

    const searchResults = [
        { id: 1, title: 'SENG 513', workload: 'High', difficulty: 'Hard' },
        { id: 2, title: 'SENG 511', workload: 'Medium', difficulty: 'Low' },
        { id: 3, title: 'SENG 501', workload: 'Low', difficulty: 'High' },
        { id: 4, title: 'SENG 532', workload: 'High', difficulty: 'Medium' },
        // this will be connected to  backend where all the search results will be stored
      ];

    const courseChoice = (result) => {
        console.log("Choosing class", result);
    };
    
    return (
        <div className='search-container'>
            <div className='search-header'>
                <h1 className="text-4xl mb-10">SENG 5xx</h1>
                <div className='filters-container'>
                    <select 
                        value={courseCode} 
                        onChange={e => setCourseCode(e.target.value)}
                        className='border-4 border-red-800 rounded-full p-3'
                    >
                        <option value='SENG'>SENG</option>
                        <option value='CPSC'>CPSC</option>
                    </select>

                    <select 
                        value={courseNumber} 
                        onChange={e => setCourseNumber(e.target.value)}
                        className='border-4 border-red-800 rounded-full p-3 ml-10'
                    >
                        <option value='5xx'>5xx</option>
                        <option value='4xx'>4xx</option>
                        <option value='3xx'>3xx</option>
                        <option value='2xx'>2xx</option>
                    </select>

                    <select 
                        value={filter} 
                        onChange={e => setFilter(e.target.value)}
                        className='border-4 border-red-800 rounded-full p-3 ml-10'
                    >
                        <option value='Filter'>Filter</option>
                        <option value='Most Popular'>Most Popular</option>
                    </select>
                </div>

            </div>
            <div className='search-results'>
                {searchResults.map((result) => (
                    <div key={result.id} className='result-box' onClick={() => courseChoice(result)}>
                        <img src={UniLogo} alt="University-Search-Logo" className='Logo'/>
                        <div className='results-left'>
                            <h2 className="text-3xl">{result.title}</h2>
                            <img src={Stars} alt="Starts-4" className='stars' />
                        </div>
                        <div className='result-right'>
                            <div className="text-2xl">Workload: {result.workload}</div>
                            <div className="text-2xl">Difficulty: {result.difficulty}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  }
  
  export default Reviews;