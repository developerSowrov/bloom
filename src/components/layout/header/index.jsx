"use client";
import { navMenuItems } from "./navMenuItems";
// ICON
import { searchIcon, hamburgerMenuIcon } from "@/public/img";
// COMPONENT
import Image from "next/image";
import Link from "next/link";
import Basket from "./Basket";
import TopNavbar from "./TopNavbar";
import SearchInput from "./SearchInput";
import { Button, Logo, Section } from "@/components";
import MobileNavMenu from "./MobileNavMenu";
import useHeader from "@/context/Header/useHeader"
import Favorite from './Favorite'
import useAuth from "../../../context/Auth/useAuth"
import { signOut } from "@/components/forPages/auth/lib/auth";
import { useRouter } from "next/navigation";
export default function Header() {
   const {           isShowSearchInput,
                searchIconClickHandler,
            toggleMobileNavMenuHandler } = useHeader()
   
   const {user}= useAuth()
   console.log(user)
   const router = useRouter()
   return (
      <>
         {/* TOP NAVBAR */}
         {!user && 
         <TopNavbar />}
         <MobileNavMenu/>
         {/* HEADER */}
         <header className="sticky top-0 z-40 shadow-sm bg-white mx-auto">
            <Section
               parentClassName=" w-full flex h-20 items-center justify-between bg-light xl:h-24 "
               sectionClassName="flex items-center justify-between mx-auto "
            >
               {/* mx-auto px-3 md:px-4 xl:px-[64px] */}
               {/* Hamburger Menu Icon */}
               <div className="flex gap-4 cursor-pointer">
                  <Image onClick={toggleMobileNavMenuHandler}
                             src={hamburgerMenuIcon}
                             alt="open"
                           width={20}
                          height={20}
                       className="mt-1 size-5 md:hidden"
                     />

                  {/* LOGO */}
                  <Logo />
               </div>

               {/* NAVBAR ITEMS */}
               <nav className="hidden md:block ">
                  <ul className="flex gap-5">
                     {navMenuItems.map(({ href, label }) => (
                        <li key={label}>
                           <Link
                              href={href}
                              className={`${href === "/products" ? "animate-pulse font-bold" : "font-medium"} text-black/60 transition-colors hover:text-black`}
                           >
                              {label}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>

               {/* SEARCH BAR */}
               {/*  */}
               <div className={`${isShowSearchInput ? "show" : "hidden"} xl:block  xl:show left-0 z-40 w-full transition-all max-xl:absolute max-xl:top-18 max-xl:px-4 xl:w-2/5`}>
                  <SearchInput />
               </div>

               {/* RIGHT ICONS */}
               <div className="flex items-center  gap-4 max-xl:mb-1">
                  <label htmlFor="searchInput">
                     <Image
                        onClick={searchIconClickHandler}
                        src={searchIcon}
                        alt="search"
                        width={30}
                        height={30}
                        className="size-5 xl:hidden "
                     />
                  </label>
                  
                  <Favorite />
                  <Basket />
                  {
                     user ? <Button onClick={()=> {
                        signOut()
                        router.push("/login")
                     }}
            type="submit" 
            bgColor="black" 
            className="w-1/2 px-4 text-base cursor-pointer"
            py="py-2"
          >
            Log Out
          </Button> : <Button 
          onClick={ () => router.push("/login")}
            type="submit" 
            bgColor="black" 
            className="w-1/2 px-4 text-base cursor-pointer"
            py="py-2"
          >
            LogIn
          </Button>
                  }
                  
               </div>
            </Section>
         </header>
      </>
   );
};
