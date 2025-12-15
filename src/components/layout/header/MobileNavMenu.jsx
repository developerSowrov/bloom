import { navMenuItems } from "./navMenuItems";
import { CloseButton } from "@/components";
import Link from "next/link";
import Logo from "../Logo";
import Social from "./Social"
import useHeader from "@/context/Header/useHeader"
import { useRef, useEffect } from "react";

export default function MobileNavMenu() {
   const { menuRef, isMobileNavMenuClose: isClose,
             toggleMobileNavMenuHandler: onClose, onBackgroundClick } = useHeader()
             
   return (
      // background 
      <div onClick={onBackgroundClick} className={`md:hidden fixed top-0 left-0 z-[999] h-full w-full backdrop-blur-xs shadow-lg bg-black/5 transition-opacity duration-300 ${isClose ? "opacity-0 pointer-events-none delay-300" : "opacity-100 delay-0"} `}>
         {/* menu */}
         <div ref={menuRef} className={`h-screen max-w-sm flex flex-col justify-between relative shadow transition-[right] duration-300 delay-100 bg-white ${isClose ? "right-full" : "right-0"}`}>
            <CloseButton onClick={onClose} className="absolute right-9 top-9 cursor-pointer" />
            <nav className="p-14 xl:hidden">
               <ul className="flex flex-col gap-5 text-xl font-bold">
                  { navMenuItems.map(function ({ href, label }) {
                     return (
                        <li key={label} onClick={onClose}>
                           <Link href={href}>{label}</Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>

            <div onClick={onClose} className="mb-12 flex w-full flex-col items-center justify-center gap-4">
               <Logo />
               <Social />
            </div>
         </div>
         
      </div>
   );
};