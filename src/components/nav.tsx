import React from "react";
import DataItem from "./content-type";

const Nav: React.FC<{ Content: DataItem }> = ({ Content }) => {
  return (
    <nav className="fixed w-full z-10 pt-3 pb-3 invisible sm:visible md:visible lg:visible xl:visible 2xl:visible content-center backdrop-blur-sm bg-nav-bg ">
      <div className="flex justify-end mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex-shrink-0 font-bold text-3xl text-nav-neutral"
        ></div>
        <div className="flex space-x-1 header-buttons mr-10 text-lg">
          {Content.menu.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-transparent  rounded-full px-6 py-2 font-medium inline-block text-center"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
