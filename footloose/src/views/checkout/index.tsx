import Checkout from "../../components/checkout/checkout";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { useEffect } from "react";


const CheckoutView = () => {

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

export default CheckoutView;