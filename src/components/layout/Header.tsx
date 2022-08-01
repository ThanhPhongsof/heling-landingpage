import { IconSideBar } from "components/icon";
import { LogoDefault } from "components/logo";
import { SideBar } from "components/sidebar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useClickOutSide } from "services/hook";
import LayoutContainer from "./LayoutContainer";

const sideBarLinks = [
  { url: "/", title: "Home" },
  { url: "#!", title: "Projects" },
  { url: "#!", title: "Designers" },
  { url: "#!", title: "Articles" },
];

const Header = () => {
  const {
    value: showSideBar,
    setValue: setShowSideBar,
    nodeRef,
  } = useClickOutSide("button");

  return (
    <header className="min-h-[936px]">
      <LayoutContainer>
        <div className="flex items-center md:justify-between pt-11">
          <LogoDefault></LogoDefault>
          <SideBar
            sideBarLinks={sideBarLinks}
            showSideBar={showSideBar}
            ref={nodeRef}
          ></SideBar>
          <Link href="/contact">
            <a className="text-secondary underline text-lg md:text-2xl ml-auto md:ml-0">
              Contact
            </a>
          </Link>
          <button
            className="cursor-pointer inline-block ml-7 md:ml-0 md:hidden"
            onClick={() => setShowSideBar(!showSideBar)}
          >
            <span className="pointer-events-none">
              <IconSideBar></IconSideBar>
            </span>
          </button>
        </div>
      </LayoutContainer>
      <div className="h-2 w-full border border-[#FAFAFA] border-opacity-10 mt-5">
        <div className="h-[1px] w-full border border-[#FAFAFA] border-opacity-30  my-1"></div>
      </div>
      <LayoutContainer>
        <div className="pt-20 md:pt-[102px]">
          <div className="flex flex-col-reverse md:flex-row  gap-8 min-h-[705px]">
            <div className="w-full md:max-w-[470px] 2xl:max-w-[725px]">
              <h1 className="text-whiteLight text-[51px] leading-[63px] tracking-tighter">
                We make
                <span className="block">
                  <span className="hidden md:inline-block md:opcaity-0 md:invisible">
                    We
                  </span>
                  every room
                </span>
                <span className="block">
                  <span className="hidden md:opcaity-0 md:invisible">We</span>a
                  unique shape
                </span>
              </h1>
              <div className="w-full ml-auto mt-11 md:mt-16">
                <picture>
                  <source
                    srcSet="./assets/images/headline-2.png"
                    type="image/webp"
                  />
                  <img
                    className="mb-11"
                    src="./assets/images/headline-2.png"
                    alt="headline-2"
                  />
                </picture>
                <p className="text-whiteBase text-opacity-50 text-xl font-secondary text-left">
                  Lorem ipsum onsectetur adipiscing elit. Blandit mauris etiam
                  faucibus laoreet tellus nam. Gravida solor aenean orci,
                  facilisis senectus.
                </p>
              </div>
              <img
                srcSet="./assets/images/img-2.png 2x"
                className="hidden md:block max-w-[184px] max-h-[232px] translate-x-0 translate-y-[150px]"
              />
            </div>
            <div className="relative">
              <img
                srcSet="./assets/images/img-2.png 2x"
                className="absolute block md:hidden max-w-[150px] max-h-[188px] translate-x-[150%] translate-y-[100%]"
              />
              <img
                srcSet="./assets/images/img-1.png 2x"
                className="f-full pr-8"
              />
            </div>
          </div>
        </div>
      </LayoutContainer>
    </header>
  );
};

export default Header;
