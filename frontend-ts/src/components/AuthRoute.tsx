import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthRoute = ({ children }: any) => {
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  if (isAuthenticated) {
    const from = location.state?.from?.pathname || "/dashboard";
    return <Navigate to={from} replace />;
  }
  return children;
};

export default AuthRoute;
