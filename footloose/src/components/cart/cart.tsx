import { CartProductObject } from "../../utils/cartProductObject";
import CartProduct from "../cartProduct/cartProduct";
import "./styles.scss";
import { FC, useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from "recoil";
import { cartState } from "../../atoms/cartState";
import axios from "axios";
import { CartObject } from "../../utils/cartObject";
import { userState } from "../../atoms/userState";


interface CartProps {
    //children: React.ReactNode;
    //product: CartProductObject
    //handleTrash: handleClickFunc
}

const Cart: FC<CartProps> = () => {
    const [cart, setCart] = useRecoilState(cartState);
    const user = useRecoilValue(userState);
    const [noProducts, setNoProducts] = useState(true);
    const [loading, setLoading] = useState<boolean>(true);
    
    const navigate = useNavigate();

    


    useEffect(() => {
        console.log("cart products",cart.products);
        if(cart){
          if(cart.products.length > 0){
            console.log(cart.products);
            setNoProducts(false);
          } else { setNoProducts(true) }
        }
    }, [cart]);

    useEffect(() => {
        if(loading){
            const fetchCart = async () => {
                try {
                  const response = await axios.get<CartObject>('http://localhost:8080/cart', {
                    headers: {
                      Authorization: `Bearer ${user.token}`,
                    },
                  });
                  setCart(response.data);
                } catch (error) {
                  //setError("Error fetching cart.");
                  console.error("Error fetching cart:", error);
                } finally {
                  setLoading(false);
                  console.log("products",cart.products.length);
                  if(cart.products.length > 0){
                    console.log(cart.products);
                    setNoProducts(false);
                  } else { setNoProducts(true) }
                }
            };
            fetchCart();
        }
    },[loading])

    return(
        <>
        <div className="cart">
            {!noProducts ? <div className="cart__productList">
                {cart.products.map((cartProduct: CartProductObject) => {
                    return <CartProduct checkout={false} product={cartProduct}></CartProduct>
                })}
            </div> : <h1>There are no products added to cart.</h1>}
            <div className="cart__summary">
                <h1 id="summary">Summary</h1>
                <p className="cart__summary__total">Subtotal: ${cart.subtotal}</p>
                <Button id="checkout" disabled={!noProducts ? false : true} onClick={() => {navigate("/checkout")}}>Checkout</Button>
            </div>
        </div>
        </>
    );
};

export default Cart;