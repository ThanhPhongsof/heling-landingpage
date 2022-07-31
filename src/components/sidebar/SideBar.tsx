import Link from "next/link";
import React, { useEffect } from "react";
import { SideBarModel } from "services/models";

type SideBarProps = {
  sideBarLinks: Array<SideBarModel>;
  showSideBar: boolean;
};

const SideBar = React.forwardRef(
  (
    { sideBarLinks, showSideBar }: SideBarProps,
    ref: React.LegacyRef<HTMLUListElement>
  ) => {
    const expandClass = "is-expand";

    useEffect(() => {
      const sideBar = document.querySelector(".header-sidebar");
      if (showSideBar) {
        sideBar?.classList.add(expandClass);
      } else {
        sideBar?.classList.remove(expandClass);
      }
    }, [showSideBar]);

    return (
      <ul className="header-sidebar" ref={ref}>
        {sideBarLinks?.map((item: SideBarModel) => (
          <li
            key={item.title}
            className="text-primary md:text-whiteLight md:text-opacity-60 hover:text-secondary"
          >
            <Link href={item.url}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
);

export default SideBar;
