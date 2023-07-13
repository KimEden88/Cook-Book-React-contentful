import { DefaultLayout } from "../components/layouts/DefaultLayout";
import Sidebar from "../components/sidebar/Sidebar";

export const Recipe = () => {
  return (
    <DefaultLayout>
      <div>
        <h1>Recipe</h1>
        <Sidebar />
      </div>
    </DefaultLayout>
  );
};
