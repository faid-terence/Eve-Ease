import React from "react";
import logo from "../../assets/logo.png";
import userImage from "../../assets/terence 1.png";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

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
    display: "Tickets",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];
export const Header = () => {
  return (
    <>
    
    <div className="bg-[#EFEFEF] flex items-center justify-center" >
      <h4>Your Ultimate Solution For Online Tickets</h4>
    </div>
    <header className="header flex items-center">
     
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center mt-5">
            {/* <img src={logo} alt="Logo" className="w-43 h-[22px] rounded" /> */}
            <h3 className="text-3xl font-black">TickNet</h3>
          </div>

          <div className="navigation">
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
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImage} alt="" />
                </figure>
              </Link>
            </div>
            <Link to="/auth/signin">
              <button className="bg-white py-2 px-6 text-black font-[700] h-[44px] flex items-center justify-center rounded-[50px]">
                LOGIN
              </button>
            </Link>
            <span className="md:hidden">
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};
