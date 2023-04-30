"use client";

import Image from "next/image";
import Link from "next/link";

import { useCartContext } from "@/app/context/cart";
import { getCartImagePath, getCartProductName } from "@/utils/getCartData";

import styles from "./styles.module.scss";
import CheckoutButton from "../Buttons/CheckoutButton";

export function Summary() {
  const { itemsInCart } = useCartContext();
  let total = 0;
  itemsInCart.forEach((item) => {
    total += item.product.price * item.quantity;
  });

  return (
    <>
      <div className={styles.summary__products}>
        {itemsInCart.map((item) => (
          <div key={item.product.id} className={styles.summary__product}>
            <Link href={`/product/${item.product.slug}`}>
              <Image
                src={getCartImagePath(item.product)}
                alt=""
                width={64}
                height={64}
              />
            </Link>

            <div className={styles.product__info}>
              <Link href={`/product/${item.product.slug}`}>
                <p className={styles.product__name}>
                  {getCartProductName(item.product)}
                </p>
              </Link>

              <p
                className={styles.product__price}
              >{`$ ${item.product.price}`}</p>
            </div>
            <span className={styles.product__quantity}>x{item.quantity}</span>
          </div>
        ))}
      </div>
      <div className={styles.prices}>
        <div className={styles.prices__detailed}>
          <div className={styles.prices__container}>
            <p className={styles.prices__expense}>TOTAL</p>
            <h6 className={styles.prices__price}>{`$ ${Math.round(
              total * 1.2
            )}`}</h6>
          </div>
          <div className={styles.prices__container}>
            <p className={styles.prices__expense}>SHIPPING</p>
            <h6 className={styles.prices__price}>$ 50</h6>
          </div>
          <div className={styles.prices__container}>
            <p className={styles.prices__expense}>{`VAT (INCLUDED)`}</p>
            <h6 className={styles.prices__price}>{`$ ${Math.round(
              total * 0.2
            )}`}</h6>
          </div>
        </div>

        <div className={styles.prices__container}>
          <p className={styles.prices__expense}>GRAND TOTAL</p>
          <h6 className={styles["prices__price--total"]}>{`$ ${Math.round(
            total * 1.2 + 50
          )}`}</h6>
        </div>
      </div>
      <CheckoutButton name="Continue" form="checkout" />
    </>
  );
}
