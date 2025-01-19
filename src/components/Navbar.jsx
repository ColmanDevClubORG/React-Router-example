import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between px-10">
      <div className=" items-center">
        <Link to="/" className="text-white text-lg font-bold">
          ColmanDevClub Website
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/about" className="text-gray-300 hover:text-white">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
