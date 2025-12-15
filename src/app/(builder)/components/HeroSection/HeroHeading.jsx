"use client";
import cn from "@/utils/cn";

export default function HeroHeading({ id, title, className, tag }) {
  const Tag = tag; // dynamic tag
  return ( <Tag id={id} className={cn( "text-center font-integralCF text-3xl max-xl:leading-8 xl:text-5xl font-black", className )}>
            {title}
          </Tag> );
}
