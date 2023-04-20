import styles from "./styles.module.scss";

export function AboutUs() {
  return (
    <aside className={styles.about}>
      <div className={styles.about__image} />
      <div className={styles.about__info}>
        <h4 className={styles.about__header}>
          Bringing you the{" "}
          <span className={styles["about__header--emphasis-color"]}>best</span>{" "}
          audio gear
        </h4>
        <p className={styles.about__description}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </aside>
  );
}
