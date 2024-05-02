import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/cartState";
import { CartProductObject } from "../../utils/cartProductObject";
import CartProduct from "../cartProduct/cartProduct";
import "./styles.scss";
import { FC, useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';


interface CartProps {
    //children: React.ReactNode;
    //product: CartProductObject
    //handleTrash: handleClickFunc
}

const Cart: FC<CartProps> = () => {
    const [cartList, setCartList] = useRecoilState(cartState);
    const [total, setTotal] = useState<number>(0);
    const [noProducts, setNoProducts] = useState(false);
    
    const navigate = useNavigate();

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

        if(cartList.length > 0){
            setNoProducts(false);
        } else { setNoProducts(true) }
        
    }, [cartList]);

    const updateQuantity = (quantity: number, productId: string) => {
        //console.log("new quantity for product",productId, "q",quantity);
        setCartList((prevCartList) =>
            prevCartList.map((cartProduct) =>
              cartProduct.id === productId ? { ...cartProduct, quantity } : cartProduct
            )
        );
        //console.log("new list", cartList);
    }

    return(
        <>
        <div className="cart">
            {!noProducts ? <div className="cart__productList">
                {cartList.map((cartProduct: CartProductObject) => {
                    return <CartProduct checkout={false} updateQuantity={updateQuantity} product={cartProduct} handleTrash={() => handleTrash(cartProduct)}></CartProduct>
                })}
            </div> : <h1>There are no products added to cart.</h1>}
            <div className="cart__summary">
                <h1 id="summary">Summary</h1>
                <p className="cart__summary__total">Total: ${total}</p>
                <Button id="checkout" disabled={!noProducts ? false : true} onClick={() => {navigate("/checkout")}}>Checkout</Button>
            </div>
        </div>
        </>
    );
};

export default Cart;