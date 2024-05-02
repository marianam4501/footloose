import { Button } from "react-bootstrap";
import { CartProductObject } from "../../utils/cartProductObject";
import "./styles.scss";
import { FC, useEffect, useState } from "react";

type updateFunc = (quantity: number, productId: string) => void;

interface QuantityProps {
  //children: React.ReactNode;
  product: CartProductObject;
  updateQuantity: updateFunc;
}

const Quantity: FC<QuantityProps> = ({ product, updateQuantity }) => {
  const [quantity, setQuantity] = useState(product.quantity);

  const handleDecrement = () => {
    if (quantity > 1) {
      //console.log("quantity - 1",quantity - 1);
      setQuantity(quantity - 1);
    }
    //console.log("quantity",quantity);
  };

  const handleIncrement = () => {
    //console.log("quantity + 1",quantity + 1);
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    updateQuantity(quantity, product.id);
    //console.log("quantity",quantity);
  }, [quantity]);

  return (
    <>
      <div className="quantity">
        <p className="quantity__title">Quantity: </p>
        <Button id="quantity__btn" onClick={handleDecrement}>
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
