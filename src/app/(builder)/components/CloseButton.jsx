
import { closeIcon } from "@/public/img";
import { Button } from "@/components";
import Image from "next/image";
import cn from "@/utils/cn";

export default function CloseButton({ onClick, className }) {
  return (
      <Button data-menu-close="true" onClick={onClick} bgColor="white" className={cn("!p-0 xl:hidden", className)}>
         <Image data-menu-close="true" src={closeIcon} alt="close" width={20} height={20} className="size-3 invert" />
      </Button>
   );
}

