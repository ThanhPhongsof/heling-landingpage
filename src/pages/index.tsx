import { Layout } from "components/layout";
import { About } from "module/about";
import { Blogs } from "module/blogs";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <main>
          <About></About>
          <Blogs></Blogs>
        </main>
      </Layout>
    </>
  );
};

export default Home;
