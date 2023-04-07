import MainButton from "./Buttons/MainButton";
import TertiaryButton from "./Buttons/TertiaryButton";
import styles from "./styles.module.scss";

interface ShowDataProps {
  data: ProductType[];
}

export function ShowData({ data }: ShowDataProps) {
  return (
    <div className={styles.data}>
      <MainButton name="See product" link="/" type="primary" />
      <MainButton name="See product" type="secondary" />
      <TertiaryButton
        iconPath="/assets/shared/desktop/icon-arrow-right.svg"
        iconAlt="Arrow Right"
        name="Shop"
      />
      {data[0].name}
    </div>
  );
}
