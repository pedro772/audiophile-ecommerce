import { Navbar } from "../components/Navbar";
import { CheckoutForm } from "../components/CheckoutForm";
import { GoBackButton } from "../components/Buttons/GoBackButton";

import styles from "./styles.module.scss";
import { Summary } from "../components/Summary";

export default function Checkout() {
  const handleSubmit = () => {};

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <GoBackButton />
        <div className={styles["checkout-and-summary"]}>
          <div className={styles.checkout__container}>
            <h1 className={styles.checkout__header}>CHECKOUT</h1>
            <CheckoutForm />
          </div>
          <div className={styles.summary__container}>
            <h2 className={styles.summary__header}>SUMMARY</h2>
            <Summary />
          </div>
        </div>
      </div>
    </>
  );
}
