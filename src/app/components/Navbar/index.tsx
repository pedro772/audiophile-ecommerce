"use client";

import Image from "next/image";
import Link from "next/link";
import { CategoriesModal } from "../Modals/CategoriesModal";
import { CartModal } from "../Modals/CartModal";

import { useModalContext } from "@/app/context/modal";

import styles from "./styles.module.scss";

interface NavbarProps {
  isOnHomePage?: boolean;
}

export function Navbar({ isOnHomePage }: NavbarProps) {
  const { handleModal } = useModalContext();

  return (
    <nav className={isOnHomePage ? styles["navbar--homepage"] : styles.navbar}>
      <div className={styles["navbar__options-container"]}>
        <button
          className={styles.hamburger}
          onClick={() => handleModal(<CategoriesModal />)}
        >
          <Image
            src="/assets/shared/tablet/icon-hamburger.svg"
            width={16}
            height={15}
            alt="Hamburger Icon"
          />
        </button>

        <Link href="/" onClick={() => handleModal(false)}>
          <Image
            src="/assets/shared/desktop/logo.svg"
            width={140}
            height={25}
            alt="The Audiophile Logo, Audiophile written in white letters"
          />
        </Link>

        <div className={styles.options}>
          <Link
            href="/"
            className={styles.button__link}
            onClick={() => handleModal(false)}
          >
            Home
          </Link>
          <Link
            href="/headphones"
            className={styles.button__link}
            onClick={() => handleModal(false)}
          >
            Headphones
          </Link>
          <Link
            href="/speakers"
            className={styles.button__link}
            onClick={() => handleModal(false)}
          >
            Speakers
          </Link>
          <Link
            href="/earphones"
            className={styles.button__link}
            onClick={() => handleModal(false)}
          >
            Earphones
          </Link>
        </div>

        <button
          onClick={() => handleModal(<CartModal />)}
          className={styles.cart}
        >
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            width={23}
            height={20}
            alt="Cart Icon"
          />
        </button>
      </div>
    </nav>
  );
}
