import { Layout } from "components/layout";
import { About } from "module/about";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <main>
          <About></About>
        </main>
      </Layout>
    </>
  );
};

export default Home;
