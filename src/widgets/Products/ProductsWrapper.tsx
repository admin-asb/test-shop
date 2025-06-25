import { fetchProducts } from "@/lib/api";
import ProductsList from "./ProductsList";

export default async function ProductsWrapper() {
  const data = await fetchProducts();

  return <ProductsList items={data.items} />;
}
