import ScrollUp from "@/app/components/ScrollUp";

import { getData } from "@/app/api/data/getData";
import { AboutUs } from "@/app/components/AboutUs";
import { Categories } from "@/app/components/Categories";
import { Navbar } from "@/app/components/Navbar";
import { Product } from "@/app/components/Product";
import { GoBackButton } from "@/app/components/Buttons/GoBackButton";

import styles from "./styles.module.scss";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = await getData();
  const mainProduct = data.filter((product) => product.slug === params.slug)[0];

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <GoBackButton />
        <Product product={mainProduct} />
        <Categories />
        <AboutUs />
      </main>
      <ScrollUp />
    </>
  );
}
