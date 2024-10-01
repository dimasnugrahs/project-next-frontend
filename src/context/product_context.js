import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const url = process.env.REACT_APP_API_URL;
  const user = JSON.parse(localStorage.getItem("user"));
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${url}/products`);

      // Memotong array hasil response menjadi 14 data
      const limitedData = response.data.slice(0, 14);

      // Menetapkan data yang telah dipotong ke state
      setProducts(limitedData);
    } catch (err) {
      console.log(err);
    }
  };

  const getProductById = async (id) => {
    try {
      const response = await axios.get(`${url}/products/${id}`);

      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        product,
        getProductById,
        setProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
