import { createBrowserRouter } from 'react-router-dom';
import { Error } from '../pages/Error';
import { Home } from '../pages/Home';
import { Info } from '../pages/Info';
import { Recipe } from '../pages/Recipe';
import { webPaths } from './webPaths';

export const router = createBrowserRouter([
  {
    path: webPaths.home,
    element: <Home />,
  },
  {
    path: webPaths.recipe,
    element: <Recipe />,
  },
  {
    path: webPaths.info,
    element: <Info />,
  },
  {
    path: '*',
    element: <Error />,
  },
]);
