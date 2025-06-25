import Container from "@/shared/ui/Container";
import Cart from "@/widgets/Cart";
import Header from "@/widgets/Header";
import ProductsWrapper from "@/widgets/Products/ProductsWrapper";
import TestimonialsWrapper from "@/widgets/Testimonials/TestimonialsWrapper";

export default function Home() {
  return (
    <Container>
      <Header />
      <TestimonialsWrapper />
      <Cart />
      <ProductsWrapper />
    </Container>
  );
}
