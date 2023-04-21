import { getData } from "@/app/api/data/getData";
import { CategoryHeader } from "@/app/components/CategoryHeader";

async function Earphones() {
  const data = await getData();

  return (
    <>
      <CategoryHeader title="EARPHONES" />
    </>
  );
}

export default Earphones;
