import { Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
  
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  console.log("This is private router", isLoggedIn)
  return (
   isLoggedIn ? <Outlet/> : <Navigate to="/"/>
  )
};

export default PrivateRoute;
