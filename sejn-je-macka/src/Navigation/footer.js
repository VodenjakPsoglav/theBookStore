import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const footer = () => {
  return (
    <React.Fragment>
      <footer className="site-footer">
        <div className="about" >
          <h6>About</h6>
          <p className="text-justify">
            I need to write some things about the book store,until then Nunc ac
            imperdiet metus. Nullam quis congue mi. Curabitur nec purus sodales,
            fringilla felis sed, pellentesque magna. Suspendisse efficitur massa
            non libero molestie dapibus. Aliquam imperdiet quis nisl sed congue.
            Etiam vel ante vitae tortor tempus mollis nec at metus. Vestibulum
            ut eros consequat, mattis metus porttitor, consectetur purus. Sed
            quis vehicula mauris, id ullamcorper nisi. Morbi accumsan tortor
            quis erat scelerisque, id tempus purus pellentesque. Vivamus
            porttitor lacus a ex aliquet, nec fringilla est hendrerit. Nullam
            malesuada vitae nisi ut egestas. Aenean tempus magna sollicitudin,
            porta mi et, imperdiet nunc.
          </p>
        </div>

        <div className="categories">
          <h6>Categories</h6>
          <ul className="footer-links">
            <li>
              <Link to="/Adventure">Adventure</Link>
            </li>
            <li>
              <Link to="/Drama">Drama</Link>
            </li>
            <li>
              {" "}
              <Link to="/Lifestyle">Lifestyle</Link>
            </li>
            <li>
              {" "}
              <Link to="/Horror">Horror</Link>
            </li>
          </ul>
        </div>

        <div className="quickLinks">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/Cart">Cart</Link>
            </li>
            <li>
              {" "}
              <Link to="/LogIn">Log In</Link>
            </li>
            <li>
              {" "}
              <Link to="/Horror">Sign up</Link>
            </li>
          </ul>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default footer;
