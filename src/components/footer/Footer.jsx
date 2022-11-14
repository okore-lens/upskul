import "./footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="legal">
          <h1>Upskul</h1>
          <ul>
            <li>&copy; 2015-present</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
        <div className="products">
          <h3>Products</h3>
          <ul>
            <li>Blog</li>
            <li>Merchandise</li>
          </ul>
        </div>
        <div className="features">
          <h3>Features</h3>
          <ul>
            <li>Artists</li>
            <li>Shows</li>
          </ul>
        </div>
        <div className="company">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
