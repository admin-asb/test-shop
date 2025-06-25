import ProductInCartItem from "@/entities/product/ui/ProductInCartItem";
import Button from "@/shared/ui/Button";

export default function Cart() {
  return (
    <form className="w-[708px] mt-[243px] mx-auto pl-[13px] p-2.5 text-primary bg-secondary rounded-[15px]">
      <h2 className="text-4xl">Добавленные товары</h2>
      <ul className="my-5">
        <ProductInCartItem />
        <ProductInCartItem />
      </ul>
      <div className="grid grid-cols-[1.5fr_1fr] gap-[17px] text-foreground text-4xl">
        <input
          type="tel"
          name="phone"
          className="py-3 bg-background rounded-[15px]"
        />
        <Button type="submit">заказать</Button>
      </div>
    </form>
  );
}
