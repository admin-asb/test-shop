"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export default function ProductInCartItem() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(cartItems);

  return (
    <>
      {cartItems.map((item) => (
        <li
          key={item.id}
          className="w-400 max-lg:w-auto grid grid-2-1-1 text-2xl max-lg:text-xl max-md:text-lg"
        >
          <div>{item.title}</div>
          <div>x{item.quantity}</div>
          <div>{+item.price * item.quantity}&nbsp;₽</div>
        </li>
      ))}
    </>
  );
}
