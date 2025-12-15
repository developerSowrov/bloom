import { Skeleton } from "@mui/material";

export default function ProductCardSkeleton() {
  return (
      <div className="flex flex-col">
         <Skeleton variant="rectangular" width={320} height={320} animation="wave" className="rounded-[1.25rem]" />
         <Skeleton variant="text" width={320} height={40} animation="wave" className="rounded-[.7rem]" />
         <Skeleton variant="text" width={130} height={40} animation="wave" className="rounded-[.7rem]" />
         <Skeleton variant="text" width={150} height={40} animation="wave" className="rounded-[.7rem]" />
      </div>
   );
}

