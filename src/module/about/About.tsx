import { LayoutContainer } from "components/layout";
import React from "react";

const About = () => {
  return (
    <section className="about pt-40 pb-[120px] bg-secondary">
      <LayoutContainer>
        <div className="flex flex-col lg:flex-row items-center jusity-between  text-primary gap-x-[238px] mb-[72px] lg:mb-28">
          <h2 className="text-5xl lg:text-7xl text-left mb-5 lg:mb-0">
            Our remember-able stories
          </h2>
          <p className="text-left text-lg md:text-2xl font-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
            mauris etiam faucibus laoreet vestibulum pretium tellus nam. Gravida
            aenean orci, facilisis senectus.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-end jusity-between gap-[60px] lg:gap-[140px]">
          <img
            srcSet="./assets/images/img-3.png 2x"
            className="max-w-[616px]"
          />
          <div className="flex flex-col items-center gap-y-10">
            <img srcSet="./assets/images/img-4.png 2x" className="mt-auto" />
            <img
              srcSet="./assets/images/headline-3.png 2x"
              className="w-full max-w-[407px]"
            />
            <p className="text-center lg:text-left text-4xl md:text-[52px] md:leading-[61px] font-primary text-primary mx-auto">
              We don't renovate space, we transform them
            </p>
          </div>
        </div>
      </LayoutContainer>
      <img srcSet="./assets/images/line-2.png 2x" className="mt-[150px]" />
    </section>
  );
};

export default About;
