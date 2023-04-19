import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.scss";
import TertiaryButton from "../Buttons/TertiaryButton";

export function Categories() {
  return (
    <nav className={styles.categories}>
      <Link href="/" className={styles.category}>
        <div className={styles.category__container}>
          <div className={styles.category__headphones} />
          <div className={styles.category__card}>
            <h6 className={styles.category__name}>HEADPHONES</h6>
            <TertiaryButton
              iconPath="/assets/shared/desktop/icon-arrow-right.svg"
              iconAlt="Orange arrow right"
              name="Shop"
            />
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.category}>
        <div className={styles.category__container}>
          <div className={styles.category__speakers} />
          <div className={styles.category__card}>
            <h6 className={styles.category__name}>SPEAKERS</h6>
            <TertiaryButton
              iconPath="/assets/shared/desktop/icon-arrow-right.svg"
              iconAlt="Orange arrow right"
              name="Shop"
            />
          </div>
        </div>
      </Link>
      <Link href="/" className={styles.category}>
        <div className={styles.category__container}>
          <div className={styles.category__earphones} />
          <div className={styles.category__card}>
            <h6 className={styles.category__name}>EARPHONES</h6>
            <TertiaryButton
              iconPath="/assets/shared/desktop/icon-arrow-right.svg"
              iconAlt="Orange arrow right"
              name="Shop"
            />
          </div>
        </div>
      </Link>
    </nav>
  );
}
