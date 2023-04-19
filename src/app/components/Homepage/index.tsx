import styles from "./styles.module.scss";
import MainButton from "../Buttons/MainButton";
import { Navbar } from "../Navbar";
import { Categories } from "../Categories";

export function Homepage() {
  return (
    <>
      <Navbar isOnHomePage={true} />
      <main>
        <header className={styles.header}>
          <div className={styles["header__new-product"]}>
            <div className={styles.header__info}>
              <span className={styles["header__info--overline"]}>
                NEW PRODUCT
              </span>
              <h1 className={styles["header__info--title"]}>
                XX99 MARK II HEADPHONES
              </h1>
              <p className={styles["header__info--paragraph"]}>
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
            </div>

            <MainButton link="/" name="see product" type="primary" />
          </div>
        </header>

        <div className={styles.container}>
          <section>
            <Categories />
          </section>
        </div>
      </main>
    </>
  );
}
