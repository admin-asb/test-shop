"use client";
import Image from "next/image";
import { Product } from "../model/product";
import { useState } from "react";
import Button from "@/shared/ui/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";

interface ProductCardProps {
  id: Product["id"];
  description: Product["description"];
  title: Product["title"];
  image: Product["image_url"];
  price: Product["price"];
}

export default function ProductCard({
  id,
  description,
  title,
  image,
  price,
}: ProductCardProps) {
  const [imgSrc, setImgSrc] = useState(image);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        description,
        image_url: imgSrc,
        price,
        quantity: 1,
      })
    );
  };

  return (
    <li className="p-2.5 bg-secondary text-primary rounded-[15px]">
      <div className="w-full h-[300px] relative">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="rounded-[15px] object-cover"
          onError={() => setImgSrc("https://picsum.photos/400/300?random=2")}
        />
      </div>
      <h3 className="h-[120px] text-4xl text-center">{title}</h3>
      <p className="h-[240px] text-2xl">{description}</p>
      <div className="text-4xl text-center mb-[33px]">{price} ₽</div>
      <Button onClick={handleAddToCart}>купить</Button>
    </li>
  );
}
