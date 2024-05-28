import { useEffect, useState } from "react";
import CardForm from "../creditCardForm/creditCardForm";
import ShippingAddressForm from "../shippingAddressForm/shippingAddressForm";
import { Button } from "react-bootstrap";
import "./styles.scss";
import CartProduct from "../cartProduct/cartProduct";
import { CartProductObject } from "../../utils/cartProductObject";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/userState";
import axios from "axios";
import { cartState } from "../../atoms/cartState";

const Checkout = () => {
  const cart = useRecoilValue(cartState);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);
  const [shippingReady, setShippingReady] = useState<boolean>(false);
  const [cardReady, setCardReady] = useState(false);
  const [shippingAddress, setShippingAddress] = useState<any>({});
  const [cardDetails, setCardDetails] = useState<any>({});
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  useEffect(() => {
    if (cardReady && shippingReady && cart.products.length > 0) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [cardReady, shippingReady]);

  const handleCompleteOrder = async () => {
    console.log("asd1");
    if (
      !cardDetails ||
      !cardDetails.cardNumber ||
      !cardDetails.cardName ||
      !cardDetails.expiryDate ||
      !cardDetails.cvv
    ) {
      console.log("asd2");

      toast.error("Missing card details. Please check your card information.");
      return;
    }
    console.log("asd3");

    console.log("Listos para completar la orden.");

    try {
      const response = await axios.post(
        "http://localhost:8080/order/complete",
        {
          address: shippingAddress.address,
          address2: shippingAddress.address2,
          city: shippingAddress.city,
          province: shippingAddress.province,
          zipCode: shippingAddress.zipCode,
          cardNumber: cardDetails.cardNumber.slice(-4),
          cardName: cardDetails.cardName,
          expiryDate: cardDetails.expiryDate,
          cvv: cardDetails.cvv,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log("Ya se llamo.");
      if (response.status === 200) {
        console.log("200");
        toast.success("Order completed. Thank you!");
        navigate("/");
      }
    } catch (error) {
      console.log("Error.");
      toast.error("Failed to complete order. Please try again.");
    }
  };

  const handleCardReady = (
    ready: boolean,
    info: {
      cardNumber: string;
      cardName: string;
      expiryDate: string;
      cvv: string;
    }
  ) => {
    setCardReady(ready);
    setCardDetails(info);
  };

  const handleShippingReady = (
    ready: boolean,
    info: {
      address: string;
      address2: string;
      city: string;
      province: string;
      zipCode: string;
    }
  ) => {
    setShippingReady(ready);
    setShippingAddress(info);
  };

  return (
    <div className="checkout">
      <div className="checkout__details">
        <div className="checkout__forms">
          <ShippingAddressForm handleReady={handleShippingReady} />
          <CardForm handleReady={handleCardReady} />
        </div>
        <div className="checkout__details__list">
          <p className="checkout__details__list__title">Products</p>
          <div className="chechout__products">
            {cart.products.map((cartProduct: CartProductObject) => {
              return (
                <CartProduct
                  checkout={true}
                  product={cartProduct}
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
            <p className="checkout__summary__total__value">${cart.subtotal}</p>
          </div>
          <div className="checkout--justify">
            <p className="checkout__summary__total__value">Taxes:</p>
            <p className="checkout__summary__total__value">
              ${cart.taxes.toFixed(2)}
            </p>
          </div>
          <div className="checkout--justify checkout__summary__total__total">
            <p>Total:</p>
            <p>${cart.total.toFixed(2)}</p>
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
