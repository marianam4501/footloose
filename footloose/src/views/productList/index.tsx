import { useRecoilState } from "recoil";
import { productState } from "../../atoms/productState";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ProductList from "../../components/productList/productList";
import { useEffect } from "react";
import { products } from "../../utils/data";
import ListPagination from "../../components/pagination/pagination";
import Filter from "../../components/filters/filters";


const ProductListView = () => {

    const [, setProductList] = useRecoilState(productState);

    useEffect(() => {
        setProductList(products());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return(
        <>
            <Header />
            <Filter/>
            <ProductList/>
            <ListPagination />
            <Footer>
            <></>
            </Footer>
        </>
    )
}

export default ProductListView;