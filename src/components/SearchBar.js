import React, { useState }from "react";

function SearchBar({ onSearch }) {

  const searchStyle = {
    textAlign: "center",
    color: "white",
  
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSearch(currentSearch);

  }

  const [currentSearch, setCurrentSearch] = useState('')


  return (
    <form style={searchStyle} className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="search">Search: &nbsp;</label>
      <input
        type="text"
        id="search"
        placeholder="Search Movies..."
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default SearchBar;
