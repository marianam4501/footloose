import { useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../atoms/userState";

const useAddToCart = () => {
  //const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setError] = useState<string | null>(null);
  const user = useRecoilValue(userState);

  const addToCart = async (productId: number, quantity: number, size: string) => {
    if (!user) {
      setError("User is not logged in.");
    } else {
        const newCartProduct = {
            product: { id: productId },
            quantity,
            size,
          };
      
          //setLoading(true);
      
          try {
            await axios.post('http://localhost:8080/cart/addProduct', newCartProduct, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            });
          } catch (error) {
            setError("Error adding product to cart.");
            console.error("Error adding product to cart:", error);
          } finally {
            //setLoading(false);
          }
    }
  };

  return { addToCart, errorMessage }; // Devolver solo addToCart y errorMessage
};

export default useAddToCart;
