"use client";

import { useRouter } from "next/navigation";

import styles from "./styles.module.scss";

export function GoBackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={styles.back}>
      Go Back
    </button>
  );
}
