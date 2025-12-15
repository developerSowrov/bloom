import { FC, JSX } from "react";
import Title from "./Title";
import { Colors } from "@/components";

const colors: string[] = [
   "black Olive Green",
   "Alice Blue",
   "White",
   "Black",
   "Cornsilk",
   "Ghost White",
   "Floral White",
   "Dim gray",
   "Multi Color",
];

type TProps = {
   selectedColor: string;
   setSelectedColor: (color: string) => void;
};

const ColorsFilter: FC<TProps> = ({ setSelectedColor, selectedColor }): JSX.Element => {
   return (
      <div>
         <Title title="Colors" />

         <Colors colors={colors} selectedColor={selectedColor} setSelectedColor={setSelectedColor} className="mt-4" sizeMini />
      </div>
   );
};

export default ColorsFilter;
