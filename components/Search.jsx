import { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
// import Navbar from "./Navbar";
import Link from "next/link";
import CardDetails from "./CardDetails";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);
  console.log("data", repos)

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    // console.log(searchInput);

    try {
      const data = await axios.get(
        `https://api.github.com/users/${searchInput}/repos`
      );
      setRepos(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <header className="searchHeader">
        <Link href="/" passHref>
          Repolist
        </Link>
        <span>
          <Link href="/repo-details">RepoDetails</Link>
        </span>
      </header>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Enter github username"
          value={searchInput}
          onChange={handleChange}
          className="input"
        />
        <button className="btnSearch" onClick={handleClick}>Search</button>
      </div>
      <Card repos={repos} />
      <CardDetails repos={repos} />
    </>
  );
};

export default Search;
