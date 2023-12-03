
import UniLogo from '../resources/logo-ucalgary.jpg';
import SearchComponent from '../components/SearchComponent';
import Header from '../components/Header';
import CourseDiv from '../components/CourseDiv';
import '../styles/SearchResults.css';
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';


//   /api/Course/?university=University%20of%20Calgary


function Reviews() {
    const [courseCode, setCourseCode] = useState('Code');
    const [courseNumber, setCourseNumber] = useState('xxx');
    const [filter, setFilter] = useState('Filter');

    // search functionality
    const [isChecked, setIsChecked] = useState(false);
    // Initialize searchResults with the full list of universities
    const [searchResults, setSearchResults] = useState([]);

    const { universityName } = useParams();

    useEffect(() => {
        
        if (universityName) {
            const decodedUniversityName = decodeURIComponent(universityName);
            const url = `http://localhost:8000/api/Course/?university=${decodedUniversityName}`;
            fetch(url, {
                method: 'GET',
                headers: {
                'Content-Type':'application/json',
                }
            })
            .then(resp => resp.json())
            .then((data) => { setSearchResults(data); })
            .catch(error => console.log(error))
        }
    }, [universityName]);


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

    
    return (
        <div>
            <Header />

            <div className='search-container'>
            
                <div className='search-header'>

                    {/* delete flex items-center to put logo back on top */}
                    <div className='flex flex-col items-center'>
                        <img src={UniLogo} alt="University-Search-Logo" className='Logo'/>
                        <h1 className="text-4xl mb-5">University of Calgary</h1>
                    </div>
                    <div className='filters-container'>

                        <SearchComponent className='mb-4' data={searchResults} onSearchResults={handleSearchResults} placeholder={"Search Course"}/>
                        
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
                            className='border-4 border-red-800 rounded-full p-3 ml-5 -ml-15 mt-3'
                        >
                            <option value='-----'>-----</option>
                            <option value='Workload - Low to High'>Workload - Low to High</option>
                            <option value='Difficulty - Low to High'>Difficulty - Low to High</option>
                            <option value='Usefulness - Low to High'>Usefulness - Low to High</option>
                        </select>
                    </div>

                </div>

                {/* Display search results */}
                { searchResults.map(result => <CourseDiv data={result} key={result.id} />) }

            </div>
        </div>  
    );
  }
  
  export default Reviews;