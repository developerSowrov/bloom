const CheckoutUserInfo = () => {
   return (
      <section className="rounded-2xl border border-gray-200 p-6">
         <h3 className="text-2xl font-bold mb-4">Shipping Information</h3>

         <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
               <label className="block mb-1 font-medium">Full Name</label>
               <input type="text" className="w-full px-4 py-2 overflow-hidden rounded-xl bg-gray-100" placeholder="Enter your full name" />
            </div>

            <div>
               <label className="block mb-1 font-medium">Email</label>
               <input type="email" className="w-full  px-4 py-2 overflow-hidden rounded-xl bg-gray-100  transition-all" placeholder="example@gmail.com" />
            </div>

            <div>
               <label className="block mb-1 font-medium">Phone</label>
               <input type="text" className="w-full  px-4 py-2 overflow-hidden rounded-xl bg-gray-100  transition-all" placeholder="+8801XXXXXXXXX" />
            </div>

            <div>
               <label className="block mb-1 font-medium">City</label>
               <input type="text" className="w-full  px-4 py-2 overflow-hidden rounded-xl bg-gray-100  transition-all" placeholder="City name" />
            </div>

            <div className="md:col-span-2">
               <label className="block mb-1 font-medium">Delivery Address</label>
               <textarea className="w-full  px-4 py-2 overflow-hidden rounded-xl bg-gray-100  transition-all" rows={3} placeholder="Your full delivery address" />
            </div>
         </form>
      </section>
   );
};

export default CheckoutUserInfo;
