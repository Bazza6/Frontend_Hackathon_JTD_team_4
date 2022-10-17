import React from "react";
import logoAyto from "../assets/images/Llimes_reduides-02_RGB.jpeg";

const Header = () => {
  return (
    <div className="navbar bg-white">
      <div className="flex-1">
        <img className="h-12" src={logoAyto} />
      </div>
    </div>
  );
};

export default Header;
