import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthRoute = ({ children }: any) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  if (isAuthenticated) {
    navigate("/dashboard");
  }
  return { children };
};

export default AuthRoute;
