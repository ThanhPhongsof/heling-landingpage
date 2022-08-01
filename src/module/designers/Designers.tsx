import { LayoutContainer } from "components/layout";
import React from "react";

const Designers = () => {
  return (
    <section className="designers text-secondary">
      <LayoutContainer>
        <div className="flex flex-col md:flex-row items-end gap-[70px] md:gap-[140px] mt-32 md:mt-40">
          <div className="flex flex-col w-[616px] h-[371px] mt-[155px] mb-[176px]">
            <h1 className="text-5xl leading-[56px] md:text-[70px] md:leading-[70px]">
              Our designers
            </h1>
            <p className="font-secondary text-lg md:text-2xl text-left text-whiteLight text-opacity-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              mauris etiam faucibus laoreet vestibulum
            </p>
            <p className="font-secondary text-lg md:text-2xl text-left text-whiteLight text-opacity-30">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit
              mauris etiam faucibus laoreet vestibulum nam. Gravida aenean orci,
              facilisis senectus.
            </p>
            <a className="underline text-lg md:text-2xl">See All Designers</a>
          </div>
          <img
            srcSet="./assets/images/img-6.png 2x"
            className="object-cover h-[702px] w-[508px]"
          />
        </div>
      </LayoutContainer>
    </section>
  );
};

export default Designers;
