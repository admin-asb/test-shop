import { Product } from "@/entities/product/model/product";
import { Review } from "@/widgets/Testimonials/TestimonialsSwiper";

const BASE_URL = "http://o-complex.com:1337";

export async function fetchReviews(): Promise<Review[]> {
  const res = await fetch(`${BASE_URL}/reviews`);

  if (!res.ok) throw new Error("Ошибка при загрузке отзывов");

  const data: Review[] = await res.json();
  return data;
}

export async function fetchProducts(): Promise<{ items: Product[] }> {
  const res = await fetch(
    `${BASE_URL}/products?page=1&page_size=20`
  );
  if (!res.ok) throw new Error("Ошибка загрузки продуктов");
  return res.json();
}
