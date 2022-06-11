import { getSession } from "next-auth/react";
import Search from "../components/Search";

const RepoList = ({ session }) => {
  const user = session?.user;
  return (
    <div>
      <Search />
    </div>
  );
};

export default RepoList;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/http://localhost:3000/api/auth/callback/github",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
