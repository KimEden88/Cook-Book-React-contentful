import './RecipeCard.css';
import { client } from '../contentful/client';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const RecipeCard = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    client
      .getEntries()
      .then((entries) => setRecipes(entries.items))
      .catch(console.error);
  }, []);

  return (
    <div>
      {recipes &&
        recipes.map((item) => (
          <div key={item.fields.id}>
            <h2>{item.fields.title}</h2>
            <img
              src={item.fields.image}
              className="App-logo"
              alt="logo"
            />
            <p className="cardDescription">{item.fields.description}</p>
            <Link to="/Recipe">
              <button>To Recipe</button>
            </Link>
          </div>
        ))}
    </div>
  );
};
