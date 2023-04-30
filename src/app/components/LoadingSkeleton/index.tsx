import styles from "./styles.module.scss";

export function HomeSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles["navbar__item--left"]} />
        <div className={styles["navbar__item--center"]} />
        <div className={styles["navbar__item--right"]} />
      </div>

      <div className={styles.body}>
        <div className={styles.body__items}>
          <div
            className={styles.body__item}
            style={{ width: "12.5vw", height: "5vh" }}
          />
          <div
            className={styles.body__item}
            style={{ width: "25vw", height: "10vh" }}
          />
          <div
            className={styles.body__item}
            style={{ width: "15vw", height: "7.5vh" }}
          />
          <div
            className={styles.body__item}
            style={{ width: "10vw", height: "5vh" }}
          />
        </div>
        <div className={styles.body__image} />
      </div>
    </div>
  );
}

export function CategorySkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles["navbar__item--left"]} />
        <div className={styles["navbar__item--center"]} />
        <div className={styles["navbar__item--right"]} />
      </div>

      <div className={styles.category}>
        <div className={styles.category__item} />
      </div>

      <div className={styles.category__product}>
        <div className={styles.product}>
          <div className={styles.product__image} />
          <div className={styles.product__name} />
          <div className={styles.product__description} />
          <div className={styles.product__button} />
        </div>
      </div>
    </div>
  );
}

export function ProductSkeleton() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles["navbar__item--left"]} />
        <div className={styles["navbar__item--center"]} />
        <div className={styles["navbar__item--right"]} />
      </div>

      <div className={styles.product__container}>
        <div className={styles.product}>
          <div className={styles.product__image} />
          <div className={styles.product__name} />
          <div className={styles.product__description} />
          <div className={styles.product__price} />
          <div className={styles.product__buttons}>
            <div className={styles.product__button} />
            <div className={styles.product__button} />
          </div>
        </div>
      </div>
    </div>
  );
}
