import { createContext, useEffect, useState } from "react";

export const productContext = createContext("");

function DataProvider({ children }) {
  const [products, setProducts] = useState([]);

  async function productsData() {
    const url = await fetch("https://dummyjson.com/products");
    const jsonData = await url.json();
    setProducts(jsonData.products);
  }

  // console.log(products);

  useEffect(() => {
    productsData();
  }, []);

  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
}

export default DataProvider;
