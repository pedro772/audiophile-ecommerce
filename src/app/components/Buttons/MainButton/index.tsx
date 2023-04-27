import Link from "next/link";

import styles from "../styles.module.scss";

interface PrimaryButtonProps {
  link?: string;
  name: string;
  type: "primary" | "secondary";
  handleClick?: (_?: any) => void;
}

export default function MainButton({
  link,
  name,
  type,
  handleClick,
}: PrimaryButtonProps) {
  return link ? (
    <Link href={link}>
      <button
        className={
          type === "primary"
            ? styles["button--primary"]
            : styles["button--secondary"]
        }
        onClick={handleClick && handleClick}
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
      onClick={handleClick && handleClick}
    >
      {name}
    </button>
  );
}
