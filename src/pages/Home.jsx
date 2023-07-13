import { SubscribeInput } from "../components/Subscribe/SubscribeInput";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { Hero } from "../components/Hero/Hero";
import Workshop from "../components/workshop/Workshop.jsx";
import Fetchrecipes from "../components/fetchRecipes/Fetchrecipes";

export const Home = () => {
  const getRecipe = () => {
    console.log("Fetching recipe...");
  };

  getRecipe();

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <Hero />
      <Workshop />
      <SubscribeInput />
      <Fetchrecipes />
    </DefaultLayout>
  );
};
