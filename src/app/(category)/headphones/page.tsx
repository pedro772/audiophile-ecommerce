import { getData } from "@/app/api/data/getData";
import { ProductHeader } from "@/app/components/ProductHeader";

export default async function Headphones() {
  const data = await getData();

  return (
    <>
      <ProductHeader title="HEADPHONES" />
    </>
  );
}
