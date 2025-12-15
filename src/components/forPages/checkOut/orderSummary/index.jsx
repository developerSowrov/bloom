import { HorizontalLine } from "@/components";
import calculateCartSummary from "@/utils/calculateCartSummary";

const CheckoutOrderSummary = ({ items }) => {
   const { subtotal, totalDiscount, total, totalQuantity } = calculateCartSummary(items);

   return (
      <section className="xl:sticky xl:top-32 flex h-fit flex-col gap-5 rounded-2xl border border-gray-200 p-6 text-xl">
         <h3 className="text-2xl font-bold">Order Summary</h3>

         <div className="flex justify-between">
            <span>Items</span>
            <span className="font-semibold">{totalQuantity}</span>
         </div>

         <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-bold">${subtotal}</span>
         </div>

         <div className="flex justify-between">
            <span>Discount</span>
            <span className="font-bold text-red-600">-${totalDiscount}</span>
         </div>

         <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span className="font-bold">$15</span>
         </div>

         <HorizontalLine className="my-4" />

         <div className="flex justify-between text-2xl">
            <span>Total</span>
            <span className="font-bold">${total}</span>
         </div>

         <button className="mt-5 w-full rounded-xl bg-black px-4 py-3 text-white text-lg font-semibold hover:bg-neutral-800 transition">
            Place Order
         </button>
      </section>
   );
};

export default CheckoutOrderSummary;
