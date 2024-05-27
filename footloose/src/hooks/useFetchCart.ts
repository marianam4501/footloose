import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../atoms/cartState";
import { userState } from "../atoms/userState";
import { CartObject } from "../utils/cartObject";

const useFetchCart = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useRecoilState(cartState);
  const user = useRecoilValue(userState);
  
  const fetchCart = async () => {
    setLoading(true);
    try {
      const response = await axios.get<CartObject>('http://localhost:8080/cart', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      setCart(response.data);
    } catch (error) {
      setError("Error fetching cart.");
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  return { cart, setCart, loading, error, fetchCart };
};

export default useFetchCart;
