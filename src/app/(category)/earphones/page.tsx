import { getData } from "@/app/api/data/getData";
import { CategoryHeader } from "@/app/components/CategoryHeader";
import { CategoryProduct } from "@/app/components/CategoryProduct";

async function Earphones() {
  const data = await getData();

  return (
    <>
      <CategoryHeader title="EARPHONES" />
      {data.map((product) =>
        product.category === "earphones" ? (
          <CategoryProduct
            key={product.id}
            imagePath={product.categoryImage.mobile}
            isNewProduct={product.new}
            name={product.name}
            description={product.description}
            slug={product.slug}
          />
        ) : null
      )}
    </>
  );
}

export default Earphones;
