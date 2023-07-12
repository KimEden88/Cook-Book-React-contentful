import { Hero } from '../components/Hero/Hero';
import { getRecipe } from '../components/contentful/recipes';
import { DefaultLayout } from '../components/layouts/DefaultLayout';

export const Home = () => {
  getRecipe();
  return (
    <DefaultLayout>
      <Hero />
    </DefaultLayout>
  );
};
