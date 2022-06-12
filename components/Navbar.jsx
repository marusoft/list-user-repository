/* eslint-disable @next/next/no-img-element */
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">
        <Link href="/" passHref>Repo list</Link>
      </span>

      {user ? (
        <ul className="list">
          <li className="listItem">
            <img className="authorimg" src={user?.user.image} alt="author" />
          </li>
          <li className="listItem">{user?.user.name}</li>
          <li className="listItem">
            <Link href="/repo-list">Search for repos</Link>
          </li>
          <li className="listItem" onClick={() => signOut()}>
            <button className="logout"> Logout</button>
          </li>
        </ul>
      ) : (
        <button className="logout" onClick={() => signIn("github")}>Login with Github</button>
      )}
    </div>
  );
};

export default Navbar;
