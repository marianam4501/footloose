import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useEffect } from "react";
import Checkout from "../../components/checkout/checkout";


const CartView = () => {

    useEffect(() => {
        
    }, []);
    
    return(
        <>
            <Header />
            <Checkout></Checkout>
            <Footer>
            <></>
            </Footer>
        </>
    )
}

export default CartView;