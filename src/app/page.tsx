import { ShowData } from "./components/ShowData";
import { getData } from "./api/data/getData";
import { Homepage } from "./components/Homepage";

export default async function Home() {
  const data = await getData();

  return (
    <>
      <Homepage />
    </>
  );
}
