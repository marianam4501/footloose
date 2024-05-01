import {
  Dropdown,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import { FaSearch } from 'react-icons/fa';
import { FC, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { products } from "../../utils/data";
import "./styles.scss";
import { productState } from "../../atoms/productState";

interface FilterProps {
  //children: React.ReactNode;
}

const Filter: FC<FilterProps> = () => {
	const [productName, setProductName] = useState<string>("");
	const [categories, setCategories] = useState<string[]>([]);
	const [brands, setBrands] = useState<string[]>([]);
	const [productsToShow, setProductsToShow] = useState<boolean>(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const [productList, setProductList] = useRecoilState(productState);
	const [selectedCategories, setSelectedCategories] = useState<any>({});
	const [selectedBrands, setSelectedBrands] = useState<any>({});

	useEffect(() => {
		const categorySet = new Set<string>();
		const brandSet = new Set<string>();
		const initialCategories: any = {};
		const initialBrands: any = {};
	
		products().forEach((product) => {
			initialCategories[product.category] = false;
			initialBrands[product.brand] = false;
			categorySet.add(product.category);
			brandSet.add(product.brand);
		});
	
		initialCategories["all"] = true;
		initialBrands["all"] = true;
	
		setSelectedCategories(initialCategories);
		setSelectedBrands(initialBrands);
	
		setCategories(Array.from(categorySet));
		setBrands(Array.from(brandSet));
	}, []);

	useEffect(() => {
		const searchResults = products().filter((product) =>
			{
				return product.name.toLowerCase().includes(productName.toLowerCase());
			}
		);
		setProductList(searchResults);
	}, [productName]);

	const handleFilterChange = (filter: string, filterType: string) => {
		if (filterType === "category") {
			setSelectedCategories((prevCategories: any) => {
			const updatedCategories = {
				...prevCategories,
				[filter]: !prevCategories[filter],
			};
			updatedCategories["all"] = Object.values(updatedCategories).every(
				(value: boolean, key: string) => key !== "all" && !value
			);
			return updatedCategories;
		});
		} else if (filterType === "brand") {
			setSelectedBrands((prevBrands: any) => {
			const updatedBrands = {
				...prevBrands,
				[filter]: !prevBrands[filter],
			};
			updatedBrands["all"] = Object.values(updatedBrands).every(
				(value: boolean, key: string) => key !== "all" && !value
			);
			return updatedBrands;
		});
		}
	};

	useEffect(() => {
		const filteredProducts = products().filter((product) => {
			const categoryFilter =
			selectedCategories[product.category] ||
			selectedCategories["all"];
			const brandFilter =
				selectedBrands[product.brand] || selectedBrands["all"];
	
			return categoryFilter && brandFilter;
		});
	
		setProductList(filteredProducts.length > 0 ? filteredProducts : []);
		setProductsToShow(filteredProducts.length > 0 ? true : false);
	}, [selectedCategories, selectedBrands]);

	const handleOutsideClick = (event: MouseEvent) => {
        // Verificar si el clic ocurrió fuera del dropdown y no hay productos para mostrar
        if (productsToShow && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            // Ocultar el dropdown
            setProductsToShow(false);
        }
    };

    useEffect(() => {
        // Agregar un event listener para manejar los clics fuera del dropdown
        document.addEventListener('click', handleOutsideClick);

        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [productsToShow]);
 
	return (
		<>
			<div className="filters--searchbar">
				<InputGroup>
					<InputGroup.Text id="basic-addon2">
						<FaSearch />
					</InputGroup.Text>
					<FormControl
						placeholder="Search product"
						aria-label="Search"
						onChange={
							(event) => {setProductName(event.target.value);
						}
						}
					/>
				</InputGroup>
			</div>
			<Dropdown ref={dropdownRef} show={productsToShow} onToggle={(isOpen) => setProductsToShow(isOpen)}>
				<Dropdown.Toggle id="filterBtn">
					Filters
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<div className="filters">
						<Dropdown.ItemText >
							Filter by category:
						</Dropdown.ItemText>
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
						<Dropdown.ItemText >
							Filter by brand:
						</Dropdown.ItemText>
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
	);
};

export default Filter;