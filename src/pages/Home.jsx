
import { SubscribeInput } from "../Subscribe/SubscribeInput";
import { getRecipe } from "../components/contentful/recipes";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { Hero } from '../components/Hero/Hero';
// import Card from '../components/card/Card';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import Workshop from '../components/workshop/Workshop.jsx';


export const Home = () => {
  return (
 <DefaultLayout>
      <h1>Home</h1>
      <Hero />
      <Workshop />
 <SubscribeInput />
    </DefaultLayout>
  );
};
