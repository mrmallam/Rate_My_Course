import React, { useState, useEffect } from 'react';

const SearchComponent = ({ data, onSearchResults, placeholder }) => {
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        // Perform the search whenever searchInput changes
        const filteredResults = searchInput === '' ? data : data.filter(item =>
            item.name.toLowerCase().includes(searchInput.toLowerCase())
        );
        onSearchResults(filteredResults);
    }, [searchInput, data, onSearchResults, placeholder]); // Re-run the effect when searchInput or data changes

    return (
        <div className="flex items-center border-2 border-red-500 shadow-lg h-14">
            <input
                className="flex-1 px-6 h-full rounded-full text-gray-700 leading-tight focus:outline-none"
                id="search"
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder={placeholder}
            />
            {/* <svg className="w-6 h-7 mx-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 16C6.58 16 3 12.42 3 8c0-4.42 3.58-8 8-8s8 4.58 8 8c0 3.58-2.92 6.42-6.62 7.93"></path></svg> */}
        </div>
    );
};

export default SearchComponent;
