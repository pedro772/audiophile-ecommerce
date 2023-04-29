import Link from "next/link";

import styles from "../styles.module.scss";

interface CheckoutButtonProps {
  link?: string;
  form?: string;
  name: string;
  handleClick?: (_?: any) => void;
}

export default function CheckoutButton({
  link,
  form,
  name,
  handleClick,
}: CheckoutButtonProps) {
  return link ? (
    <Link href={link} style={{ width: "100%" }}>
      <button
        className={styles["button--checkout"]}
        onClick={handleClick && handleClick}
        type={form ? "submit" : "button"}
        form={form}
      >
        {name}
      </button>
    </Link>
  ) : (
    <button
      className={styles["button--checkout"]}
      onClick={handleClick && handleClick}
      type={form ? "submit" : "button"}
      form={form}
    >
      {name}
    </button>
  );
}
