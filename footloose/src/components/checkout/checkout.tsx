import React, { useEffect, useState } from "react";
import CardForm from "../creditCardForm/creditCardForm";
import ShippingAddressForm from "../shippingAddressForm/shippingAddressForm";
import { Button } from "react-bootstrap";
import "./styles.scss";
import { useRecoilValue } from "recoil";
import { cartState } from "../../atoms/cartState";
import CartProduct from "../cartProduct/cartProduct";
import { CartProductObject } from "../../utils/cartProductObject";

const Checkout = () => {
  const cartList = useRecoilValue(cartState);
  const [total, setTotal] = useState<number>(0);

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

  return (
    <div className="checkout">
      <div className="checkout__details">
        <div className="checkout__forms">
          <ShippingAddressForm />
          <CardForm />
        </div>
        <div className="checkout__details__list">
          <p className="checkout__details__list__title">Products</p>
          <div className="cart__productList">
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
          <p className="checkout__summary__total__value">Subtotal: ${total}</p>
          <p className="checkout__summary__total__value">
            Taxes: ${total * 0.13}
          </p>
          <p className="checkout__summary__total__total">
            Total: ${total * 0.13 + total}
          </p>
        </div>
        <Button id="checkout">Complete order</Button>
      </div>
    </div>
  );
};

export default Checkout;
