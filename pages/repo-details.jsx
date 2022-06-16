/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";

const RepoDetails = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState(null);

  const getRepos = async () => {
    try {
      const res = await fetch("http://api.github.com/users/example");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const setData = ({
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
  }) => {
    setName(name);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  useEffect(() => {
    getRepos();
  }, []);

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`http://api.github.com/users/${userInput}`);
      const data = await res.json();
      setData(data);
      console.log('Data', data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header className="searchHeader">
        <Link href="/" passHref>
          Repolist
        </Link>
        <span>
          <Link href="/repo-list">Back</Link>
        </span>
      </header>
      <form className="searchContainer">
        <input
          type="text"
          placeholder="Enter github username"
          value={userInput}
          onChange={handleSearch}
          className="input"
        />
        <button className="btnSearch" onClick={handleSubmit}>Search</button>
      </form>

      <div>
        <ul className="listrepo">
          <li className="listrepoitem">
            <img src={avatar} alt="author" className="avatarrepo" />
            <div className="repoinfo">
              <span className="reponame">{username}</span>
              <span className="reponame">{name}</span>
              <span className="repodesc">{repos} Repos</span>
              <span className="btns">
                <button>Followers: {followers}</button>
                <button className="unstars">Following: {following}</button>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RepoDetails;
