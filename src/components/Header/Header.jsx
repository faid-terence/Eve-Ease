import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import logo from "../../assets/logo.png";
import userImage from "../../assets/terence 1.png";
import { authContext } from "../../context/authContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/events",
    display: "Events",
  },
  {
    path: "/tickets",
    display: "My Tickets",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];

export const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const { user, token } = useContext(authContext);

  const handleStickyHeader = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 60) {
      setIsSticky(true);
      setBgColor("#339657");
    } else {
      setIsSticky(false);
      setBgColor("");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);

    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <>
      <div className="header-text">
        <h4>Your Ultimate Solution For Online Tickets</h4>
      </div>
      <header
        className={`header flex items-center ${
          isSticky ? "sticky-header" : ""
        }`}
        style={{ backgroundColor: bgColor }}
        ref={headerRef}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center mt-2">
              <img src={logo} alt="Logo" className="w-43 h-[22px] rounded" />
              <h3 className="text-3xl text-white font-bold">TickNet</h3>
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu flex items-center gap-[2.7rem]">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={(navclass) =>
                        navclass.isActive
                          ? "text-black text-[16px] leading-7 font-[700]"
                          : "text-white text-[16px] leading-7 font-[500] hover:ease-out"
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center gap-4">
              {token && user ? (
                <div>
                  <Link to="/">
                    <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                      <img
                        src={user?.profilePhoto}
                        alt=""
                        className="rounded-full"
                      />
                    </figure>
                  </Link>
                </div>
              ) : (
                <Link to="/auth/signin">
                  <button className="bg-white py-2 px-6 text-black font-[700] h-[44px] flex items-center justify-center rounded-[50px]">
                    LOGIN
                  </button>
                </Link>
              )}

              <span className="md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer" color="white" />
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
