import { getData } from "@/app/api/data/getData";
import { ProductHeader } from "@/app/components/ProductHeader";

async function Earphones() {
  const data = await getData();

  return (
    <>
      <ProductHeader title="EARPHONES" />
    </>
  );
}

export default Earphones;
