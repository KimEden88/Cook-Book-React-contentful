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
      <NavLink
        to={webPaths.recipe}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Recipe
      </NavLink>
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
