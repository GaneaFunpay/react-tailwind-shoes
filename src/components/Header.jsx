import { MdShoppingCartCheckout } from "react-icons/md";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

function Header({ onShoppingCartClick }) {
  const [hideMobileMenu, setHideMobileMenu] = useState(true);
  const handleMenuClick = () => {
    setHideMobileMenu(!hideMobileMenu);
  };
  const routeList = ROUTES.map((route, index) => (
    <li
      key={route}
      className={`cursor-pointer rounded px-3 py-2 lg:bg-transparent lg:hover:bg-transparent lg:hover:text-blue-500 ${
        index === 0
          ? "bg-blue-500 text-white  lg:text-blue-500"
          : "hover:bg-gray-100"
      } ${index >= 3 && "lg:text-white "}`}
    >
      {route}
    </li>
  ));

  return (
    <nav className="relative z-10 flex flex-wrap justify-between items-center">
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>

      <button
        onClick={handleMenuClick}
        className="rounded-lg p-2 hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700"
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${hideMobileMenu && "hidden"} lg:block w-full lg:w-auto`}
      >
        <ul className="flex flex-col lg:flex-row text-lg p-4 lg:space-x-8 rounded-lg bg-gray-50 lg:bg-transparent border border-gray-200 lg:border-none lg:dark:text-white">
          {routeList}
        </ul>
      </div>

      <div className="fixed left-4 bottom-4 lg:static lg:mr-8">
        <button
          onClick={onShoppingCartClick}
          className="flex-center h-12 w-12 rounded-full bg-white shadow-md transition active:scale-75"
        >
          <MdShoppingCartCheckout />
        </button>
      </div>
    </nav>
  );
}

export default Header;
