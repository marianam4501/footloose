import { useRecoilState } from "recoil";
import { productState } from "../../atoms/productState";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import ProductList from "../../components/productList/productList";
import { useEffect } from "react";
import { products } from "../../utils/data";
import { categoryState } from "../../atoms/categoryState";
import { sizeState } from "../../atoms/sizeState";
import { brandState } from "../../atoms/brandState";


const ProductListView = () => {

    const [productList, setProductList] = useRecoilState(productState);
    const [categoryList, setCategoryList] = useRecoilState(categoryState);
    const [sizeList, setSizeList] = useRecoilState(sizeState);
    const [brandList, setBrandList] = useRecoilState(brandState);

    useEffect(() => {
        
        setProductList(products());

        const categories = new Set<string>();
        const brands = new Set<string>();
        const sizes = new Set<string>();

        productList.forEach((product) => {
            categories.add(product.category);
            brands.add(product.brand);
            product.sizes.forEach((size) => {
                sizes.add(size);
            });
        });

        setCategoryList(Array.from(categories));
        setBrandList(Array.from(brands));
        setSizeList(Array.from(sizes));

        
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

export default ProductListView;