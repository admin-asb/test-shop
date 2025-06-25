import PhoneInput from "@/entities/phone-input";
import ProductInCartItem from "@/entities/product/ui/ProductInCartItem";
import Button from "@/shared/ui/Button";

export default function Cart() {
  return (
    <form className="w-708 max-lg:w-468 max-md:w-400 max-sm:w-full mt-243 mx-auto pl-13 p-2.5 text-primary bg-secondary rounded-15">
      <h2 className="text-4xl max-lg:text-3xl max-md:text-2xl">
        Добавленные товары
      </h2>
      <ul className="my-5">
        <ProductInCartItem />
      </ul>
      <div className="flex gap-17 text-foreground text-4xl">
        <PhoneInput />
        <Button type="submit">заказать</Button>
      </div>
    </form>
  );
}
