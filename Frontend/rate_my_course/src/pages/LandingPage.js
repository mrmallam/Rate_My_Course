import React, {useCallback, useEffect} from 'react'
import SearchComponent from '../components/SearchComponent';
import rateMyCourse_white_logo from '../resources/logo-white.png';
import UniDiv from '../components/UniDiv';
import Header from '../components/Header';
import '../styles/LandingPage.css';
import { useState } from 'react';

// Dummy data
const universities = [
  { id: 1, name: 'University of Example', location: 'Example City', reviewNum: 407 },
  { id: 2, name: 'Sample State University', location: 'Sampleville', reviewNum: 30 },
  { id: 3, name: 'Test University', location: 'Test City', reviewNum: 50 },
  { id: 4, name: 'Another University', location: 'Another City', reviewNum: 100 },
  { id: 5, name: 'Example University', location: 'Example City', reviewNum: 4 },
];

function LandingPage() {
  const [isChecked, setIsChecked] = useState(false);
  // Initialize searchResults with the full list of universities
  const [searchResults, setSearchResults] = useState(universities);

  useEffect(() => {
    // Sort the results when isChecked changes
    if (isChecked) {
      const sortedResults = [...searchResults].sort((a, b) => a.name.localeCompare(b.name));
      setSearchResults(sortedResults);
    } else {
      setSearchResults(universities);
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
    <div className='flex flex-col items-center justify-center'>
      <Header />

      <img src={rateMyCourse_white_logo} className=' max-h-60' alt='logo' />

      <SearchComponent data={universities} onSearchResults={handleSearchResults} />

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
      { searchResults.map(result => <UniDiv data={result} />) }
    </div>
  );
}

export default LandingPage;