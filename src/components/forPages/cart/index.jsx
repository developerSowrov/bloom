"use client";

import { Section, Breadcrumb, HeroHeading, CartItem, OrderSummery, CartIsEmpty } from "@/components";
import { useSelector } from "react-redux";

function CartComponents() {
   const cart = useSelector((state) => state.cart);

   return (
      <Section parentClassName="" sectionClassName="">
         <div>
            <Breadcrumb />
            <HeroHeading tag="h1" title="Your cart" className="text-left" />
         </div>

         {cart.length > 0 ? (
            <div className="mt-9 flex flex-col gap-5 xl:flex-row">
               {/* Cart Items */}
               <main className="flex h-fit flex-col gap-4 rounded-2xl border p-4 xl:w-2/3 xl:p-6 border-gray-200">
                  {cart?.map((item, index) => (
                     <div
                        key={item.id}
                        className={`border-b-2 border-gray-200 pb-4 ${index === cart.length - 1 ? "border-b-0 pb-0" : ""}`}
                     >
                        <CartItem {...item} />
                     </div>
                  ))}
               </main>

               {/* Summery */}
               <div className="flex-1">   
                  <OrderSummery {...cart} />
               </div>
               
            </div>
         ) : (
            <CartIsEmpty />
         )}
      </Section>
   );
}

export default CartComponents;
