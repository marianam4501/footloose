import "./styles.scss";
import { FC, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { OrderObject } from "../../utils/orderObject";
import { orderState } from "../../atoms/orderState";
import CartProduct from "../cartProduct/cartProduct";
import { CartProductObject } from "../../utils/cartProductObject";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

interface OrderDetailsProps {
  //children: React.ReactNode;
}

const OrderDetails: FC<OrderDetailsProps> = (/*{children}*/) => {
  const { id } = useParams<{ id?: string }>();
  const [order, setOrder] = useState<OrderObject>({
    id: 0,
    address: "",
    address2: "",
    city: "",
    province: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    subtotal: 0,
    taxes: 0,
    total: 0,
    orderStatus: "",
    createdAt: "",
    products: [],
    owner: 0,
});
  const orders = useRecoilValue(orderState);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loading && id) {
        const foundOrder = orders.find((order) => order.id === parseInt(id));
        if (foundOrder) {
          setOrder(foundOrder);
          setLoading(false);
        }
      }
  }, [loading]);

  return (
    <>
      {loading ? (
        <div className="orderDetails__spinner">
            <Spinner className="spinner" animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
      ) : (
        <div className="orderDetails">
          <h1>Order #{order.id}</h1>
          <h2>Status: {order.orderStatus}</h2>
          <div className="orderDetails__container">
            <div>
                <h2>Shipping Information</h2>
                <p>Address: {order.address}</p>
                <p>Address 2: {order.address2}</p>
                <p>City: {order.city}</p>
                <p>Province: {order.province}</p>
                <p>Zip Code: {order.zipCode}</p>
            </div>
            <div>
                <h2>Card Information</h2>
                <p>Cardholder's name: {order.cardName}</p>
                <p>Card Number: **** **** **** *{order.cardNumber}</p>
            </div>
            <div>
                <h2>Summary Information</h2>
                <p>Subtotal: {order.subtotal.toFixed(2)}</p>
                <p>Taxes: {order.taxes.toFixed(2)}</p>
                <p>Total: {order.total.toFixed(2)}</p>
            </div>
          </div>
          <h2>Products Information</h2>
          <div className="orderDetails__products">
          {order.products.map((cartProduct: CartProductObject) => {
                    return <CartProduct checkout={true} product={cartProduct}></CartProduct>
            })}
          </div>
          

        </div>
      )}
    </>
  );
};

export default OrderDetails;
