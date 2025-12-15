"use client";

import { FC, JSX } from "react";
import { arrow } from "@/public/img";
import Image from "next/image";

type TProps = {
   currentPageNumber: number;
   endPageNumber: number;
   nextPage: () => void;
   prevPage: () => void;
};

const ProductsPagination: FC<TProps> = ({ currentPageNumber, nextPage, prevPage, endPageNumber }): JSX.Element => {
   return (
      <nav>
         <ul className="flex items-center justify-between font-semibold">
            <li
               onClick={prevPage}
               className={`${
                  currentPageNumber === 1
                     ? "cursor-default opacity-40"
                     : "cursor-pointer hover:bg-grey-50"
               } flex select-none items-center gap-2 rounded-md border border-gray-200 px-4 py-2 transition-colors`}
            >
               <Image src={arrow} alt="Previous" className="w-5 h-5 rotate-0 mb-0" />
               Previous
            </li>

            <div className="flex items-center gap-2">
               <li className="cursor-pointer select-none rounded-md border border-gray-200 px-4 py-2 transition-colors hover:bg-grey-50">
                  {currentPageNumber}
               </li>
            </div>

            <li
               onClick={nextPage}
               className={`${
                  currentPageNumber === endPageNumber
                     ? "cursor-default opacity-40"
                     : "cursor-pointer hover:bg-grey-50"
               } flex select-none items-center gap-2 rounded-md border border-gray-200 px-4 py-2 transition-colors`}
            >
               Next
               <Image src={arrow} alt="Next" className="w-5 h-5 rotate-180 mb-0" />
            </li>
         </ul>
      </nav>
   );
};

export default ProductsPagination;
