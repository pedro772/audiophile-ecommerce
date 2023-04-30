import { ProductSkeleton } from "@/app/components/LoadingSkeleton";
import ScrollUp from "@/app/components/ScrollUp";

export default function Loading() {
  return (
    <>
      <ScrollUp />
      <ProductSkeleton />
    </>
  );
}
