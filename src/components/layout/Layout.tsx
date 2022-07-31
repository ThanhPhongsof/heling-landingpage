import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: any;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
