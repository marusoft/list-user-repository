/* eslint-disable @next/next/no-img-element */
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <span className="logo">Repo list</span>

      {user ? (
        <ul className="list">
          <li className="listItem">
            <img className="authorimg" src={user?.user.image} alt="author" />
          </li>
          <li className="listItem">{user?.user.name}</li>
          <li className="listItem" onClick={() => signOut()}>
            <button className="logout"> Logout</button>
          </li>
        </ul>
      ) : (
        <button className="logout" onClick={() => signIn("github")}>Login</button>
      )}
    </div>
  );
};

export default Navbar;
