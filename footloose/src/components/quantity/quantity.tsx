import { Button } from "react-bootstrap";
import { CartProductObject } from "../../utils/cartProductObject";
import "./styles.scss";
import { FC, useState } from "react";

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
      setQuantity(quantity - 1);
    }
    console.log("q",quantity);
    updateQuantity(quantity, product.id);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    console.log("q",quantity);
    updateQuantity(quantity, product.id);
  };
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
