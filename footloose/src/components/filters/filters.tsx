import { CustomInput, FormGroup } from "react-bootstrap";
import "./styles.scss";
import { FC, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { productState } from "../../atoms/productState";
import { categoryState } from "../../atoms/categoryState";
import { brandState } from "../../atoms/brandState";
import { products } from "../../utils/data";

interface FilterProps {
    children: React.ReactNode;
}

const Filter: FC<FilterProps> = ({children}) => {
    const allProducts = products();
    const [productList, setProductList] = useRecoilState(productState);
    const categoryList = useRecoilValue<string[]>(categoryState);
    const brandList = useRecoilValue<string[]>(brandState);
    const [selectedCategories, setSelectedCategories] = useState({});
    const [selectedBrands, setSelectedBrands] = useState({});

    const handleCategoryCheck = (category: string, isChecked: boolean) => {
      setSelectedCategories({
        ...selectedCategories,
        [category]: isChecked,
      });
      // Update "all" category filter based on selections
      const allCategoryFilter = Object.keys(selectedCategories).every((category) => category !== "all" && !selectedCategories[category]);
      setSelectedCategories({ ...selectedCategories, all: allCategoryFilter });
    };

    const handleBrandCheck = (brand: string, isChecked: boolean) => {
      setSelectedBrands({
        ...selectedBrands,
        [brand]: isChecked,
      });

      const allBrandFilter = Object.keys(selectedBrands).every((brand) => selectedBrands[brand] === false);
      setSelectedBrands({ ...selectedBrands, all: allBrandFilter });
    };

    useEffect(() => {
      // Initialize selectedCategories with all categories set to false
      const initialCategories = categoryList.reduce((acc, category) => {
        return { ...acc, [category]: false };
      }, {});

      setSelectedCategories({ all: true, ...initialCategories });

      const initialBrands = brandList.reduce((acc, brand) => {
        return { ...acc, [brand]: false };
      }, {});

      setSelectedBrands({ all: true, ...initialBrands });

    }, []);

    useEffect(() => {
      // Handle changes in selected filters
      const filteredProducts = allProducts.filter((product) => {
        const selectedCategoriesCopy = { ...selectedCategories };
        delete selectedCategoriesCopy.all;
  
        const isCategoryMatch =
          Object.keys(selectedCategoriesCopy).length === 0 ||
          Object.keys(selectedCategoriesCopy).some((category) => product.category === category && selectedCategoriesCopy[category]);
  
        const isBrandMatch =
          Object.keys(selectedBrands).length === 0 ||
          selectedBrands[product.brand];
  
        return isCategoryMatch && isBrandMatch;
      });
  
      setProductList(filteredProducts);
    }, [selectedCategories, selectedBrands]);

    return(
      <div className="filter">
        <p>Filter by category:</p>
        {categoryList.map((category) => (
          <div key={category}>
            <input
              type="checkbox"
              id={`category-${category}`}
              checked={selectedCategories.has(category)}
              onChange={(event) => handleCategoryCheck(category, event.target.checked)}
            />
            <label htmlFor={`category-${category}`}>{category}</label>
          </div>
        ))}
        <p>Filter by brand:</p>
        {brandList.map((brand) => (
          <div key={brand}>
            <input
              type="checkbox"
              id={`brand-${brand}`}
              checked={selectedBrands.has(brand)}
              onChange={(event) => handleBrandCheck(brand, event.target.checked)}
            />
            <label htmlFor={`brand-${brand}`}>{brand}</label>
          </div>
        ))}
      </div>
    );
};

export default Filter;

/*
<div class="dropdown filter">
          <button class="btn filter__button dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Filter by category
          </button>
          <ul class="dropdown-menu filter__options" id="filters" aria-labelledby="dropdownMenuButton1">
            <p class="filter__category-title">Select a category</p>
            
          </ul>
        </div>
*/