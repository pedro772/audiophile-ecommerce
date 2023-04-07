import Link from "next/link";

import styles from "../styles.module.scss";
import Image from "next/image";

interface PrimaryButtonProps {
  link?: string;
  name: string;
  iconPath: string;
  iconAlt: string;
  iconBeforeText?: boolean;
}

export default function TertiaryButton({
  link,
  name,
  iconPath,
  iconAlt,
  iconBeforeText,
}: PrimaryButtonProps) {
  return link ? (
    <Link href={link}>
      <button className={styles["button--tertiary"]}>
        {iconBeforeText ? (
          <>
            <Image src={iconPath} width={5} height={10} alt={iconAlt} />
            {name}
          </>
        ) : (
          <>
            {name}
            <Image src={iconPath} width={5} height={10} alt={iconAlt} />
          </>
        )}
      </button>
    </Link>
  ) : (
    <button className={styles["button--tertiary"]}>
      {iconBeforeText ? (
        <>
          <Image src={iconPath} width={5} height={10} alt={iconAlt} />
          {name}
        </>
      ) : (
        <>
          {name}
          <Image src={iconPath} width={5} height={10} alt={iconAlt} />
        </>
      )}
    </button>
  );
}
