/* eslint-disable @next/next/no-img-element */
import { useSession } from "next-auth/react";
import Description from "../components/Description";
import Navbar from "../components/Navbar";

const Home = () => {
  const { data: session, status } = useSession();

  const user = session;
  // console.log("USER", user)
  return (
    <div>
      <Navbar user={user} />
      <Description />
    </div>
  );
};

export default Home;
