import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [prod, setProd] = useState({});
  const { id } = useParams();

  function productsData() {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProd(res));
  }

  console.log(prod);

  useEffect(() => {
    productsData();
  }, []);

  return <div>{prod.title}</div>;
}

export default ProductDetails;
