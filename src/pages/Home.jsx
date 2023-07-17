import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { Hero } from "../components/Hero/Hero";
import Workshop from "../components/workshop/Workshop.jsx";
import { RecipeCard } from "../components/recipeCard/RecipeCard";
import { SubscribeInput } from "../components/Subscribe/SubscribeInput";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  return (
    <DefaultLayout>
      <Hero />
      <Workshop />
      <SubscribeInput />

      <RecipeCard />
      <Footer />
    </DefaultLayout>
  );
};
