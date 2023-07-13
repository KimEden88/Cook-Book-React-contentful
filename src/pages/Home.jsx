import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { Hero } from '../components/Hero/Hero';
// import Card from '../components/card/Card';
import { Hero } from '../components/Hero/Hero';
import Workshop from '../components/workshop/Workshop.jsx';
import { RecipeCard } from '../components/recipeCard/RecipeCard';
import { SubscribeInput } from '../components/Subscribe/SubscribeInput';
import { getRecipe } from '../components/contentful/recipes';

export const Home = () => {
  return (
    <DefaultLayout>
      <h1>Home</h1>
      <Hero />
      <Workshop />
      <SubscribeInput />

      <RecipeCard />
    </DefaultLayout>
  );
};
