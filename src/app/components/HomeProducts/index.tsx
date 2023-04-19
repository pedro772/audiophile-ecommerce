import Link from "next/link";
import MainButton from "../Buttons/MainButton";

import styles from "./styles.module.scss";

export function HomeProducts() {
  return (
    <div style={{ marginTop: "120px" }}>
      <Link href="/" className={styles.zx9}>
        <div className={styles.zx9__image} />
        <div className={styles.zx9__background} />
        <div className={styles.zx9__info}>
          <h2 className={styles.zx9__header}>ZX9 SPEAKER</h2>
          <p className={styles.zx9__description}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <MainButton link="/" name="See product" type="secondary" />
        </div>
      </Link>
    </div>
  );
}
