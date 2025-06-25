import { fetchReviews } from "@/lib/api";
import TestimonialsSwiper, { Review } from "./TestimonialsSwiper";

export default async function TestimonialsWrapper() {
  const data: Review[] = await fetchReviews();
  console.log(data);

  return <TestimonialsSwiper reviews={data} />;
}
