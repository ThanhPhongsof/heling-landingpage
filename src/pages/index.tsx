import { Layout } from "components/layout";
import { About } from "module/about";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <About></About>
      </Layout>
    </>
  );
};

export default Home;
