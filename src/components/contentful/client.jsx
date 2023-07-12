import * as contentful from 'contentful';

export const client = contentful.createClient({
  space: '9c15i94f7spw',
  environment: 'master', // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESSTOKEN,
});
