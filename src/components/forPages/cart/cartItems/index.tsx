import { FC, memo, JSX } from "react";
import { trash } from "@/public/img";
import { useDispatch } from "react-redux";
import { removeFromCartAction } from "@/services/redux/slice/cart";
// COMPONENT
import Image from "next/image";
import Link from "next/link";
import { Price, ProductSelectCount } from "@/components";
import { TCartItem } from "@/types/cart";

const CartItem: FC<TCartItem> = ({ id, title, price, discount, mainImage, slug, selectedColor, selectedSize }): JSX.Element => {
   const dispatch = useDispatch();

   return (
      <div>
         <div className="group flex flex-col justify-between xl:flex-row">
            {/* Right items */}
            <div className="flex gap-4 xl:w-4/5">
               <Link href={slug} className="overflow-hidden rounded-lg shadow w-20 h-20 xl:w-36 xl:h-36">
                  <Image
                     src={mainImage}
                     width={100}
                     height={100}
                     alt={title}
                     className="w-full h-full transition duration-300 ease-out transform group-hover:scale-110"
                  />
               </Link>

               <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-1 text-base">
                     <Link href={slug}>
                        <h3 className="text-lg font-bold capitalize xl:text-xl">{title}</h3>
                     </Link>

                     <div className="font-medium">
                        <span>Size: </span>
                        <span className="capitalize text-gray-700">{selectedSize}</span>
                     </div>
                     <div className="font-medium">
                        <div className="flex items-center gap-2">
                           Color:
                           <span
                              title={selectedColor}
                              style={{ backgroundColor: selectedColor }}
                              className="w-4 h-4 rounded-full border border-gray-400"
                           />
                        </div>
                     </div>
                  </div>
                  <div className="mt-4">
                     <Price price={price} discount={discount} smallSize />
                  </div>
               </div>
            </div>

            {/* Left Items */}
            <div className="flex flex-row-reverse items-center justify-between mt-6 xl:w-1/5 xl:flex-col xl:items-end">
               <button onClick={() => dispatch(removeFromCartAction(id))} title="Remove From Cart">
                  <Image src={trash} width={20} height={20} alt="Remove From Cart" className="w-5 h-5" />
               </button>
               <ProductSelectCount id={id} className="w-2/3 xl:w-full" />
            </div>
         </div>
      </div>
   );
};

export default memo(CartItem);
