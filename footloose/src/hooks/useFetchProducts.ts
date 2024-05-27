// src/hooks/useFetchProducts.ts
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { ProductObject } from "../utils/productObject";
import { productState } from "../atoms/productState";

const useFetchProducts = () => {
  const [productList, setProductList] = useRecoilState(productState);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<ProductObject[]>('http://localhost:8080/product');
        setProductList(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [setProductList]);

  return {productList, loading};
};

export default useFetchProducts;
