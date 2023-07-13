import './RecipeCard.css';
import { client } from '../contentful/client';
import { useEffect, useState } from 'react';

export const RecipeCard = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    client
      .getEntries()
      .then((entries) => setRecipes(entries))
      .catch(console.error);
  }, []);

  return (
    <>
      {recipes && recipes.items.map((item) => console.log(item.fields.title))}
    </>
  );
};
