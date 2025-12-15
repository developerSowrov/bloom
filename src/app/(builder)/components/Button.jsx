"use client";
import cn from "@/utils/cn";

export default function Button({ children, className, borderColor, disable = false, onClick, type = "button", bgColor = "gray", py = "py-4", }) {
  return (
    <button onClick={onClick} type={type}
            className={` ${bgColor === "black" ? "bg-black text-white hover:bg-gray-900" : ""}
                        ${bgColor === "white" ? "bg-white text-black hover:bg-gray-100" : ""}
                        ${bgColor === "gray" ? "bg-grey-50 text-black hover:bg-gray-100" : ""}
                        ${borderColor ? `border ${borderColor}` : ""}
                        ${py ? py : ""}
                        ${disable ? "cursor-not-allowed opacity-80" : ""}
                        ${cn("rounded-full px-16 text-lg font-medium transition-all", className)}
                      `} >
      {children}
    </button>
  );
}
