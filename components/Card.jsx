import React from "react";

const Card = ({ repos }) => {
  console.log(repos);
  const repolists =
    repos.length !== 0 ? (
      repos.data.slice(0, 15).map((repo) => <li key={repo.id}>{repo.name}</li>)
    ) : (
      <li>No Repos found</li>
    );
  return (
    <div>
      <ul>{repolists}</ul>
    </div>
  );
};

export default Card;
