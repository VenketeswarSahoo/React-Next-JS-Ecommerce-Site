import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { item: "Home", url: "/" },
  { item: "About", url: "/about" },
  { item: "Cateegories", subMenu: true },
  { item: "Contact", url: "/contact" }
];
const subMenuData = [
  { item: "Running Shoes", url: "/" },
  { item: "Football Shoes", url: "/" },
  { item: "Formal Shoes", url: "/" },
  { item: "Party Shoes", url: "/" }
];
const MenuMobile = ({ showCatMenu, setshowCatMenu, setmobileMenu, categories }) => {
  return (
    <div>
      <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
        {data.map((e, i) => {
          return (
            <React.Fragment key={i}>
              {e.subMenu
                ? <li
                    className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                    onClick={() => setshowCatMenu(!showCatMenu)}
                  >
                    <div className="flex justify-between items-center">
                      {e.item}
                      <BsChevronDown />
                    </div>

                    {showCatMenu &&
                      <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4 ">
                        {categories.map(({attributes: c, id}) => {
                          return (
                            <Link
                            key={id}
                            href={`/Category/${c.slug}`}
                              onClick={() => {
                                setshowCatMenu(false);
                                setmobileMenu(false)
                              }}
                            >
                              <li className="py-4 px-8 border-t flex justify-between">
                                {c.name}
                                <span className="opacity-50 text-sm">{`(${c.products.data.length})`}</span>
                              </li>
                            </Link>
                          );
                        })}
                      </ul>}
                  </li>
                : <li className="py-4 px-5 border-b">
                    <Link href={e?.url} onClick={() => setmobileMenu(false)}>
                      {e.item}
                    </Link>
                  </li>}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuMobile;
