import React from "react";
import logo from "../../assets/img/svg/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { DeviceContext } from "../../utils/deviceContext";
import lazyResolver from "../../utils/lazyResolver";
import { SuspenseWithFallback } from "../../utils/common";
import { WithErrorBoundary } from "../../hoc/withErrorBoundary";
import { Link, NavLink } from 'react-router-dom'

const PhoneBurgerButton = lazyResolver(
  () => import("./phoneHeaderUtils"),
  "PhoneBurgerButton"
);
const PhoneNavExpanded = lazyResolver(
  () => import("./phoneHeaderUtils"),
  "PhoneNavExpanded"
);

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [isTransparent, setTransparent] = React.useState(false);
  const { device } = React.useContext(DeviceContext);
  React.useEffect(() => {
    const handleScroll = (e) => {
      let scrollTop = window.pageYOffset;
      if (scrollTop < 5 && isTransparent) {
        setTransparent(false);
      }
      if (scrollTop > 5 && !isTransparent) {
        setTransparent(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTransparent]);
  return (
    <nav
      className={`bg-gradient-to-r z-10 fixed w-full bg-opacity-75 ${
        isTransparent
          ? "from-header-gradient-start-scroll to-header-gradient-end-scroll"
          : "from-header-gradient-start to-header-gradient-end"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2">
        <div className="relative flex items-center justify-between h-16">
          <SuspenseWithFallback>
            {device === "mobile" && (
              <PhoneBurgerButton
                navbarOpen={navbarOpen}
                setNavbarOpen={setNavbarOpen}
              />
            )}
          </SuspenseWithFallback>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
              <img className="block h-5 w-auto" src={logo} alt="starzplay" />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {["movies", "tv shows", "arabic", "kids", "channels"].map(
                  (item, index) => (
                    <CustomNavItem
                      key={`navitem-${Math.random()}-${index}`}
                      item={item}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden md:flex">
            <button className="bg-halo p-2 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <div className="h-6 w-6">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </button>
            <div className="ml-3 relative">
              <div>
                <a href="/" className="text-nb-gray hover:text-white px-3 py-7">
                  Log In
                </a>
                <a href="/" className="text-nb-gray hover:text-white px-3 py-7">
                  Sign Up
                </a>
                <a href="/" className="text-nb-gray hover:text-white px-3 py-7">
                  العربية
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 md:hidden">
            <div className="ml-3 relative">
              <div>
                <a href="/" className="text-nb-gray hover:text-white px-3 py-7">
                  العربية
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SuspenseWithFallback>
        {device === "mobile" && <PhoneNavExpanded navbarOpen={navbarOpen} />}
      </SuspenseWithFallback>
    </nav>
  );
};

const CustomNavItem = ({ item }) => (
  <NavLink
    to={`/${item}`}
    className="text-nb-gray uppercase text-sm hover:text-white font-light"
  >
    {item}
  </NavLink>
);

export default WithErrorBoundary(Header);
