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
        destination: "/",
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
