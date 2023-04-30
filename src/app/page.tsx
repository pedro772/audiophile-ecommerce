import { getData } from "./api/data/getData";
import { Homepage } from "./components/Homepage";
import ScrollUp from "./components/ScrollUp";

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Homepage />
      <ScrollUp />
    </>
  );
}
