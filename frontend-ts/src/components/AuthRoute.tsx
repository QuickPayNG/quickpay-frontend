// import { AuthContext } from "@/contexts/authContext/AuthContext";
// import { useContext } from "react";
// import { Navigate } from "react-router-dom";

const AuthRoute = ({ children }: any) => {
  // const { isAuthenticated } = useContext(AuthContext);

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
  //     </div>
  //   );
  // }

  // if (isAuthenticated) {
  //   return <Navigate to={"/dashboard"} />;
  // }
  return children;
};

export default AuthRoute;
