import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useEffect } from "react";
import Cart from "../../components/cart/cart";


const CartView = () => {

    useEffect(() => {
        
    }, []);
    
    return(
        <>
            <Header />
            <Cart></Cart>
            <Footer>
            <></>
            </Footer>
        </>
    )
}

export default CartView;