import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
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
        <Link href="/" className={styles.button__link}>
          Headphones
        </Link>
        <Link href="/" className={styles.button__link}>
          Speakers
        </Link>
        <Link href="/" className={styles.button__link}>
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
    </nav>
  );
}
