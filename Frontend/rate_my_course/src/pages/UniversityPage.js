
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
    const [filteredResults, setFilteredResults] = useState([]);

    // search functionality
    const [isChecked, setIsChecked] = useState(false);
    // Initialize searchResults with the full list of universities
    const [searchResults, setSearchResults] = useState([]);
    const { universityName } = useParams();

    const courseNames = Array.from(new Set(searchResults.map(course => {
        const match = course.name.match(/[A-Za-z]+/);
        return match ? match[0] : '';
    })));

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
        setFilteredResults(sortedResults);
    }, [isChecked]);

    
    useEffect(() => {
        let filtered = searchResults;

        if(courseCode !== 'Code' && courseCode !== '----')
        {
            filtered = filtered.filter(item => item.name.toLowerCase().includes(courseCode.toLowerCase()));
        }
        if(courseNumber !== 'xxx' && courseNumber !== 'All')
        {
            filtered = filtered.filter(item =>{
                const match = item.name.match(/\b\d+/);
                if (match && match[0]) {
                    const firstDigit = match[0][0]; 
                    return firstDigit === courseNumber[0]; 
                }
                return false;
            });
        }
        setFilteredResults(filtered);
    }, [courseCode, courseNumber, searchResults]);

    return (
        <div>
            <Header />

            <div className='search-container'>
            
                <div className='search-header'>

                    {/* delete flex items-center to put logo back on top */}
                    <div className='flex flex-col items-center'>
                        <img src={UniLogo} alt="University-Search-Logo" className='Logo'/>
                        <h1 className="text-4xl mb-5">{universityName}</h1>
                    </div>
                    <div className='search-filters'>
                        <div className='search-comp'>
                            <SearchComponent className='' data={searchResults} onSearchResults={handleSearchResults} placeholder={"Search Course"}/>
                        </div>
                        <div className='drop-downs'>
                            <div className='select-wrapper'>
                                <select 
                                    value={courseCode} 
                                    onChange={e => setCourseCode(e.target.value)}
                                    className='border-2 border-red-600 rounded-full p-1 lg:p-3 lg:text-lg text-sm'
                                >
                                    <option value='----'>----</option>
                                    {courseNames.map((name, index) => (
                                        <option key={index} value={name}>{name}</option>
                                    ))}
                                </select>
                                <label className='ml-2 lg:text-lg text-sm'>Code</label>
                            </div>
                            <div className='select-wrapper ml-3'>
                                <select 
                                    value={courseNumber} 
                                    onChange={e => setCourseNumber(e.target.value)}
                                    className='border-2 border-red-600 rounded-full p-1 lg:p-3 lg:text-lg text-sm'
                                >
                                    <option value='All'>All</option>
                                    <option value='5'>5xx</option>
                                    <option value='4'>4xx</option>
                                    <option value='3'>3xx</option>
                                    <option value='2'>2xx</option>
                                    <option value='1'>1xx</option>
                                </select>
                                <label className='ml-2 lg:text-lg text-sm'>Number</label>
                            </div>
                            <div className='select-wrapper ml-3'>
                                <select 
                                    value={filter} 
                                    onChange={e => setFilter(e.target.value)}
                                    className='border-2 border-red-600 rounded-full p-1 lg:p-3 lg:text-lg text-sm lg:w-7/10 w-1/2'
                                >
                                    <option value='-----'>-----</option>
                                    <option value='Workload - Low to High'>Workload - Low to High</option>
                                    <option value='Difficulty - Low to High'>Difficulty - Low to High</option>
                                    <option value='Usefulness - Low to High'>Usefulness - Low to High</option>
                                </select>
                                <label className='ml-2 lg:text-lg text-sm'>Filter</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Display search results */}
                { filteredResults.map(result => <CourseDiv data={result} key={result.id} />) }

            </div>
        </div>  
    );
  }
  
  export default Reviews;