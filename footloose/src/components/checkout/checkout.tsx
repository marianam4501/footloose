import { useEffect, useState } from "react";
import CardForm from "../creditCardForm/creditCardForm";
import ShippingAddressForm from "../shippingAddressForm/shippingAddressForm";
import { Button } from "react-bootstrap";
import "./styles.scss";
import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/cartState";
import CartProduct from "../cartProduct/cartProduct";
import { CartProductObject } from "../../utils/cartProductObject";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const [cartList, setCartList] = useRecoilState(cartState);
  const [total, setTotal] = useState<number>(0);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [shippingReady, setShippingReady] = useState<boolean>(false);
  const [cardReady, setCardReady] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let newTotal = 0;
    if (cartList.length > 0) {
      cartList.forEach((product) => {
        const price = product.quantity * product.product.price;
        newTotal += price;
      });
    }
    setTotal(newTotal);
  }, [cartList]);

  useEffect(() => {
    if (cardReady && shippingReady) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [cardReady, shippingReady]);

  const handleCompleteOrder = () => {
    setCartList([]);
    toast.success("Order completed. Thank you!");
    navigate("/");
  };

  const handleCardReady = (ready: boolean) => {
    setCardReady(ready);
  };

  const handleShippingReady = (ready: boolean) => {
    setShippingReady(ready);
  };

  return (
    <div className="checkout">
      <div className="checkout__details">
        <div className="checkout__forms">
          <ShippingAddressForm handleReady={handleShippingReady}/>
          <CardForm handleReady={handleCardReady}/>
        </div>
        <div className="checkout__details__list">
          <p className="checkout__details__list__title">Products</p>
          <div className="chechout__products">
            {cartList.map((cartProduct: CartProductObject) => {
              return (
                <CartProduct
                  checkout={true}
                  updateQuantity={() => {}}
                  product={cartProduct}
                  handleTrash={() => {}}
                ></CartProduct>
              );
            })}
          </div>
        </div>
      </div>
      <div className="checkout__summary">
        <h1 id="summary">Summary</h1>
        <div className="checkout__summary__total">
          <div className="checkout--justify">
            <p className="checkout__summary__total__value">Subtotal:</p>
            <p className="checkout__summary__total__value">${total}</p>
          </div>
          <div className="checkout--justify">
            <p className="checkout__summary__total__value">Taxes:</p>
            <p className="checkout__summary__total__value">
              ${(total * 0.13).toFixed(2)}
            </p>
          </div>
          <div className="checkout--justify checkout__summary__total__total">
            <p>Total:</p>
            <p>${(total * 0.13 + total).toFixed(2)}</p>
          </div>
        </div>
        <Button
          id="checkout"
          onClick={handleCompleteOrder}
          disabled={submitDisabled}
        >
          Complete order
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
