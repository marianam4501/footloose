import {
  Dropdown,
  Form,
  FormControl,
  InputGroup,
  Spinner,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { FC, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import "./styles.scss";
import { productState } from "../../atoms/productState";
import { ProductObject } from "../../utils/productObject";
import axios from "axios";

interface FilterProps {
  //children: React.ReactNode;
}

const Filter: FC<FilterProps> = () => {
  const [productName, setProductName] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [productsToShow, setProductsToShow] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [, setProductList] = useRecoilState(productState);
  const [products, setProducts] = useState<ProductObject[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedCategories, setSelectedCategories] = useState<any>({});
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedBrands, setSelectedBrands] = useState<any>({});
  const [hasChanged, setHasChanged] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  async function getProducts() {
    const fetchProducts = async () => {
      //console.log("Test");
      try {
        const response = await axios.get<ProductObject[]>(
          "http://localhost:8080/product"
        );
        if(loading){
          initialize(response.data);
        } else {
          setProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, [products]);

  function initialize(list: ProductObject[]) {
    const categorySet = new Set<string>();
    const brandSet = new Set<string>();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const initialCategories: any = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const initialBrands: any = {};

    list.forEach((product) => {
      initialCategories[product.category] = false;
      initialBrands[product.brand] = false;
      categorySet.add(product.category);
      brandSet.add(product.brand);
    });

    initialCategories["all"] = true;
    initialBrands["all"] = true;

    setCategories(Array.from(categorySet));
    setBrands(Array.from(brandSet));

    setSelectedCategories(initialCategories);
    setSelectedBrands(initialBrands);
    setProducts(list);
    setLoading(false);
  }

  useEffect(() => {
    getProducts();
    const searchResults = products.filter((product) => {
      return product.name.toLowerCase().includes(productName.toLowerCase());
    });
    setProductList(searchResults);
  }, [productName]);

  const handleFilterChange = (filter: string, filterType: string) => {
    setHasChanged(true);
    if (filterType === "category") {
      setSelectedCategories((prevCategories: any) => {
        const updatedCategories = {
          ...prevCategories,
          [filter]: !prevCategories[filter],
        };
        updatedCategories["all"] = !Object.keys(updatedCategories).some(
          (key) => key !== "all" && updatedCategories[key]
        );
        return updatedCategories;
      });
    } else if (filterType === "brand") {
      setSelectedBrands((prevBrands: any) => {
        const updatedBrands = {
          ...prevBrands,
          [filter]: !prevBrands[filter],
        };
        updatedBrands["all"] = !Object.keys(updatedBrands).some(
          (key) => key !== "all" && updatedBrands[key]
        );
        return updatedBrands;
      });
    }
  };

  useEffect(() => {
    getProducts();
    //console.log("test2");
    const filteredProducts = products.filter((product) => {
      const categoryFilter =
        selectedCategories[product.category] || selectedCategories["all"];
      const brandFilter =
        selectedBrands[product.brand] || selectedBrands["all"];

      return categoryFilter && brandFilter;
    });

    setProductList(filteredProducts.length > 0 ? filteredProducts : []);
    setProductsToShow(filteredProducts.length > 0 && hasChanged ? true : false);
    //console.log(filteredProducts.length);
  }, [selectedCategories, selectedBrands, hasChanged]);

  return (
    <>
      {loading ? (
        <Spinner className="spinner" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <>
          <div className="filters--searchbar">
            <InputGroup>
              <InputGroup.Text id="basic-addon2">
                <FaSearch />
              </InputGroup.Text>
              <FormControl
                placeholder="Search product"
                aria-label="Search"
                onChange={(event) => {
                  setProductName(event.target.value);
                }}
              />
            </InputGroup>
          </div>
          <Dropdown
            ref={dropdownRef}
            show={productsToShow}
            onToggle={(isOpen) => setProductsToShow(isOpen)}
          >
            <Dropdown.Toggle id="filterBtn">Filters</Dropdown.Toggle>
            <Dropdown.Menu>
              <div className="filters">
                <Dropdown.ItemText>Filter by category:</Dropdown.ItemText>
                {categories.map((category) => (
                  <div key={category}>
                    <Form.Check
                      type="checkbox"
                      id={`category-${category}`}
                      label={category}
                      checked={selectedCategories[category]}
                      onChange={() => handleFilterChange(category, "category")}
                    />
                  </div>
                ))}
              </div>
              <div className="filters">
                <Dropdown.ItemText>Filter by brand:</Dropdown.ItemText>
                {brands.map((brand) => (
                  <div key={brand}>
                    <Form.Check
                      type="checkbox"
                      id={`brand-${brand}`}
                      label={brand}
                      checked={selectedBrands[brand]}
                      onChange={() => handleFilterChange(brand, "brand")}
                    />
                  </div>
                ))}
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </>
      )}
    </>
  );
};

export default Filter;
