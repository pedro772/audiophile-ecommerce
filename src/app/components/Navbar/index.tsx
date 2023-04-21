import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

interface NavbarProps {
  isOnHomePage?: boolean;
}

export function Navbar({ isOnHomePage }: NavbarProps) {
  return (
    <nav className={isOnHomePage ? styles["navbar--homepage"] : styles.navbar}>
      <div className={styles["navbar__options-container"]}>
        <Link href="/" className={styles.hamburger}>
          <Image
            src="/assets/shared/tablet/icon-hamburger.svg"
            width={16}
            height={15}
            alt="Hamburger Icon"
          />
        </Link>

        <Link href="/">
          <Image
            src="/assets/shared/desktop/logo.svg"
            width={140}
            height={25}
            alt="The Audiophile Logo, Audiophile written in white letters"
          />
        </Link>

        <div className={styles.options}>
          <Link href="/" className={styles.button__link}>
            Home
          </Link>
          <Link href="/headphones" className={styles.button__link}>
            Headphones
          </Link>
          <Link href="/speakers" className={styles.button__link}>
            Speakers
          </Link>
          <Link href="/earphones" className={styles.button__link}>
            Earphones
          </Link>
        </div>

        <Link href="/">
          <Image
            src="/assets/shared/desktop/icon-cart.svg"
            width={23}
            height={20}
            alt="Cart Icon"
            className={styles.cart}
          />
        </Link>
      </div>
    </nav>
  );
}
