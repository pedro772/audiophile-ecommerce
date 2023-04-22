import { getData } from "@/app/api/data/getData";
import { sortProductsByLaunchDate } from "@/utils/sortProductsByLaunchDate";
import { CategoryHeader } from "@/app/components/CategoryHeader";
import { CategoryProduct } from "@/app/components/CategoryProduct";

import styles from "../styles.module.scss";

export default async function Headphones() {
  const data = sortProductsByLaunchDate(
    (await getData()).filter((product) => product.category === "headphones")
  );

  return (
    <>
      <CategoryHeader title="HEADPHONES" />
      <section className={styles.products}>
        {data.map((product, position) => (
          <CategoryProduct
            key={product.id}
            imagePath={product.categoryImage.mobile}
            isNewProduct={product.new}
            name={product.name}
            description={product.description}
            slug={product.slug}
            arrayPosition={position}
          />
        ))}
      </section>
    </>
  );
}
