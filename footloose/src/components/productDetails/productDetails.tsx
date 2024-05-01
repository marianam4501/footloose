import { useParams } from "react-router-dom";
import "./styles.scss";
import { FC, useEffect, useState } from 'react';
import { Button, Card, Dropdown, DropdownButton, DropdownItem } from "react-bootstrap";
import { productState } from "../../atoms/productState";
import { useRecoilState } from "recoil";
import NotFound from "../notFound/notFound";
import { cartState } from "../../atoms/cartState";
import { products } from "../../utils/data";
import { FaShoppingCart } from "react-icons/fa";
import { CartProductObject } from "../../utils/cartProductObject";
import { UserObject } from "../../utils/userObject";
import { users } from "../../utils/userData"
import { v4 as uuidv4 } from 'uuid';
interface DetailsProps {}

const ProductDetails: FC<DetailsProps> = () => {
    const { id } = useParams<{ id?: string }>(); // Specify id as optional
    const productId = id ? parseInt(id, 10) : undefined; // Convert id to integer or undefined
    const username = localStorage.getItem("user");

    // Validar si el id existe en la lista de productos.
    const [productList, setProductList] = useRecoilState(productState);
    const [cartList, setCartList] = useRecoilState(cartState);
    const [selectedSize, setSelectedSize] = useState<string>("Select size");
    const [quantity, setQuantity] = useState(1);
    const [user, setUser] = useState<UserObject>();
    const [addedToCart, setAddedToCart] = useState<boolean>(false);
    
    // Ensure productId is valid before accessing productList
    const product = productId !== undefined ? productList.find(product => product.id === productId) : undefined;

    const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
    };

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    useEffect(() => {
        setProductList(products());
        const foundUser = users.find((user: UserObject) => user.username === username);
        setUser(foundUser);
        setAddedToCart(false);
        console.log(addedToCart);
    }, []);

    const handleAddToCart = () => {
        if(product){
            console.log(selectedSize);
            if(user !== undefined)
            {
                const newCartProduct: CartProductObject = {"id": uuidv4(),"product": product, "user": user, "quantity": quantity, "size":(selectedSize !== "Select size" ? selectedSize : product.sizes[0])};
                setCartList([...cartList, newCartProduct]);
                console.log("Quantity: ", quantity, "Selected size: ", selectedSize, "Cart list: ", cartList, "Product: ", product);
                setAddedToCart(true);
            }
        }
    };
    
    return (
        <>
        {!product ? <NotFound /> :
        <div className="productDetails container">
            <Card className="mb-3">
                <Card.Body>
                    <div className="row">
                        <div className="col-md-4">
                            <Card.Img src={product.image} className="img-fluid rounded-start" alt={product.name} />
                        </div>
                        <div className="col-md-8">
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text className="container--card__price">Price: ${product.price}</Card.Text>
                            <Card.Text className="container--card__description">Description: {product.description}</Card.Text>
                            
                            <div className="productDetails__shoppingDetails">
                                <Dropdown>
                                    <DropdownButton id="dropdownMenuButton" title={selectedSize}>
                                        {product.sizes.map((size) => (
                                        <DropdownItem key={size} onClick={() => setSelectedSize(size)}>{size}</DropdownItem>
                                        ))}
                                    </DropdownButton>
                                </Dropdown>

                                <div className="productDetails__quantity">
                                    <p className="productDetails__quantity__title">Quantity: </p>
                                    <Button id="productDetails__quantity__btn" onClick={handleDecrement}>-</Button>
                                    <label className="productDetails__quantity__text">{quantity}</label>
                                    <Button id="productDetails__quantity__btn" onClick={handleIncrement}>+</Button>
                                </div>
                                <Button id={addedToCart ? "addToCartClicked" : "addToCart"} onClick={addedToCart ? () => {} : handleAddToCart}> <FaShoppingCart className="header__options__option" />{addedToCart ? "Added!" : "Add to cart"}</Button>
                            </div>

                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
        }
        </>
    );
};

export default ProductDetails;
