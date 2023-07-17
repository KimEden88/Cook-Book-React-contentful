import { useParams } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { client } from '../components/contentful/client';
import { useEffect, useState } from 'react';
import './Recipe.css';

export const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState('');

  useEffect(() => {
    client
      .getEntry(id)
      .then((entry) => setRecipe(entry))
      .catch(console.error);
  }, [id]);

  console.log(recipe);

  return (
    recipe && (
      <DefaultLayout>
        <div className="outerRecipe">
          <h1>{recipe.fields.title}</h1>
          <div className="upperRecipe">
            <p>{recipe.fields.description}</p>
            <img
              src={`https:` + recipe.fields.image.fields.file.url}
              alt={recipe.fields.title}
            />
          </div>
          <div className="lowerRecipe">
            {recipe.fields.ingredients.map((item) => {
              return (
                <div key={recipe.fields.title[item]}>
                  <label className="container">
                    {item}
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              );
            })}
            <p>{recipe.fields.process}</p>
          </div>
        </div>
      </DefaultLayout>
    )
  );
};
