/* eslint-disable @next/next/no-img-element */
import { signIn, signOut, useSession } from "next-auth/react";
import Navbar from "../components/Navbar";

const Home = () => {
  const { data: session, status } = useSession();

  const user = session;
  // console.log("USER", user)
  return (
    <div>
      <Navbar  user={user} />
      {user && (
        <>
          <h3>{user?.user.name}</h3>
          <img src={user.user.image} alt="marusoft" width={100} height={100} />
          <button onClick={() => signOut()}>Logout</button>
        </>
      )}
      {!user && (
        <>
          <button onClick={() => signIn("github")}>Login</button>
        </>
      )}
    </div>
  );
};

export default Home;
