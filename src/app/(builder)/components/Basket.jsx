"use client";
import { useSelector } from "react-redux";
import { basketIcon } from "@/public/img";
import calculateCartSummary from "@/utils/calculateCartSummary";
// COMPONENT
import Link from "next/link";
import Image from "next/image";
import Badge from "@mui/material/Badge";

export default function Basket() {
  const cart = useSelector((state) => state.cart);
   const { totalQuantity } = calculateCartSummary(cart);

   return (
      <Link href="/cart" title="Your Cart">
         <Badge color="success" badgeContent={totalQuantity}>
            <Image src={basketIcon} alt="basket" width={30} height={30} className="z-30 size-5 xl:size-6" />
         </Badge>
      </Link>
   );
}

