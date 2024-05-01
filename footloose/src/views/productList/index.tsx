import { useRecoilState } from "recoil";
import { productState } from "../../atoms/productState";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import ProductList from "../../components/productList/productList";
import { useEffect } from "react";
import { products } from "../../utils/data";
import ListPagination from "../../components/pagination/pagination";
import Filter from "../../components/filters/filters";


const ProductListView = () => {

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
            <Filter/>
            <ProductList>
                <></>
            </ProductList>
            <ListPagination />
            <Footer>
            <></>
            </Footer>
        </>
    )
}

export default ProductListView;