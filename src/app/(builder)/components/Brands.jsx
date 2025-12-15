// IMAGE
import { brands } from "@/public/img";
// COMPONENT
import Image from "next/image";
import ScrollById from "./ScrollById";
import Section from "./Section"


function Brands() {
   return (
      <Section
         parentClassName="h-20 xl:h-32 bg-black w-full md:-mt-12 lg:mt-0 relative z-1 "
         sectionClassName="flex w-full h-full items-center  justify-between relative"
      >
         <ScrollById id="brands" className="" />

         {brands.map((item) => (
            <div key={item.title}>
               <Image
                  src={item.src}
                  width={150}
                  height={150}
                  alt={item.title}
                  title={item.title}
                  className="h-4 w-14 object-scale-down opacity-95 xl:h-9 xl:w-36"
               />
            </div>
         ))}
      </Section>
   );
}

export default Brands;
