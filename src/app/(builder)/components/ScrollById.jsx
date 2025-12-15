import cn from "@/utils/cn";

export default function ScrollById({ id, className }) {
  return (
    <div id={id} className={cn("absolute -mt-32", className)} />
  );
}