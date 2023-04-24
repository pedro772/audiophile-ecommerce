"use client";
import { useEffect } from "react";

import { useModalContext } from "@/app/context/modal";

import styles from "./styles.module.scss";

export default function Modal() {
  const { showModal, modalContent } = useModalContext();

  useEffect(() => {
    showModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showModal]);

  return (
    <div className={[styles.modal, showModal ? styles.show : ""].join(" ")}>
      {modalContent}
    </div>
  );
}
