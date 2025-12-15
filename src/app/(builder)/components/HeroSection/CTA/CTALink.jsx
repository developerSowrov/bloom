"use client";
import cn from "@/utils/cn";
import Link from "next/link";

export default function CTALink({ children, className, borderColor, disable = false, url, type = "button", bgColor = "gray", py = "py-4", }) {
  return (
    <Link href={url} type={type}
            className={` ${bgColor === "black" ? "bg-black text-white hover:bg-gray-900" : ""}
                        ${bgColor === "white" ? "bg-white text-black hover:bg-gray-100" : ""}
                        ${bgColor === "gray" ? "bg-grey-50 text-black hover:bg-gray-100" : ""}
                        ${borderColor ? `border ${borderColor}` : ""}
                        ${py ? py : ""}
                        ${disable ? "cursor-not-allowed opacity-80" : ""}
                        ${cn("rounded-full px-16 text-lg font-medium transition-all", className)}
                      `} >
      {children}
    </Link>
  );
}
