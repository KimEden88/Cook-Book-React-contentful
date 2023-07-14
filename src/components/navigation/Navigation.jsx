import { NavLink } from 'react-router-dom';
import { webPaths } from '../../routes/webPaths';
import './Navigation.css';

export const Navigation = () => {
  return (
    <div className="nav">
      <NavLink
        to={webPaths.home}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Home
      </NavLink>
      <a href="#recipe">Recipes</a>
      <NavLink
        to={webPaths.info}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Info
      </NavLink>
    </div>
  );
};
