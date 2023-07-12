import { getRecipe } from '../components/contentful/recipes';
import { DefaultLayout } from '../components/layouts/DefaultLayout';

export const Home = () => {
  getRecipe();
  return (
    <DefaultLayout>
      <h1>Home</h1>
    </DefaultLayout>
  );
};
