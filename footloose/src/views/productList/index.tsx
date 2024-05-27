import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ProductList from "../../components/productList/productList";
import ListPagination from "../../components/pagination/pagination";
import Filter from "../../components/filters/filters";

const ProductListView = () => {

  return (
    <>
      <Header />
      <Filter />
      <ProductList />
      <ListPagination />
      <Footer>
        <></>
      </Footer>
    </>
  );
};

export default ProductListView;
