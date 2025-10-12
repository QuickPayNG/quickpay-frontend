import {
  Gift,
  HomeIcon,
  Link,
  LogOut,
  PlusIcon,
  Sun,
  User,
} from "lucide-react";
import quickpayLogo from "../../assets/logo/quickpay.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext/AuthContext";

const desktopNavItems = [
  { to: "dashboard", label: "Dashboard", icon: <HomeIcon size={20} /> },
  { to: "links", label: "My Links", icon: <Link size={20} /> },
  { to: "createlink", label: "Create Link", icon: <PlusIcon size={20} /> },
  { to: "rewards", label: "Rewards", icon: <Gift size={20} /> },
  { to: "profile", label: "Profile", icon: <User size={20} /> },
];
const mobileNavItems = [
  {
    to: "dashboard",
    label: "Home",
    icon: <HomeIcon size={30} />,
    isButton: false,
  },
  {
    to: "links",
    label: "Links",
    icon: <Link size={30} />,
    isButton: false,
  },
  {
    to: "createlink",
    label: "Create",
    icon: <PlusIcon size={30} />,
    isButton: true,
  },
  {
    to: "rewards",
    label: "Rewards",
    icon: <Gift size={30} />,
    isButton: false,
  },
  {
    to: "profile",
    label: "Profile",
    icon: <User size={30} />,
    isButton: false,
  },
];

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    console.log("signing out");

    const hasSignout: any = await logout();
    if (hasSignout) {
      console.log("signout successful");
    } else {
      console.log("an error occur");
    }
  };
  return (
    <>
      {/* deskotop */}

      <div className="w-[250px] h-[100vh] bg-black py-4 text-white fixed left-0 top-0 hidden sm:flex flex-col items-center justify-between">
        {/* top */}
        <div className="w-full flex flex-col gap-3">
          {/* logo */}
          <div className="flex flex-row gap-2 items-center pl-2">
            <img src={quickpayLogo} alt="logo" className="w-15 h-15" />
            <h1 className="text-xl font-bold">QuickPay</h1>
          </div>

          {/* navigations */}
          <div className="flex flex-col gap-2 mt-2 text-sm  pl-4 pr-2">
            {desktopNavItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className="flex flex-row text-[#adaaaa] gap-4 items-center px-2 py-1.25 cursor-pointer hover:bg-[#473c0a] hover:text-white rounded-md"
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        {/* down */}
        <div className="w-full flex flex-col gap-4 text-lg font-semibold pt-4 pl-3">
          <div className="flex flex-row gap-4 items-center cursor-pointer text-sm">
            <Sun size={20} />
            LightMode
          </div>
          <div
            onClick={handleLogout}
            className="flex flex-row gap-4 items-center cursor-pointer text-sm text-red-800"
          >
            <LogOut size={20} />
            Sign Out
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="sm:hidden flex w-full h-[70px] bg-background py-10 text-text fixed bottom-0  items-center border-t-1 border-gray-200 justify-evenly">
        {mobileNavItems.map((item, index) =>
          item.isButton ? (
            <NavLink
              key={index}
              to={item.to}
              className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-text text-3xl cursor-pointer hover:scale-105 transition-transform"
            >
              {item.icon}
            </NavLink>
          ) : (
            <NavLink
              key={index}
              to={item.to}
              className="cursor-pointer hover:scale-105 transition-transform flex flex-col items-center text-text"
            >
              {item.icon}
              <span className="text-sm">{item.label}</span>
            </NavLink>
          )
        )}
      </div>
    </>
  );
};

export default Navbar;
