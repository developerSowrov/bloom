import { FC, JSX } from "react";
import { HorizontalLine } from "@/components";
import { TCartItem } from "@/types/cart";
import calculateCartSummary from "@/utils/calculateCartSummary";
import Link from "next/link";

const OrderSummery: FC<TCartItem[]> = (prop): JSX.Element => {
   const { subtotal, totalDiscount, totalQuantity, total } = calculateCartSummary(prop);

   return (
      <section className="xl:sticky xl:top-32 flex h-fit flex-col gap-5 rounded-2xl border border-gray-200 p-6 text-2xl">
         <div>
            <div className="flex items-end justify-between">
            <h3 className="font-bold">Order Summary</h3>
            <span className="text-xl text-gray-700">
               {totalQuantity} {totalQuantity > 1 ? "Items" : "Item"}
            </span>
         </div>

         <div className="flex flex-col gap-3 text-xl">
            <div className="flex items-center justify-between">
               <span className="text-gray-700">Subtotal</span>
               <span className="font-bold">${subtotal}</span>
            </div>
            <div className="flex items-center justify-between">
               <span className="text-gray-700">Discount</span>
               <span className="font-bold text-red-600">-${totalDiscount}</span>
            </div>
            <div className="flex items-center justify-between">
               <span className="text-gray-700">Delivery Fee</span>
               <span className="font-bold">$15</span>
            </div>
         </div>

         <HorizontalLine className="my-3" />

         <div className="flex items-center justify-between">
            <span className="text-gray-900">Total</span>
            <span className="font-bold">${total}</span>
         </div>
         </div>

         <Link href="/check-out">
            <button className="mt-5 cursor-pointer w-full rounded-xl bg-black px-4 py-3 text-white text-lg font-semibold hover:bg-neutral-800 transition">
            Proceed to Checkout
         </button>
         </Link>
         {/* TODO: add other sections */}
      </section>
   );
};

export default OrderSummery;
