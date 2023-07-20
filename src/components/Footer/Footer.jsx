import '../Footer/footer.css';

function Footer() {
  return (
    <footer>
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
      <img
        className="dogimg"
        src="src/components/Footer/dog.png"
        alt="My Image"
      />
    </footer>
  );
}

export { Footer };
