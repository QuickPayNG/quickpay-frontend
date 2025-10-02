import { AuthContext } from "@/contexts/authContext/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  if (!isAuthenticated) {
    navigate("/login");
  }
  return { children };
};

export default ProtectedRoute;
