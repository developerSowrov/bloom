import { FC, JSX } from "react";

type TProps = {
   size: string[];
   state: string;
   setState: (item: string) => void;
};

const ProductSize: FC<TProps> = ({ setState, size, state }): JSX.Element => {
   return (
      <div className="mt-2 flex flex-wrap gap-3">
         {size.map((item) => (
            <button
               key={item}
               onClick={() => setState(item)}
               className={`${state === item ? "bg-black text-white" : "bg-gray-100 text-black/70"} rounded-full px-4 py-2 capitalize transition hover:bg-black hover:text-white`}
            >
               {item}
            </button>
         ))}
      </div>
   );
};

export default ProductSize;
