import logo from "../assets/images/logo.png";
import search from "../assets/images/search.png";
import arrow_down from "../assets/images/arrow_down.png";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import cart from '../assets/shopping.svg'
import home from '../assets/frame.svg'

const RestaurantMenuHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, get the user's UID
        setUser(user);
        console.log(user.uid);
      } else {
        // No user is signed in
        setUser(null);
      }
    });
    return () => unsubscribe();
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
<nav className="py-8 px-6 bg-transparent laptop:px-20 laptop:pr-6 tablet:p-6 flex items-center justify-between flex-wrap font-pop shadow-md shadow-black/10">
      {/* Logo */}

      <div className="flex w-36 gap-3.5 items-center">
        <img src={logo} alt="Afribite Logo" />
        <p className="text-terra-cotta text-2xl font-extrabold">AFRIBITE</p>
      </div>    

      {/* Hamburger Menu (Mobile) */}
      <div className="block md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-terra-cotta focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Links (Desktop and Mobile) */}
      <div className="hidden md:flex md:ml-16">
        <div className="flex gap-5">
          <NavLink to="/" className="">
            Home
          </NavLink>
          <details>
            <summary className="list-none">Menu</summary>
          </details>
          <NavLink to={user !== null ? "/RestaurantPpage" : "/Sign-up"}>
            <summary className="list-none">Restaurant</summary>
          </NavLink>
          <a>Locations</a>
          <a>About Us</a>
        </div>
      </div>

      {/* User Actions (Login and Cart) */}
      <div className="hidden md:flex md:items-center  gap-5  ms-10">

      <NavLink to="" className="gap-2 flex items-center justify-center">
          <img src={cart} alt="" />
          <p className="text-black">Cart</p>
        </NavLink>
        <NavLink
          to="/user-sign-up"
          className="bg-terra-cotta text-center justify-center flex items-center rounded-lg text-white w-[150px] h-10 gap-1 px-2"
        >
          <img src={home} alt="" />
          <p className="text-white">Login/Sign Up</p>
        </NavLink>
      </div>

     

      {/* Mobile Menu Links (Hidden by default) */}
      <div
        className={`w-full ${
          isMobileMenuOpen ? "absolute top-20 right-0 bg-white block" : "hidden"
        } md:hidden text-center`}
        id="mobile-nav"
      >
        <div className="flex flex-col mt-4">
          <a className="py-2">Home</a>
          <details>
            <summary className="py-2 list-none">Menu</summary>
          </details>
          <NavLink to={user !== null ? "/Adminhome/Dashboard" : "/Sign-up"}>
            <summary className="list-none">Restaurant</summary>
          </NavLink>
          <a className="py-2">Locations</a>
          <a className="py-2">About Us</a>
          <NavLink
            to="/user-sign-up"
            className="bg-terra-cotta flex items-center justify-center text-center rounded-lg text-white w-full h-10 mt-4"
          >
            Login/Sign Up
          </NavLink>
          <a className="py-2 mt-2">Cart</a>
        </div>
      </div>
    </nav>
  );
};

export default RestaurantMenuHeader;
