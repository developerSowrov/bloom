"use client";

// import Section from "./Section";
import HeroHeading from "./HeroHeading";
// import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import Section from "../Section";

import { bannerImg, starIcon } from "@/public/img";

export default function HeroSlide({ data }) {
  const bg = data.background;

  return (
    <Section parentClassName="bg-[#f3f1f1] relative" sectionClassName="flex h-auto flex-col md:flex-row">
      {/* LEFT */}
      <div className="mt-9 flex flex-col items-start gap-6 md:w-1/2 marker-class">
        <HeroHeading
          tag="h2"
          title="FIND CLOTHES THAT MATCHES YOUR STYLE"
          className="text-left text-4xl xl:text-7xl"
        />

        <p className="max-xl:leading-5 xl:w-11/12">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and
          cater to your sense of style.
        </p>

        <Link href="products" className="max-xl:w-full">
          <Button bgColor="black" >
            Shop New
          </Button>
        </Link>

        <div className="mb-16 mt-9 md:mt-0 lg:mt-9 grid grid-cols-2 gap-3 child:grid child:gap-1 max-xl:mx-auto text-center md:text-start md:flex md:grid-cols-3 md:gap-2 xl:gap-5 @media(min-width:1280px):child:px-6">
          <div className="flex flex-col max-xl:border-r md:border-hidden pr-5 md:pr-0 md:pl-0 text-center">
            <span className="text-2xl font-extrabold xl:text-4xl xl:font-bold">200+</span>
            <span className="max-xl:text-xs">International Brands</span>
          </div>

          <div className="flex flex-col md:border-x border-gray-300 px-6 md:px-2 lg:px-6 text-center">
            <span className="text-2xl font-extrabold xl:text-4xl xl:font-bold">2,000+</span>
            <span className="max-xl:text-xs">High-Quality Products</span>
          </div>

          <div className="flex flex-col max-xl:col-span-2 max-xl:justify-center text-center">
            <span className="text-2xl font-extrabold xl:text-4xl xl:font-bold">30,000+</span>
            <span className="max-xl:text-xs">Happy Customers</span>
          </div>
        </div>

      </div>

      {/* RIGHT */}
      <div className="relative flex justify-end max-xl:-mt-10 md:mt-0 md:w-1/2">

        {/* BANNER */}
        <Image
          src={bannerImg}
          alt="Banner"
          width={999}
          height={999}
          draggable={false}
          className="-bottom-[9.5px] xl:absolute xl:w-[600px] xl:h-[600px] object-contain"
        />

        {/* STAR ICONS */}
        <Image
          src={starIcon}
          alt="star"
          width={100}
          height={100}
          draggable={false}
          className="absolute top-7 aspect-square max-xl:right-4 max-xl:w-16 max-xl:h-16 xl:top-24"
        />

        <Image
          src={starIcon}
          alt="star"
          width={50}
          height={50}
          draggable={false}
          className="absolute left-6 top-28 aspect-square max-xl:w-9 max-xl:h-9 xl:left-20 xl:top-72"
        />
      </div>
    </Section>
  )

  return (
    <Section
      parentClassName="relative"
      sectionClassName="flex h-auto flex-col md:flex-row"
      style={{
                background:
                            bg.type === "color"
                                ? bg.color
                                : bg.type === "image"
                                ? `url(${bg.image.url}) center/cover no-repeat`
                                : undefined,
            }}
    >
      {/* VIDEO BACKGROUND */}
      {bg.type === "video" && (
        <video
          src={bg.video.url}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* OVERLAY */}
      {bg.overlay?.enabled && (
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: bg.overlay.color,
            opacity: bg.overlay.opacity,
          }}
        ></div>
      )}

      {/* LEFT SIDE */}
      <div className="relative z-10 mt-9 flex flex-col items-start gap-6 md:w-1/2">
        <HeroHeading
          tag="h2"
          title={entry.title}
          className="text-left text-4xl xl:text-7xl"
        />

        <p className="max-xl:leading-5 xl:w-11/12">{entry.description}</p>

        {entry.cta?.enabled && entry.cta.entries?.length > 0 && (
          <Link href={entry.cta.entries[0].url} className="max-xl:w-full">
            <Button bgColor="black">{entry.cta.entries[0].label}</Button>
          </Link>
        )}

        {/* STATIC COUNTERS */}
        <div className="mb-16 mt-9 grid grid-cols-2 gap-3 md:flex md:grid-cols-3 md:gap-2 xl:gap-5">
          <div className="flex flex-col text-center">
            <span className="text-2xl font-extrabold xl:text-4xl">200+</span>
            <span className="max-xl:text-xs">International Brands</span>
          </div>

          <div className="flex flex-col text-center md:border-x border-gray-300 px-6">
            <span className="text-2xl font-extrabold xl:text-4xl">2,000+</span>
            <span className="max-xl:text-xs">High-Quality Products</span>
          </div>

          <div className="flex flex-col text-center">
            <span className="text-2xl font-extrabold xl:text-4xl">30,000+</span>
            <span className="max-xl:text-xs">Happy Customers</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative z-10 flex justify-end max-xl:-mt-10 md:mt-0 md:w-1/2">

        {/* IMAGE BACKGROUND MODE */}
        {bg.type === "image" && (
          <Image
            src={bg.image.url}
            alt={bg.image.alt}
            width={999}
            height={999}
            draggable={false}
            className="-bottom-[9.5px] xl:absolute xl:w-[600px] xl:h-[600px] object-contain"
          />
        )}

        {/* YOUR STAR ICONS (STATIC) */}
        <Image
          src="/img/star.png"
          alt="star"
          width={100}
          height={100}
          className="absolute top-7 max-xl:right-4 xl:top-24"
        />

        <Image
          src="/img/star.png"
          alt="star"
          width={50}
          height={50}
          className="absolute left-6 top-28 xl:left-20 xl:top-72"
        />
      </div>
    </Section>
  );
}
