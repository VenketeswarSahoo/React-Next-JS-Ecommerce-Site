import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Cateegories", subMenu: true },
  { name: "Contact", url: "/contact" }
];
// const subMenuData = [
//   { item: "Running Shoes", url: "/" },
//   { item: "Football Shoes", url: "/" },
//   { item: "Formal Shoes", url: "/" },
//   { item: "Party Shoes", url: "/" }
// ];
const Menu = ({ showCatMenu, setshowCatMenu, categories }) => {
  return (
    <div>
      <ul className="hidden md:flex items-center gap-8 font-medium text-black">
        {data.map((item) => {
          return (
            <React.Fragment key={item.id}>
              {!!item?.subMenu
                ? <li
                    className="cursor-pointer flex items-center gap-2 relative"
                    onMouseEnter={() => setshowCatMenu(true)}
                    onMouseLeave={() => setshowCatMenu(false)}
                  >
                    {item.name}
                    <BsChevronDown size={14} />

                    {showCatMenu &&
                      <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                        {categories?.map(({attributes: c}) => {
                          return (
                            <Link
                              key={c.id}
                              href={`/Category/${c.slug}`}
                              onClick={() => {
                                setshowCatMenu(false);
                              }}
                            >
                              <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                                {c.name}
                                <span className="opacity-50 text-sm">{`(${c.products.data.length})`}</span>
                              </li>
                            </Link>
                          );
                        })}
                      </ul>}
                  </li>
                : <li className="cursor-pointer">
                    <Link href={"item?.url"}>
                      {item.name}
                    </Link>
                  </li>}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
