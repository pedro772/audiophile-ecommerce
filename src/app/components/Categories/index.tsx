"use client";

import Link from "next/link";
import TertiaryButton from "../Buttons/TertiaryButton";

import { useModalContext } from "@/app/context/modal";

import styles from "./styles.module.scss";

export function Categories() {
  const { handleModal } = useModalContext();

  return (
    <nav className={styles.categories}>
      <Link
        href="/headphones"
        className={styles.category}
        onClick={() => handleModal(false)}
      >
        <div className={styles.category__container}>
          <div className={styles.category__headphones} />
          <div className={styles.category__card}>
            <h6 className={styles.category__name}>HEADPHONES</h6>
            <TertiaryButton
              iconPath="/assets/shared/desktop/icon-arrow-right.svg"
              iconAlt="Orange arrow right"
              name="Shop"
            />
          </div>
        </div>
      </Link>
      <Link
        href="/speakers"
        className={styles.category}
        onClick={() => handleModal(false)}
      >
        <div className={styles.category__container}>
          <div className={styles.category__speakers} />
          <div className={styles.category__card}>
            <h6 className={styles.category__name}>SPEAKERS</h6>
            <TertiaryButton
              iconPath="/assets/shared/desktop/icon-arrow-right.svg"
              iconAlt="Orange arrow right"
              name="Shop"
            />
          </div>
        </div>
      </Link>
      <Link
        href="/earphones"
        className={styles.category}
        onClick={() => handleModal(false)}
      >
        <div className={styles.category__container}>
          <div className={styles.category__earphones} />
          <div className={styles.category__card}>
            <h6 className={styles.category__name}>EARPHONES</h6>
            <TertiaryButton
              iconPath="/assets/shared/desktop/icon-arrow-right.svg"
              iconAlt="Orange arrow right"
              name="Shop"
            />
          </div>
        </div>
      </Link>
    </nav>
  );
}
