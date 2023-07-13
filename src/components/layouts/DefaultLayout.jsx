import { Navigation } from "../navigation/Navigation";
import "./DefaultLayout.css";
import PropTypes from "prop-types";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <Navigation className="navigation" />
      </header>
      <main className="main">{children}</main>

      <footer>This is my footer</footer>
    </div>
  );
};
DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
