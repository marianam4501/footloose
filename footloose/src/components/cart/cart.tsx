import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/cartState";
import { CartProductObject } from "../../utils/cartProductObject";
import CartProduct from "../cartProduct/cartProduct";
import "./styles.scss";
import { FC, useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


interface CartProps {
    //children: React.ReactNode;
    //product: CartProductObject
    //handleTrash: handleClickFunc
}

const Cart: FC<CartProps> = () => {
    const [cartList, setCartList] = useRecoilState(cartState);
    const [total, setTotal] = useState<number>(0);

    const handleTrash = (productToRemove: CartProductObject) => {
        setCartList((prevCartList: CartProductObject[]) =>
            prevCartList.filter((cartProduct) => cartProduct.id !== productToRemove.id)
        );
    };

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
        console.log(cartList);
        
    }, []);

    const updateQuantity = (quantity: number, productId: string) => {
        console.log("new quantity for product",productId, "q",quantity);
        setCartList((prevCartList) =>
            prevCartList.map((cartProduct) =>
              cartProduct.id === productId ? { ...cartProduct, quantity } : cartProduct
            )
        );
        console.log("new list", cartList);
    }

    return(
        <>
        <div className="cart">
            <div className="cart__productList">
                {cartList.map((cartProduct: CartProductObject) => {
                    return <CartProduct checkout={false} updateQuantity={updateQuantity} product={cartProduct} handleTrash={() => handleTrash(cartProduct)}></CartProduct>
                })}
            </div>
            <div id="vline"></div>
            <div className="cart__summary">
                <h1 id="summary">Summary</h1>
                <p className="cart__summary__total">Total: ${total}</p>
                <Button id="checkout"><Link className="cart__summary__checkout" to="/checkout">Checkout</Link></Button>
            </div>
        </div>
        </>
    );
};

export default Cart;