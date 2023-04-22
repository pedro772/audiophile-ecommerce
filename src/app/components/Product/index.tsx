"use client";

import Image from "next/image";
import { useWindowSize } from "rooks";
import { getResponsiveImagePath } from "@/utils/getResponsiveImagePath";

import styles from "./styles.module.scss";
import MainButton from "../Buttons/MainButton";

interface ProductProps {
  product: ProductType;
}

export function Product({ product }: ProductProps) {
  const { innerWidth } = useWindowSize();
  const mainImageResponsivePath = getResponsiveImagePath(
    product.image.mobile,
    innerWidth
  );
  const galleryResponsivePaths = {
    first: getResponsiveImagePath(product.gallery.first.mobile, innerWidth),
    second: getResponsiveImagePath(product.gallery.second.mobile, innerWidth),
    third: getResponsiveImagePath(product.gallery.third.mobile, innerWidth),
  };
  const productFeatures = product.features.split("\n");

  return (
    <div className={styles.product}>
      <header className={styles.product__header}>
        <div className={styles.product__image}>
          <Image
            src={mainImageResponsivePath}
            alt="Product Image"
            fill
            style={{ borderRadius: "8px" }}
          />
        </div>
        <div className={styles.product__info}>
          {product.new && (
            <span className={styles.product__launch}>NEW PRODUCT</span>
          )}
          <h2 className={styles.product__name}>{product.name}</h2>
          <p className={styles.product__description}>{product.description}</p>
          <span className={styles.product__price}>$ {product.price}</span>
          <div>
            <div></div>
            <MainButton type="primary" name="ADD TO CART" />
          </div>
        </div>
      </header>

      <section className={styles.product__details}>
        <section className={styles.product__features}>
          <h3 className={styles["product__features--header"]}>FEATURES</h3>
          <div className={styles["product__features--description"]}>
            {productFeatures.map((productFeature, i) => {
              if (i % 2 === 0) {
                if (i + 1 < productFeatures.length) {
                  return (
                    <p key={i}>
                      {productFeature}
                      <br />
                      <br />
                    </p>
                  );
                }

                return <p key={i}>{productFeature}</p>;
              }
            })}
          </div>
        </section>

        <section className={styles.content}>
          <h3 className={styles.content__header}>IN THE BOX</h3>
          <div className={styles.content__items}>
            {product.includes.map((item) => {
              return (
                <div key={item.item} className={styles.content__item}>
                  <p className={styles["content__item--quantity"]}>
                    {item.quantity}x
                  </p>
                  <p className={styles["content__item--name"]}>{item.item}</p>
                </div>
              );
            })}
          </div>
        </section>
      </section>

      <section className={styles.product__gallery}>
        <div className={styles["product__gallery--first"]}>
          <Image
            src={galleryResponsivePaths.first}
            alt="Product Image"
            fill
            style={{ borderRadius: "8px" }}
          />
        </div>
        <div className={styles["product__gallery--second"]}>
          <Image
            src={galleryResponsivePaths.second}
            alt="Product Image"
            fill
            style={{ borderRadius: "8px" }}
          />
        </div>
        <div className={styles["product__gallery--third"]}>
          <Image
            src={galleryResponsivePaths.third}
            alt="Product Image"
            fill
            style={{ borderRadius: "8px" }}
          />
        </div>
      </section>

      <section className={styles.product__related}>
        <h3 className={styles["product__related--header"]}>
          YOU MAY ALSO LIKE
        </h3>
        <div className={styles.related__products}>
          {product.others.map((relatedProduct) => {
            const relatedProductResponsiveImagePath = getResponsiveImagePath(
              relatedProduct.image.mobile,
              innerWidth
            );
            return (
              <div
                key={relatedProduct.name}
                className={styles.related__product}
              >
                <div className={styles.related__image}>
                  <Image
                    src={relatedProductResponsiveImagePath}
                    alt="Related Product Image"
                    fill
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div className={styles.related__info}>
                  <h4 className={styles.related__name}>
                    {relatedProduct.name}
                  </h4>
                  <MainButton
                    link={`product/${relatedProduct.slug}`}
                    type="primary"
                    name="SEE PRODUCT"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
