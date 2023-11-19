import { useContext } from "react";
import Card from "../Components/Card";
import { productContext } from "../ContextApi/DataProvider";

function Products() {
  const { products } = useContext(productContext);
  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product) => (
        <Card key={product.id} cardData={product} />
      ))}
    </div>
  );
}

export default Products;
