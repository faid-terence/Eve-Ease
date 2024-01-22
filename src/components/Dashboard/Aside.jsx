// Aside.js

import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router

const Aside = () => {
  return (
    <aside className="bg-primaryColor text-white w-1/4 min-h-screen">
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-4">TickNet</h2>
        <ul>
          <li className="mb-[100px] mt-[100px]">
            <Link to="/" className="block py-2 px-4 hover:bg-gray-700">
              Home
            </Link>
          </li>
          <li className="mb-8">
            <Link to="/dashboard" className="block py-2 px-4 hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li className="mb-8">
            <Link
              to="/my-tickets"
              className="block py-2 px-4 hover:bg-gray-700"
            >
              My Tickets
            </Link>
          </li>
          {/* Add more sidebar items as needed */}
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
