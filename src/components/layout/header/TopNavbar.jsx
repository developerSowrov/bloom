"use client";

import { closeIcon } from "@/public/img";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components";
import useHeader from "@/context/Header/useHeader"

function TopNavbar() {

  const {              closeTopNavbar: close,
                 closeTopNavbarHandler: onClick } = useHeader()
  return (
    <Section
      parentClassName={`${!close ? "mt-0" : "-mt-9"} flex h-9 w-full items-center justify-between bg-black text-white transition-margin duration-300 z-40`}
      sectionClassName="flex items-center justify-center"
    >
      {/* WHITE SPACE */}
      <div className="hidden xl:block w-1/6" />

      {/* CENTER */}
      <div className="text-center xl:w-4/6">
        <p className="text-sm font-light xl:text-base">
          Sign up and get 20% off to your first order.
          <Link href="/register" className="ml-1 font-medium underline">
            Sign Up Now
          </Link>
        </p>
      </div>

      {/* CLOSE ICON */}
      <div className="hidden xl:flex justify-end w-1/6 cursor-pointer">
        <Image onClick={onClick} src={closeIcon} width={13} height={13} alt="close" />
      </div>
    </Section>
  );
}

export default TopNavbar;
