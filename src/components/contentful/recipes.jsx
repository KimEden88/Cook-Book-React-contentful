import { client } from './client';

export const getRecipe = async () => {
  client
    .getEntries()
    .then((entry) => console.log(entry))
    .catch(console.error);
};
