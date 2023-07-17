import { Navigation } from '../navigation/Navigation';
import { Footer } from '../Footer/Footer';
import './DefaultLayout.css';

export const DefaultLayout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <Navigation className="navigation" />
      </header>
      <main className="main">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};
