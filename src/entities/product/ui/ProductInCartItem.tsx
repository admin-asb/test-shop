"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

export default function ProductInCartItem() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <>
      {cartItems.map((item) => (
        <li
          key={item.id}
          className="w-[400px] grid grid-cols-[2fr_1fr_1fr] text-2xl"
        >
          <div>{item.title}</div>
          <div>x{item.quantity}</div>
          <div>{+item.price * item.quantity}₽</div>
        </li>
      ))}
    </>
  );
}
