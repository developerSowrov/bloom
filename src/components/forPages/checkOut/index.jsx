"use client";

import { Section, Breadcrumb, HeroHeading } from "@/components";
import { useSelector } from "react-redux";
// import CheckoutOrderSummary from "./CheckoutOrderSummary";
import CheckoutOrderSummary from "./orderSummary";
import CheckoutUserInfo from "./userInfo";
import CheckoutPaymentMethod from "./paymentMethod";

const CheckoutPage = () => {
   const cart = useSelector((state) => state.cart);

   if (cart.length === 0) {
      return (
         <Section>
            <div className="py-16 text-center">
               <h2 className="text-3xl font-bold">Your cart is empty!</h2>
               <p className="text-gray-600 mt-2">Please add items before proceeding to checkout.</p>
            </div>
         </Section>
      );
   }

   return (
      <Section>
         <div>
            <Breadcrumb />
            <HeroHeading tag="h1" title="Checkout" className="text-left" />
         </div>

         <div className="mt-10 flex flex-col gap-8 xl:flex-row">
            {/* LEFT */}
            <div className="flex flex-col gap-6 xl:w-2/3">
               <CheckoutUserInfo />
               <CheckoutPaymentMethod />
            </div>

            {/* RIGHT */}
            <div className="xl:w-1/3">
               <CheckoutOrderSummary items={cart} />
            </div>
         </div>
      </Section>
   );
};

export default CheckoutPage;
