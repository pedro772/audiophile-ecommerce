const baseUrl = process.env.API_URL as string;

export async function getData(): Promise<ProductType[]> {
  const res = await fetch(
    baseUrl, {cache: 'no-cache'}
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}