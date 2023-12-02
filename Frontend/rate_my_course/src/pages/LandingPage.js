import React, {useCallback, useEffect} from 'react'
import SearchComponent from '../components/SearchComponent';
import rateMyCourse_white_logo from '../resources/logo-white.png';
import UniDiv from '../components/UniDiv';
import Header from '../components/Header';
import '../styles/LandingPage.css';
import { useState } from 'react';

function LandingPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/University/', {
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
      }
    })
    .then(resp => resp.json())
    .then((data) => { setSearchResults(data); })
    .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    // Sort the results when isChecked changes
    if (isChecked) {
      const sortedResults = [...searchResults].sort((a, b) => a.name.localeCompare(b.name));
      setSearchResults(sortedResults);
    } else {
      setSearchResults(searchResults);
    }
  }, [isChecked]);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSearchResults = useCallback((results) => {
    // Apply sorting to the new search results if isChecked is true
    const sortedResults = isChecked
      ? [...results].sort((a, b) => a.name.localeCompare(b.name))
      : results;
    setSearchResults(sortedResults);
  }, [isChecked]);

  return (
    <div className='flex flex-col items-center justify-center mb-5'>
      <Header />

      <img src={rateMyCourse_white_logo} className=' max-h-60' alt='logo' />

      <SearchComponent
        data={searchResults}
        onSearchResults={handleSearchResults}
        placeholder={"Search University"}
      />

      <div className='flex justify-between text-sm mt-5 w-3/4 md:w-4/12'>
        {/* number of results */}
        <p className=' mt-1'>{searchResults.length} Results</p>

        {/* sort by A-Z */}
        <div className='flex justify-between'>
          <label className="switch">
            <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
            <span className="slider round"></span>
          </label>
          <p className=' mt-1 ml-2'>Sort A-Z</p>
        </div>
      </div>

      {/* Display search results */}
      {searchResults.map((result) => (
        <UniDiv data={result} key={result.id} />
      ))}
    </div>
  );
}

export default LandingPage;