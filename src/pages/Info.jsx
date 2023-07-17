import { DefaultLayout } from '../components/layouts/DefaultLayout';
import About from '../components/infosection/About';

export const Info = () => {
  return (
    <DefaultLayout>
      <h1>Info</h1>
      <About />
    </DefaultLayout>
  );
};
