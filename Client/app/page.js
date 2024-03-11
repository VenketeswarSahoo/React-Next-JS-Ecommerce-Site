// "use client";
// import ProductCards from "@/Components/ProductCards";
// import React, { useEffect, useState } from "react";
// import { fetchDataFromApi } from "@/utils/api";
// import HeroSection from "@/Components/HeroSection";

// const page = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     const { data } = await fetchDataFromApi("/api/products?populate=*");
//     setData(data);
//   };

//   return (
//     <div>
//       <HeroSection/>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-14 my-14 px-5 md:px-0">
//         {data?.map((product) => {
//           return <div>
//           <ProductCards key={product?.id} data={product} />
//           </div>
//         })}
//       </div>
//     </div>
//   );
// };

// export default page;

import React from "react";

const page = () => {
  return (
    <div className="lg:text-pink-500 md:text-orange-700 sm:text-green-600">
      page
    </div>
  );
};

export default page;
