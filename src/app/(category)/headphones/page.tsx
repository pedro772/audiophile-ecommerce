import { getData } from "@/app/api/data/getData";
import { CategoryHeader } from "@/app/components/CategoryHeader";

export default async function Headphones() {
  const data = await getData();

  return (
    <>
      <CategoryHeader title="HEADPHONES" />
    </>
  );
}
