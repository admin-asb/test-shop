"use client";
import { Product } from "@/entities/product/model/product";
import ProductCard from "@/entities/product/ui/ProductCard";
import { useState } from "react";

export default function ProductsList({ items }: { items: Product[] }) {
  const step = 6;
  const [visibleCount, setVisibleCount] = useState(step);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + step);
  };

  const visibleItems = items.slice(0, visibleCount);

  return (
    <div className="w-full max-w-screen-lg mx-auto mt-[47px] mb-[100px]">
      <ul className="grid grid-cols-3 gap-[35px]">
        {visibleItems.map((item) => (
          <ProductCard
            key={item.id}
            id={item.id}
            description={item.description}
            image={item.image_url}
            title={item.title}
            price={item.price}
          />
        ))}
      </ul>

      {visibleCount < items.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 text-2xl border-none hover:text-gray transition cursor-pointer"
          >
            Загрузить ещё
          </button>
        </div>
      )}
    </div>
  );
}
