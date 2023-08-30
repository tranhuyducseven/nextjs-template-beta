import { DefaultLayout } from "@layouts/DefaultLayout";
import dynamic from "next/dynamic";

const AppScreen = dynamic(
  () => import("@screens/app").then((data) => data.AppScreen),
  {
    ssr: false,
    loading: () => (
      <main className="w-screen h-screen flex items-center justify-center">
        Loading...
      </main>
    ),
  }
);

const Home: IPageComponent = () => <AppScreen />;

export default Home;
