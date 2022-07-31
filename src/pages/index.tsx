import { Layout } from "components/layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <h1 className="text-3xl font-bold underline text-red-500">
          Hello world!
        </h1>
      </Layout>
    </>
  );
};

export default Home;
