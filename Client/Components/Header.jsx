"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Wrapper from "./Wrapper";
import Menu from "./Menu";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import { fetchDataFromApi } from "@/utils/api";

const Header = () => {
  const [mobileMenu, setmobileMenu] = useState(false);
  const [showCatMenu, setshowCatMenu] = useState(false);
  const [show, setshow] = useState("translate-y-0");
  const [lastScrolly, setlastScrolly] = useState(0);
  const [categories, setcategories] = useState(null);

  // Given style to Navavar
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrolly && !mobileMenu) {
        setshow("-translate-y-[80px]");
      } else {
        setshow("shadow-md");
      }
    } else {
      setshow("translate-y-0");
    }
    setlastScrolly(window.scrollY);
  };

  useEffect(
    () => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    },
    [lastScrolly]
  );

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setcategories(data);
  };
  //--------------------

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        {/* Logo-Section */}
        <Link href={"/"}>
          <img
            src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png"
            className="w-[40px] md:w-[60px]"
          />
        </Link>

        {/* Navbar Menu-Section */}
        <Menu
          showCatMenu={showCatMenu}
          setshowCatMenu={setshowCatMenu}
          categories={categories}
        />

        {/* Mobile Menu */}
        {mobileMenu &&
          <MenuMobile
            showCatMenu={showCatMenu}
            setshowCatMenu={setshowCatMenu}
            setmobileMenu={setmobileMenu}
            categories={categories}
          />}

        {/* Extra-Section */}
        <div className="flex items-center gap-2 text-black">
          {/* Heart Icon */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[14px] md:text-[26px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>

          {/* Cart Icon */}
          <Link href={"/InsideCart"}>
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12] flex justify-center items-center px-[2px] md:px-[5px]">
                5
              </div>
            </div>
          </Link>

          {/* Humber Menu */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2 md:hidden">
            {mobileMenu
              ? <VscChromeClose
                  className="text-[16px]"
                  onClick={() => {
                    setmobileMenu(false);
                  }}
                />
              : <BiMenuAltRight
                  className="text-[20px]"
                  onClick={() => {
                    setmobileMenu(true);
                  }}
                />}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
