import Image from "next/image";
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
      <Image src={data[0].image.mobile} alt="image" width={40} height={40} />
      {data[0].image.mobile}
    </div>
  );
}
