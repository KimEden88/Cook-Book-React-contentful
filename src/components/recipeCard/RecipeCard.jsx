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
    <div>
      {recipes &&
        recipes.items.map((item) => (
          <div key={item.fields.id}>
            <h2>{item.fields.title}</h2>
            <img
              src={item.fields.image}
              className="App-logo"
              alt="logo"
            />
            <p className="cardDesription">{item.fields.description}</p>
          </div>
        ))}
    </div>
  );
};
