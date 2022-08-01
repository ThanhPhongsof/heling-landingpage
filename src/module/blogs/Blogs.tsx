import { LayoutContainer } from "components/layout";
import React from "react";

const Blogs = () => {
  return (
    <section className="blogs  pt-20 md:pt-40 pb-[120px] bg-secondary">
      <LayoutContainer>
        <div className="flex items-center  text-primary  gap-x-[73px] lg:gap-x-[238px] mb-[72px] lg:mb-28 leading-4">
          <h2 className="text-[32px] leading-[28px] lg:text-7xl text-left mb-5 lg:mb-0 lg:whitespace-nowrap">
            Our latest projects
          </h2>
          <a href="#" className="text-2xl underline whitespace-nowrap">
            All Projects
          </a>
        </div>
      </LayoutContainer>
      <img srcSet="./assets/images/img-5.png 2x" className="w-full" />
    </section>
  );
};

export default Blogs;
