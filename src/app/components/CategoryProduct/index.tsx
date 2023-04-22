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
}

export function CategoryProduct({
  imagePath,
  isNewProduct,
  name,
  description,
  slug,
}: CategoryProductProps) {
  const { innerWidth } = useWindowSize();
  const responsiveImagePath = getResponsiveImagePath(imagePath, innerWidth);
  console.log(responsiveImagePath);
  return (
    <div className={styles.product}>
      <div className={styles.product__image}>
        <Image src={responsiveImagePath} alt="Product Image" fill />
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
