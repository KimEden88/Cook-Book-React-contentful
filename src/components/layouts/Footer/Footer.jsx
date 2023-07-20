import "./footer.css";
import dog from "./dog.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2023 Our Collective Kitchen - All rights reserved.</p>

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
          </ul>
        </nav>
      </div>
      <img className="dogimg" src={dog} alt="My Image" />
    </footer>
  );
}

export { Footer };
