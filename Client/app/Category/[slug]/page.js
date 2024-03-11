"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "@/Components/Wrapper";
import ProductCards from "@/Components/ProductCards";
import { fetchDataFromApi } from "@/utils/api";

const Category = () => {
  // ----------------------
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setData(data);
    console.log(data);
  };
  // -----------------

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
