import Link from "next/link";
import React from "react";
import Image from "next/image";
import { getDiscountedPricePercentage } from "@/utils/helper";
const ProductCard = ({ data: { attributes: p, id } }) => {
  return (
    <div className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
      <Link href={`/Product/${p.slug}`}>
        <Image
          width={500}
          height={500}
          src={p.thumbnali.data.attributes.url}
          alt={p.name}
        />
        <div className="p-4 text-black/[0.9]">
          <h2 className="text-lg font-medium">
            {p.name}
          </h2>
          <div className="flex items-center text-black/[0.5]">
            <p className="mr-2 text-lg font-semibold">
              &#8377;{p.price}
            </p>

            {p.original_price &&
              <div className="flex">
                <p className="text-base font-medium line-through">
                  &#8377;{p.original_price}
                </p>
                <p className="ml-20 text-base font-medium text-green-500">
                  {getDiscountedPricePercentage(p.original_price, p.price)}
                </p>
                % off
              </div>}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
