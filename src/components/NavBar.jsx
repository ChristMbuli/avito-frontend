import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="shadow p-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={"/"} className="text-white text-lg font-bold">
          <img
            src="https://res.cloudinary.com/do2qwucmp/image/upload/v1718187048/enbqrjskcsqnzx2pujpn.png"
            alt="Logo"
            width={100}
          />
        </Link>
        <Link
          to={"/contact-us"}
          className="bg-[#e9d075] text-white p-2 shadow hover:bg-[#DDB93B] rounded-lg"
        >
          Nous Contacter
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
