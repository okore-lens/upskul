import React from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default Navbar;
