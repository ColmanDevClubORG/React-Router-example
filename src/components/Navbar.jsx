import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between px-10">
      <div className=" items-center">
        <a href="/" className="text-white text-lg font-bold">
          ColmanDevClub Website
        </a>
      </div>
      <div className="flex space-x-4">
        <a href="/about" className="text-gray-300 hover:text-white">
          About
        </a>
        <a href="/profile" className="text-gray-300 hover:text-white">
          Profile
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
