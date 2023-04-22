import Link from "next/link";
import MainButton from "../Buttons/MainButton";

import styles from "./styles.module.scss";
import zx9Styles from "./zx9.module.scss";
import zx7Styles from "./zx7.module.scss";
import yx1Styles from "./yx1.module.scss";

export function HomeProducts() {
  return (
    <div className={styles.container}>
      <div className={zx9Styles.zx9}>
        <div className={zx9Styles.zx9__image} />
        <div className={zx9Styles.zx9__background} />
        <div className={zx9Styles.zx9__info}>
          <h2 className={zx9Styles.zx9__header}>ZX9 SPEAKER</h2>
          <p className={zx9Styles.zx9__description}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <MainButton
            link="/product/zx9-speaker"
            name="See product"
            type="secondary"
          />
        </div>
      </div>

      <div className={zx7Styles.zx7}>
        <div className={zx7Styles.zx7__info}>
          <h2 className={zx7Styles.zx7__header}>ZX7 SPEAKER</h2>
          <MainButton
            link="/product/zx7-speaker"
            name="See product"
            type="secondary"
          />
        </div>
      </div>

      <div className={yx1Styles.yx1}>
        <div className={yx1Styles.yx1__image} />
        <div className={yx1Styles.yx1__info}>
          <h2 className={yx1Styles.yx1__header}>YX1 EARPHONES</h2>
          <MainButton
            link="/product/yx1-earphones"
            name="See product"
            type="secondary"
          />
        </div>
      </div>
    </div>
  );
}
