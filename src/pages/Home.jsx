import { Hero } from '../components/Hero/Hero';
import { getRecipe } from '../components/contentful/recipes';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import Workshop from '../components/workshop/Workshop.jsx';

export const Home = () => {
  getRecipe();
  return (
    <DefaultLayout>
      <h1>Home</h1>
      <Hero />
      <Workshop />
    </DefaultLayout>
  );
};
