import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }: any) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated) {
    return <Navigate to={"/app/dashboard"} />;
  }
  return children;
};

export default AuthRoute;
