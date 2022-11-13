import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav>
      <div className={`container ${navbar ? "active" : ""}`}>
        <div className="logo">
          <Link to="/">UpSkuL</Link>
        </div>
        <div className="middle-nav">
          <Link to="/art">Art Corner</Link>

          <Link to="/memories">Memories</Link>

          <Link to="/products">Products</Link>
        </div>
        <div className="help">
          <Link to="/about">
            <button>Get In Touch</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
