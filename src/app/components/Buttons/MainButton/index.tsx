import Link from "next/link";

import styles from "../styles.module.scss";

interface PrimaryButtonProps {
  link?: string;
  name: string;
  type: "primary" | "secondary";
}

export default function MainButton({ link, name, type }: PrimaryButtonProps) {
  return link ? (
    <Link href={link}>
      <button
        className={
          type === "primary"
            ? styles["button--primary"]
            : styles["button--secondary"]
        }
      >
        {name}
      </button>
    </Link>
  ) : (
    <button
      className={
        type === "primary"
          ? styles["button--primary"]
          : styles["button--secondary"]
      }
    >
      {name}
    </button>
  );
}
