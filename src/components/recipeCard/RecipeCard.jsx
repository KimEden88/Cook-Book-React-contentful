import './RecipeCard.css';
import { client } from '../contentful/client';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const RecipeCard = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    client
      .getEntries()
      .then((entries) => setRecipes(entries))
      .catch(console.error);
  }, []);

  return (
    <div id="recipe">
      {recipes &&
        recipes.items.map((item) => (
          <div key={item.sys.id}>
            <h2>{item.fields.title}</h2>
            <img
              src={`https:` + item.fields.image.fields.file.url}
              className="App-logo"
              alt="logo"
            />
            <p className="cardDesription">{item.fields.description}</p>
            <Link to={`/recipe/${item.sys.id}`}>Go to Recipe</Link>
          </div>
        ))}
    </div>
  );
};
