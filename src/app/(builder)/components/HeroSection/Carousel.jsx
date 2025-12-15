"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import Image from "next/image";
// import Link from "next/link";

// import Section from "./Section";
// import HeroHeading from "./HeroHeading";
// import Button from "./Button";
import HeroSlide from "./Slider";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSectionCarousel({ data }) {
  if (!data?.entries?.length) return null;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="w-full"
    >
      {data.entries.map((item, idx) => (
        <SwiperSlide key={idx}>
          <HeroSlide data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
