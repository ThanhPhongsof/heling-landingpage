import { Layout } from "components/layout";
import { About } from "module/about";
import { Blogs } from "module/blogs";
import { Designers } from "module/designers";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <main>
          <About></About>
          <Blogs></Blogs>
          <Designers></Designers>
        </main>
      </Layout>
    </>
  );
};

export default Home;
