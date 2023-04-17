import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <Image
          src="/assets/shared/desktop/logo.svg"
          width={140}
          height={25}
          alt="The Audiophile Logo, Audiophile written in white letters"
          className={styles.footer__logo}
        />

        <div className={styles.footer__pages}>
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

        <p className={styles.footer__description}>
          {`Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we're open 7 days a week.`}
        </p>

        <p className={styles.footer__copyright}>
          Copyright 2021. All Rights Reserved
        </p>

        <div className={styles.footer__socials}>
          <Link href="/">
            <Image
              src="/assets/shared/desktop/icon-facebook.svg"
              width={24}
              height={24}
              alt="Facebook logo in black and white"
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/shared/desktop/icon-twitter.svg"
              width={24}
              height={24}
              alt="Twitter logo in black and white"
            />
          </Link>
          <Link href="/">
            <Image
              src="/assets/shared/desktop/icon-instagram.svg"
              width={24}
              height={24}
              alt="Instagram logo in black and white"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
