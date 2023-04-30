"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import CheckoutButton from "../../Buttons/CheckoutButton";

import { useCartContext } from "@/app/context/cart";
import { useModalContext } from "@/app/context/modal";

import { getCartImagePath, getCartProductName } from "@/utils/getCartData";

import styles from "./styles.module.scss";

export function OrderModal() {
  const { handleModal } = useModalContext();
  const { itemsInCart } = useCartContext();
  const [showAllItems, setShowAllItems] = useState(false);

  let total = 0;
  itemsInCart.forEach((item) => {
    total += item.product.price * item.quantity * 1.2;
  });
  const firstItemInCart = itemsInCart[0];

  return (
    <div className={styles.modal__container}>
      <div className={styles.modal__content}>
        <Image
          src={"/assets/checkout/icon-order-confirmation.svg"}
          alt="An orange circle with a white V inside"
          width={64}
          height={64}
        />

        <div className={styles.modal__acknowledgment}>
          <h1 className={styles.modal__thanks}>
            THANK YOU <br></br> FOR YOUR ORDER
          </h1>
          <p className={styles.modal__confirmation}>
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className={styles.checkout}>
          <div className={styles.checkout__products}>
            {showAllItems ? (
              <>
                {itemsInCart.map((item) => {
                  return (
                    <>
                      <div className={styles.checkout__product}>
                        <Link
                          onClick={() => handleModal(false)}
                          href={`/product/${item.product.slug}`}
                        >
                          <Image
                            src={getCartImagePath(item.product)}
                            alt=""
                            width={50}
                            height={50}
                          />
                        </Link>

                        <div className={styles.product__info}>
                          <Link
                            onClick={() => handleModal(false)}
                            href={`/product/${item.product.slug}`}
                          >
                            <p className={styles.product__name}>
                              {getCartProductName(item.product)}
                            </p>
                          </Link>

                          <p
                            className={styles.product__price}
                          >{`$ ${item.product.price}`}</p>
                        </div>
                        <p
                          className={styles.product__quantity}
                        >{`x${item.quantity}`}</p>
                      </div>
                    </>
                  );
                })}
                <button
                  className={styles.product__see}
                  onClick={() => setShowAllItems(false)}
                >
                  View less
                </button>
              </>
            ) : (
              <>
                <div className={styles.checkout__product}>
                  <Link
                    onClick={() => handleModal(false)}
                    href={`/product/${firstItemInCart.product.slug}`}
                  >
                    <Image
                      src={getCartImagePath(firstItemInCart.product)}
                      alt=""
                      width={50}
                      height={50}
                    />
                  </Link>

                  <div className={styles.product__info}>
                    <Link
                      onClick={() => handleModal(false)}
                      href={`/product/${firstItemInCart.product.slug}`}
                    >
                      <p className={styles.product__name}>
                        {getCartProductName(firstItemInCart.product)}
                      </p>
                    </Link>
                    <p
                      className={styles.product__price}
                    >{`$ ${firstItemInCart.product.price}`}</p>
                  </div>
                  <p
                    className={styles.product__quantity}
                  >{`x${firstItemInCart.quantity}`}</p>
                </div>
                {itemsInCart.length > 1 && (
                  <button
                    className={styles.product__see}
                    onClick={() => setShowAllItems(true)}
                  >{`and ${itemsInCart.length - 1} other item(s)`}</button>
                )}
              </>
            )}
          </div>
          <div className={styles.checkout__total}>
            <p className={styles.total__header}>GRAND TOTAL</p>
            <h6 className={styles.total__price}>{`$ ${Math.round(
              total + 50
            )}`}</h6>
          </div>
        </div>
        <CheckoutButton
          link="/"
          name="BACK TO HOME"
          handleClick={() => handleModal(false)}
        />
      </div>
    </div>
  );
}
