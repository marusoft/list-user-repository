import { getSession } from "next-auth/react";

const Dashboard = ({session}) => {
  const user = session?.user
  return (
    <div>Only authenticated users are allow</div>
  )
}

export default Dashboard;

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