"use client";

import { toast } from "react-toastify";
// COMPONENT
import Link from "next/link";
import { Section, ProductCard, Button, ProductCardSkeleton, ScrollById, HeroHeading } from "@/components";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// GET DATA FROM SERVER
import GetVitrineProducts from "@/services/reactQuery/vitrineProducts";
import { useState } from "react";

function Vitrine({ title, sortBy, order, buttonHref, productShowCount, id }) {
   const {
      data: products,
      isLoading,
      isError,
      error,
   } = GetVitrineProducts({ limit: productShowCount, sortBy: sortBy === "createdAt" ? "createdAt" : "saleCount", order });

   // Show toast message when error to fetch data from server
   isError && toast.error(error.message);
   console.log(error)

   return (
      <Section parentClassName="my-16" sectionClassName="flex flex-col items-center gap-14">
         <ScrollById id={id} />

         <HeroHeading tag="h2" title={title} className="" />

         {isLoading || isError ? (
            //  Skeleton loading
            <div className="vitrineProductsSkeleton">
               {Array(3)
                  .fill(0)
                  .map((_, index) => (
                     <ProductCardSkeleton key={index} />
                  ))}
            </div>
         ) : (
            <Swiper spaceBetween={15} slidesPerView={"auto"} className="w-full">
               {products?.map((item) => (
                  <SwiperSlide key={item.id} className="w-[320px]!">
                     <ProductCard {...item} />
                  </SwiperSlide>
               ))}
            </Swiper>
         )}

         <Link href={buttonHref} className="max-xl:w-full">
            <Button bgColor="white" borderColor="border-gray-200" py="py-3" className="max-xl:w-full" onClick={() => {}}>
               View All
            </Button>
         </Link>
      </Section>
   );
}

export default Vitrine;
