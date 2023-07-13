import { SubscribeInput } from "../components/Subscribe/SubscribeInput";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { Hero } from "../components/Hero/Hero";
import { getRecipe } from "../components/contentful/recipes";
import Workshop from "../components/workshop/Workshop.jsx";

export const Home = () => {
  getRecipe();
  return (
    <DefaultLayout>
      <h1>Home</h1>
      <Hero />
      <Workshop />
      <SubscribeInput />
    </DefaultLayout>
  );
};
