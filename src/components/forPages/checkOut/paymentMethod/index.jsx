import { useState } from "react";

const CheckoutPaymentMethod = () => {
   const [method, setMethod] = useState("cod");

   return (
      <section className="rounded-2xl border border-gray-200 p-6">
         <h3 className="text-2xl font-bold mb-4">Payment Method</h3>

         <div className="flex flex-col gap-4">
            <label className="flex items-center gap-3">
               <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={method === "cod"}
                  onChange={() => setMethod("cod")}
               />
               <span className="text-lg">Cash on Delivery</span>
            </label>
         </div>
      </section>
   );
};

export default CheckoutPaymentMethod;
