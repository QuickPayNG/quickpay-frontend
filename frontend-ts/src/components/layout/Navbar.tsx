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

const desktopNavItems = [
  { to: "dashboard", label: "Home", icon: <HomeIcon size={20} /> },
  { to: "links", label: "Links", icon: <Link size={20} /> },
  { to: "#", label: "Create Link", icon: <PlusIcon size={20} /> },
  { to: "#", label: "Rewards", icon: <Gift size={20} /> },
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
    to: "#",
    label: "Create",
    icon: <PlusIcon size={30} />,
    isButton: true,
  },
  {
    to: "#",
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
  return (
    <>
      {/* deskotop */}

      <div className="w-[250px] h-[100vh] bg-yellow-400 py-4 text-black fixed left-0 top-0 hidden sm:flex flex-col items-center border-r-1 border-black justify-between">
        {/* top */}
        <div className="w-full flex flex-col gap-3">
          {/* logo */}
          <div className="flex flex-row gap-2 items-center pl-2">
            <img src={quickpayLogo} alt="logo" className="w-15 h-15" />
            <h1 className="text-2xl font-bold">QuickPay</h1>
          </div>
          {/* userinfo */}
          <div className="w-full flex flex-row gap-2 items-center border-y-1 border-black py-4 pl-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white text-3xl cursor-pointer">
              <User size={16} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-md font-bold">John Doe</h1>
              <p className="text-xs text-black">johndoe22@gmail.com</p>
            </div>
          </div>
          {/* navigations */}
          <div className="flex flex-col gap-4 mt-4 text-lg font-semibold pl-3 pr-2">
            {desktopNavItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className="flex flex-row gap-4 items-center px-2 py-1 cursor-pointer hover:bg-yellow-300  hover:rounded-2xl"
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
        {/* down */}
        <div className="w-full flex flex-col gap-4 text-lg font-semibold border-t-1 border-black pt-4 pl-3">
          <div className="flex flex-row gap-4 items-center cursor-pointer text-sm">
            <Sun size={20} />
            LightMode
          </div>
          <div className="flex flex-row gap-4 items-center cursor-pointer text-sm text-red-800">
            <LogOut size={20} />
            Sign Out
          </div>
        </div>
      </div>

      {/* mobile */}

      <div className="sm:hidden flex w-full h-[70px] bg-yellow-400 py-10 text-black fixed bottom-0  items-center justify-evenly">
        {mobileNavItems.map((item, index) =>
          item.isButton ? (
            <NavLink
              key={index}
              to={item.to}
              className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white text-3xl cursor-pointer hover:scale-105 transition-transform"
            >
              {item.icon}
            </NavLink>
          ) : (
            <NavLink
              key={index}
              to={item.to}
              className="cursor-pointer hover:scale-105 transition-transform flex flex-col items-center text-black"
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
