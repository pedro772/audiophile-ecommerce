interface ShowDataProps {
  data: any[];
}

export function ShowData({ data }: ShowDataProps) {
  return <div>{data[0].name}</div>;
}
