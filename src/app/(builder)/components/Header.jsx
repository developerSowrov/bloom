"use client"
import Section from "./Section"
import Image from "next/image"
import Logo from "./Logo"
import useHeader from "@/context/Header/useHeader"
import { searchIcon, hamburgerMenuIcon } from "@/public/img";
import { navMenuItems } from "./navMenuItems"
import SearchInput from "./SearchInput"
import Link from "next/link"
import Favorite from "./Favorite"
import Basket from "./Basket"

export default function Header() {

    const {           isShowSearchInput,
                searchIconClickHandler,
            toggleMobileNavMenuHandler } = useHeader()

  return (
    <header className="sticky top-0 z-40 shadow-sm bg-white mx-auto">
        <Section
            parentClassName=" w-full flex h-20 items-center justify-between bg-light xl:h-24 "
            sectionClassName="flex items-center justify-between mx-auto "
        >
            {/* mx-auto px-3 md:px-4 xl:px-[64px] */}
            {/* Hamburger Menu Icon */}
            <div className="flex gap-4 cursor-pointer">
                <Image        onClick={toggleMobileNavMenuHandler}
                                  src={hamburgerMenuIcon}
                                  alt="open"
                                width={20}
                               height={20}
                    data-menu-trigger="true"
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
            <div className="flex items-end gap-4 max-xl:mb-1">
                <label htmlFor="searchInput">
                    <Image
                    onClick={searchIconClickHandler}
                    src={searchIcon}
                    alt="search"
                    width={30}
                    height={30}
                    className="size-5 xl:hidden xl:size-6"
                    />
                </label>
                <Favorite />
                <Basket />
            </div>
        </Section>
    </header>
  )
}
