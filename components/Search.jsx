import { useState, useEffect } from "react";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  const handleClick = () => {
    console.log(searchInput)
  }

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Enter github username"
        value={searchInput}
        onChange={handleChange}
        className="input"
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default Search;
