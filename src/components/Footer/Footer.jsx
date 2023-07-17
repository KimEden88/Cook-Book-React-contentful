import React from "react";
import "../Footer/footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>
              &copy; 2023 Your Cookbook Name Here &mdash; All rights reserved.
            </p>
          </div>
          <div className="linkContainer">
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Contact us!</a>
                </li>
                <img
                  className="dogimg"
                  src="src/components/Footer/dog.png"
                  alt="My Image"
                />
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
