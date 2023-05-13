"use client";

import Image from "next/image";
import CheckoutButton from "../../Buttons/CheckoutButton";
import { useModalContext } from "@/app/context/modal";

import styles from "./styles.module.scss";

export function EmptyCart() {
  const { handleModal } = useModalContext();

  return (
    <div className={styles["modal-container--empty"]}>
      <Image
        src="/assets/cart/icon-empty-cart.svg"
        alt="A gray cart with an exclamation point inside"
        width={163}
        height={175}
      />
      <h6 className={styles["cart-modal__header"]}>YOUR CART IS EMPTY</h6>
      <CheckoutButton
        handleClick={() => handleModal(false)}
        name="CONTINUE SHOPPING"
      />
    </div>
  );
}
