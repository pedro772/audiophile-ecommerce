interface ShowDataProps {
  data: ProductType[];
}

export function ShowData({ data }: ShowDataProps) {
  return <div>{data[0].name}</div>;
}
