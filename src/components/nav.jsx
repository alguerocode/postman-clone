import React from "react";
import brand from "../../public/brand.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="img-fuild"
            width="200"
            src={brand}
            alt="postman logo"
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
