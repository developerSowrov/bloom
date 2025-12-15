import { FC, JSX } from "react";
import { dataType } from "./data";
import { verified } from "@/public/img";
// COMPONENT
import Image from "next/image";
import { StarRate } from "@/components";


export default function CustomerCommentCard({ name, content, rate }) {
  return (
      <div className="flex h-full flex-col gap-4 rounded-2xl border-gray-200 border px-7 py-5">
         <StarRate rate={rate} showEmptyStar={false} showRateNumber={false} className="gap-1" />

         <div className="flex flex-col gap-1">
            <div className="flex gap-2">
               <span className="text-lg font-bold xl:text-xl">{name}</span>
               <Image src={verified} alt="verified" width={20} height={20} />
            </div>

            <p className="max-xl:text-base">&quot;{content}”</p>
         </div>
      </div>
   );
}

