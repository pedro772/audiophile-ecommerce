"use client";

import Image from "next/image";
import Link from "next/link";

import { EmptyCart } from "./EmptyCart";
import { InputQuantity } from "../../InputQuantity";
import CheckoutButton from "../../Buttons/CheckoutButton";

import { useCartContext } from "@/app/context/cart";
import { useModalContext } from "@/app/context/modal";

import { getCartImagePath, getCartProductName } from "@/utils/getCartData";

import styles from "./styles.module.scss";
import RemoveAllButton from "../../Buttons/RemoveAllButton";

export function CartModal() {
  const { handleModal } = useModalContext();
  const { itemsInCart, setItemsInCart } = useCartContext();
  let total = 0;
  itemsInCart.forEach((item) => {
    total += item.product.price * item.quantity * 1.2;
  });

  const removeAllItensOfCart = () => {
    setItemsInCart([]);
  };

  const handleSubtract = (product: ProductType) => {
    setItemsInCart((prevItemsInCart) => {
      return prevItemsInCart.filter((item) => {
        if (item.product.id === product.id) {
          if (item.quantity === 1) {
            return false;
          }

          item.quantity--;
        }

        return true;
      });
    });
  };

  const handleAdd = (product: ProductType) => {
    setItemsInCart((prevItemsInCart) => {
      return prevItemsInCart.map((item) => {
        if (item.product.id === product.id) {
          item.quantity++;
        }

        return item;
      });
    });
  };

  return itemsInCart.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className={styles["modal-container"]}>
      <div className={styles["cart-modal"]}>
        <div className={styles["cart-modal__container--header"]}>
          <h6
            className={styles["cart-modal__header"]}
          >{`CART (${itemsInCart.length})`}</h6>
          <RemoveAllButton handleClick={removeAllItensOfCart} />
        </div>
        <div className={styles["cart-modal__container--items"]}>
          {itemsInCart.map((item) => (
            <div
              key={item.product.id}
              className={styles["cart-modal__container--item"]}
            >
              <Link
                href={`/product/${item.product.slug}`}
                onClick={() => handleModal(false)}
              >
                <Image
                  src={getCartImagePath(item.product)}
                  alt=""
                  width={64}
                  height={64}
                  className={styles["cart-modal__product--image"]}
                />
              </Link>

              <div className={styles["cart-modal__container--product-info"]}>
                <Link
                  href={`/product/${item.product.slug}`}
                  onClick={() => handleModal(false)}
                >
                  <p className={styles["cart-modal__product--name"]}>
                    {getCartProductName(item.product)}
                  </p>
                </Link>

                <p
                  className={styles["cart-modal__product--price"]}
                >{`$ ${item.product.price}`}</p>
              </div>
              <InputQuantity
                quantity={item.quantity}
                handleAdd={() => handleAdd(item.product)}
                handleSubtract={() => handleSubtract(item.product)}
                isUsedOnCart
              />
            </div>
          ))}
        </div>
        <div className={styles["cart-modal__container--prices"]}>
          <p className={styles["cart-modal__prices--total"]}>TOTAL</p>
          <h6 className={styles["cart-modal__header"]}>{`$ ${Math.round(
            total
          )}`}</h6>
        </div>
        <CheckoutButton
          link="/checkout"
          name="CHECKOUT"
          handleClick={() => handleModal(false)}
        />
      </div>
    </div>
  );
}
