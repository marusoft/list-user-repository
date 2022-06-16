/* eslint-disable @next/next/no-img-element */

const CardDetails = ({ repos }) => {
  console.log('REPOS', repos.data)
  return (
    <div>
      <div>
        <ul>
        {repos.data?.slice(0, 10).map((repo) => (
          <li className="listrepoitem" key={repo.id}>
              <img
                src={repo.owner.avatar_url}
                alt=""
                className="avatarrepo"
              />
              <div className="repoinfo">
                <span className="reponame">{repo.full_name}</span>
                <span className="repodesc">{repo.description}</span>
                <span className="btns">
                  <button>star: {repo.stargazers_count}</button>
                  <button className="forks">forks: {repo.forks_count}</button>
                </span>
              </div>
            </li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default CardDetails;
