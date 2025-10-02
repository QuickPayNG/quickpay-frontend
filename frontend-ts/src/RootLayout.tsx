import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Outlet />
    </>
  );
};

export default RootLayout;
