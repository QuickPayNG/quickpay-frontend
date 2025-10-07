// import { AuthContext } from "@/contexts/authContext/AuthContext";
// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  // const { isAuthenticated } = useContext(AuthContext);
  // const location = useLocation();

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  //     </div>
  //   );
  // }
  // if (!isAuthenticated) {
  //   return <Navigate to={"/login"} state={{ from: location }} replace />;
  // }
  return children;
};

export default ProtectedRoute;
