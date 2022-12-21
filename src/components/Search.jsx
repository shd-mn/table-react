import React from 'react';
import { useUsers } from '../context/MainContext';
function Search() {
  const { setSearch } = useUsers();
    
  const handleSearch = (e) => {
    e.preventDefault();
    //...
  };

  return (
    <form className="search-box">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        className="search"
        placeholder="searh on table"
        type="text"
      />
      <button onClick={handleSearch} className="search-btn" type="submit">
        Search
      </button>
    </form>
  );
}

export default Search;
