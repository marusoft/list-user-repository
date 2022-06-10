import { getSession } from "next-auth/react";
import Card from "../components/Card";
import Search from "../components/Search";

const RepoList = ({session}) => {
  const user = session?.user
  return (
    <div style={{
      padding: "30px"
    }}>
      <Search />
      <Card />
    </div>
  )
}

export default RepoList;

export async function getServerSideProps(context){
  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }
  return{
    props:{
      session
    }
  }
}