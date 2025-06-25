"use client";

import TestimonialCard from "@/shared/ui/TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import xss from "xss";
import { Pagination } from "swiper/modules";

export interface Review {
  id: number;
  text: string;
}

interface TestimonialsSwiperProps {
  reviews: Review[];
}

export default function TestimonialsSwiper({
  reviews,
}: TestimonialsSwiperProps) {
  return (
    <section className="sm:mt-97 mt-105">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map(({ id, text }) => {
          const safeHTML = xss(text);

          return (
            <SwiperSlide className="w-468" key={id}>
              <TestimonialCard>
                <div
                  className="flex flex-col gap-4 text-2xl"
                  dangerouslySetInnerHTML={{ __html: safeHTML }}
                />
              </TestimonialCard>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
