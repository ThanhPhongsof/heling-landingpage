import React from "react";

type LayoutContainerProps = {
  children: any;
};

const LayoutContainer = ({ children }: LayoutContainerProps) => {
  return (
    <div className="max-w-[1024px] xl:max-w-[1300px] mx-auto px-4">
      {children}
    </div>
  );
};

export default LayoutContainer;
