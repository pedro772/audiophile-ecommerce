import { ShowData } from "./ShowData";
import { getData } from "./api/data/getData";

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <h1>Teste</h1>
      <div>{<ShowData data={data} />}</div>
    </div>
  );
}
