import { ShowData } from "./ShowData";

async function getData() {
  const res = await fetch("http://localhost:3000/api/staticdata");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div>
      <h1>Teste</h1>
      <div>{data && <ShowData data={data} />}</div>
    </div>
  );
}
