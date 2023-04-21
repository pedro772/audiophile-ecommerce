import { getData } from "@/app/api/data/getData";
import { ProductHeader } from "@/app/components/ProductHeader";

export default async function Speakers() {
  const data = await getData();

  return (
    <>
      <ProductHeader title="SPEAKERS" />
    </>
  );
}
