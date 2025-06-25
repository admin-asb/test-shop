"use client";
import Image from "next/image";
import { Product } from "../model/product";
import { useState } from "react";
import Button from "@/shared/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/features/cart/cartSlice";
import { RootState } from "@/app/store";

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
  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.id === id)
  );

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

  const handleIncrease = () => {
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

  const handleDecrease = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <li className="p-2.5 bg-secondary text-primary rounded-15">
      <div className="w-full h-300 max-lg:h-240 relative">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="rounded-15 object-cover"
          onError={() => setImgSrc("https://picsum.photos/400/300?random=2")}
        />
      </div>
      <h3 className="h-120 max-lg:h-100 max-sm:h-14 text-4xl max-lg:text-3xl max-md:text-2xl text-center">
        {title}
      </h3>
      <p className="h-240 max-lg:h-120 max-sm:h-14 text-2xl max-lg:text-xl max-md:text-base">
        {description}
      </p>
      <div className="text-4xl max-lg:text-3xl max-md:text-2xl text-center mb-33">
        {price} ₽
      </div>

      {cartItem ? (
        <div className="flex items-center justify-center gap-4">
          <Button className="flex-1" onClick={handleDecrease}>
            −
          </Button>
          <Button className="flex-[2]">{cartItem.quantity}</Button>
          <Button className="flex-1" onClick={handleIncrease}>
            +
          </Button>
        </div>
      ) : (
        <Button onClick={handleAddToCart}>купить</Button>
      )}
    </li>
  );
}
