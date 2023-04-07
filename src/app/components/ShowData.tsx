import styles from "./styles.module.scss";

interface ShowDataProps {
  data: ProductType[];
}

export function ShowData({ data }: ShowDataProps) {
  return <div className={styles.data}>{data[0].name}</div>;
}
