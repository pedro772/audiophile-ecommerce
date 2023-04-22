"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import MainButton from "../Buttons/MainButton";
import { useWindowSize } from "rooks";
import { getResponsiveImagePath } from "@/utils/getResponsiveImagePath";

interface CategoryProductProps {
  imagePath: string;
  isNewProduct: boolean;
  name: string;
  description: string;
  slug: string;
  arrayPosition: number;
}

export function CategoryProduct({
  imagePath,
  isNewProduct,
  name,
  description,
  slug,
  arrayPosition,
}: CategoryProductProps) {
  const { innerWidth } = useWindowSize();
  const responsiveImagePath = getResponsiveImagePath(imagePath, innerWidth);
  return (
    <div
      className={
        arrayPosition % 2 === 0 ? styles.product : styles["product--reverse"]
      }
    >
      <div className={styles.product__image}>
        <Image
          src={responsiveImagePath}
          alt="Product Image"
          fill
          style={{ borderRadius: "8px" }}
        />
      </div>
      <div className={styles.product__info}>
        {isNewProduct && (
          <span className={styles.product__launch}>NEW PRODUCT</span>
        )}
        <h2 className={styles.product__name}>{name}</h2>
        <p className={styles.product__description}>{description}</p>
        <MainButton link={slug} type="primary" name="SEE PRODUCT" />
      </div>
    </div>
  );
}
