import Link from "next/link";

import styles from "../styles.module.scss";

interface CheckoutButtonProps {
  link?: string;
  name: string;
  handleClick?: (_?: any) => void;
}

export default function CheckoutButton({
  link,
  name,
  handleClick,
}: CheckoutButtonProps) {
  return link ? (
    <Link href={link}>
      <button
        className={styles["button--checkout"]}
        onClick={handleClick && handleClick}
      >
        {name}
      </button>
    </Link>
  ) : (
    <button
      className={styles["button--checkout"]}
      onClick={handleClick && handleClick}
    >
      {name}
    </button>
  );
}
