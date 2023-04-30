import { CheckoutSkeleton } from "../components/LoadingSkeleton";
import ScrollUp from "../components/ScrollUp";

export default function Loading() {
  return (
    <>
      <ScrollUp />
      <CheckoutSkeleton />
    </>
  );
}
