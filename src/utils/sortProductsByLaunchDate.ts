export function sortProductsByLaunchDate(products: ProductType[]) {
  return products.sort((a, b) => {
    if(a.new && !b.new) {
      return -1;
    }

    if(!a.new && b.new) {
      return 1;
    }

    return 0;
  })
}