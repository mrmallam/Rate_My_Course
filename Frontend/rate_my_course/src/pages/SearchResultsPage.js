
import UniLogo from '../resources/logo-ucalgary.jpg';
import Stars from '../resources/stars.jpg';
import SearchComponent from '../components/SearchComponent';

import '../styles/SearchResults.css';

import React, { useState, useEffect, useCallback } from 'react';

const courses = [
    { id: 1, name: 'SENG 513', workload: 'High', difficulty: 'Hard' , usefulness: 'Low'},
    { id: 2, name: 'SENG 511', workload: 'Medium', difficulty: 'Low' , usefulness: 'Low'},
    { id: 3, name: 'SENG 501', workload: 'Low', difficulty: 'High' , usefulness: 'Low'},
    { id: 4, name: 'SENG 532', workload: 'High', difficulty: 'Medium' , usefulness: 'Low'},
    { id: 5, name: 'CPSC 532', workload: 'High', difficulty: 'Medium' , usefulness: 'Low'},
    { id: 6, name: 'CPSC 441', workload: 'High', difficulty: 'Medium' , usefulness: 'Low'},
    { id: 7, name: 'SENG 300', workload: 'High', difficulty: 'Low' , usefulness: 'Low'},
    // this will be connected to  backend where all the search results will be stored
  ];


function Reviews() {
    const [courseCode, setCourseCode] = useState('Code');
    const [courseNumber, setCourseNumber] = useState('xxx');
    const [filter, setFilter] = useState('Filter');

    // search functionality
    const [isChecked, setIsChecked] = useState(false);
    // Initialize searchResults with the full list of universities
    const [searchResults, setSearchResults] = useState(courses);

    useEffect(() => {
        // Sort the results when isChecked changes
        function sortedResults() {
            if (isChecked) {
                const sortedResults = [...searchResults].sort((a, b) => a.name.localeCompare(b.name));
                setSearchResults(sortedResults);
            } 
        
        }

      sortedResults();
      
    }, [isChecked]);

    const handleSearchResults = useCallback((results) => {
        const sortedResults = isChecked
          ? [...results].sort((a, b) => a.name.localeCompare(b.name))
          : results;
        setSearchResults(sortedResults);
    }, [isChecked]);


    const courseChoice = (result) => {
        console.log("Choosing class", result);
    };

    
    return (
        <div className='search-container'>
            <div className='search-header'>

                {/* delete flex items-center to put logo back on top */}
                <div className='flex items-center'>
                    <img src={UniLogo} alt="University-Search-Logo" className='Logo'/>
                    <h1 className="text-4xl mb-5">SENG 5xx</h1>
                </div>
                <div className='filters-container'>

                    <SearchComponent className='mb-4' data={courses} onSearchResults={handleSearchResults} />
                    
                    <select 
                        value={courseCode} 
                        onChange={e => setCourseCode(e.target.value)}
                        className='border-4 border-red-800 rounded-full p-3 mt-10 -ml-115'
                    >
                        <option value='----'>----</option>
                        <option value='SENG'>SENG</option>
                        <option value='CPSC'>CPSC</option>
                    </select>

                    <select 
                        value={courseNumber} 
                        onChange={e => setCourseNumber(e.target.value)}
                        className='border-4 border-red-800 rounded-full p-3 ml-5'
                    >
                        <option value='All'>All</option>
                        <option value='5'>5xx</option>
                        <option value='4'>4xx</option>
                        <option value='3'>3xx</option>
                        <option value='2'>2xx</option>
                    </select>

                    <select 
                        value={filter} 
                        onChange={e => setFilter(e.target.value)}
                        className='border-4 border-red-800 rounded-full p-3 lg:ml-5 -ml-15 mt-3'
                    >
                        <option value='-----'>-----</option>
                        <option value='Workload - Low to High'>Workload - Low to High</option>
                        <option value='Difficulty - Low to High'>Difficulty - Low to High</option>
                        <option value='Usefulness - Low to High'>Usefulness - Low to High</option>
                    </select>
                </div>

            </div>
            <div className='search-results'>
                {searchResults.map((result) => (
                    <div key={result.id} className='result-box' onClick={() => courseChoice(result)}>
                        <div className='results-left'>
                            <h2 className="text-3xl">{result.name}</h2>
                            <img src={Stars} alt="Starts-4" className='stars' />
                        </div>
                        <div className='result-right'>
                            <div className="text-2xl">Workload: {result.workload}</div>
                            <div className="text-2xl">Difficulty: {result.difficulty}</div>
                            <div className="text-2xl">Usefulness: {result.usefulness}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  }
  
  export default Reviews;