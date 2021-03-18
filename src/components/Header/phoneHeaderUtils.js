import hamburgerIcon from "../../assets/img/svg/hamburger.svg";
export const PhoneBurgerButton = (props) => (
  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    <button
      onClick={() => {
        props.setNavbarOpen(!props.navbarOpen);
      }}
      type="button"
      className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <img src={hamburgerIcon} width={30} alt="hamburger" />
    </button>
  </div>
);

export const PhoneNavExpanded = (props) => (
  <div
    className={`sm:hidden bg-menu-bg transition-all delay-1 ease-in-out duration-1000 overflow-hidden ${
      props.navbarOpen ? "h-72" : "h-0"
    }`}
    id="mobile-menu"
  >
    <div className="items-start flex w-full flex-row bg-black px-4 py-5 space-x-4">
      {["Log in", "Sign up"].map((item, index) => (
        <PhoneNavLoginSignupButtons
          name={item}
          key={`PNLS-${Math.random()}-${index}`}
        ></PhoneNavLoginSignupButtons>
      ))}
    </div>
    <div className="px-6 pt-2 pb-3 space-y-1 text-left">
      {["movies", "tv shows", "arabic", "kids", "channels"].map(
        (item, index) => (
          <PhoneCustomNav
            item={item}
            key={`phone-navitem-${Math.random()}-${index}`}
          />
        )
      )}
    </div>
  </div>
);

const PhoneCustomNav = ({ item }) => (
  <a href={`/${item}`} className="text-nb-gray uppercase py-2 block font-light">
    {item}
  </a>
);

const PhoneNavLoginSignupButtons = ({ name }) => (
  <button className="rounded-md flex bg-menu-bg px-4 py-2 text-white">
    {name}
  </button>
);
