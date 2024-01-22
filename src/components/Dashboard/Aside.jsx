import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaCreditCard, FaTicketAlt, FaUser } from "react-icons/fa";

const dashboardLinks = [
  {
    path: "/dashboard",
    display: "Dashboard",
    icon: FaHome,
  },
  {
    path: "/mypayments",
    display: "My Payments",
    icon: FaCreditCard,
  },
  {
    path: "/myevents",
    display: "My Events",
    icon: FaTicketAlt,
  },
  {
    path: "/myprofile",
    display: "My Profile",
    icon: FaUser,
  },
];

const Aside = () => {
  return (
    <aside className="bg-primaryColor text-white w-1/4 min-h-screen">
      <div className="p-10">
        <h2 className="text-4xl font-bold mb-4 px-[60px]">TickNet</h2>
        <span className="px-2">
          Your Ultimate solution for Event Management
        </span>
        <ul>
          {dashboardLinks.map((link) => (
            <li
              key={link.path}
              className={`mt-[${link.path === "/dashboard" ? 200 : 40}px]`}
            >
              <Link to={link.path} className="block py-2 px-4">
                <link.icon className="mr-2" />
                {link.display}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
