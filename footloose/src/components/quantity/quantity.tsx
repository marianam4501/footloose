import { Button } from "react-bootstrap";
import { CartProductObject } from "../../utils/cartProductObject";
import "./styles.scss";
import { FC, useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../atoms/userState";
import { cartState } from "../../atoms/cartState";

//type updateFunc = (quantity: number, productId: string) => void;

interface QuantityProps {
  //children: React.ReactNode;
  product: CartProductObject;
  //updateQuantity: updateFunc;
}

const Quantity: FC<QuantityProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const user = useRecoilValue(userState);
  const [disable, setDisable] = useState(false);
  const [, setCart] = useRecoilState(cartState);

  async function handleDecrement(){
    if (quantity > 1) {
      //console.log("quantity - 1",quantity - 1);
      //setQuantity(quantity - 1);

      try {
        const response = await axios.put('http://localhost:8080/cart/decreaseQuantity', { id: product.id }, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setCart(response.data);
        setQuantity(quantity - 1);
      } catch (error) {
        console.error("Error adding product to cart:", error);
      } finally {
        //setLoading(false);
      }
    } 
    //console.log("quantity",quantity);
  }

  useEffect(() => {
    if(quantity === 1){
      setDisable(true);
    }
  }, [quantity]);

  async function handleIncrement() {
    //console.log("quantity + 1",quantity + 1);
    //setQuantity(quantity + 1);
    try {
      const response = await axios.put('http://localhost:8080/cart/increaseQuantity', { id: product.id }, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setCart(response.data);
      setQuantity(quantity + 1);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    } finally {
      //setLoading(false);
      setDisable(false);
    }
  }

  return (
    <>
      <div className="quantity">
        <p className="quantity__title">Quantity: </p>
        <Button id="quantity__btn" disabled={disable} onClick={handleDecrement}>
          -
        </Button>
        <label className="quantity__text">{quantity}</label>
        <Button id="quantity__btn" onClick={handleIncrement}>
          +
        </Button>
      </div>
    </>
  );
};

export default Quantity;
