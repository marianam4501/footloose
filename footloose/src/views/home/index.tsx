import { useRecoilState } from "recoil";
import { productState } from "../../atoms/productState";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import ProductList from "../../components/productList/productList";
import { useEffect } from "react";
import { products } from "../../utils/data";


const Home = () => {

    const [productList, setProductList] = useRecoilState(productState);

    useEffect(() => {
        
        setProductList(products());

        
    }, []);
    
    return(
        <>
            <Header />
            <Hero>
            <></>
            </Hero>
            <ProductList>
                <></>
            </ProductList>
            <Footer>
            <></>
            </Footer>
        </>
    )
}

export default Home;