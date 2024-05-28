import { useNavigate, useParams } from "react-router-dom";
import "./styles.scss";
import { FC, useEffect, useState } from "react";
import {
  Button,
  Card,
  Dropdown,
  DropdownButton,
  DropdownItem,
} from "react-bootstrap";
import NotFound from "../notFound/notFound";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { userState } from "../../atoms/userState";
import { useRecoilValue } from "recoil";
import useAddToCart from "../../hooks/useAddToCart";
import { productState } from "../../atoms/productState";
import { roles } from "../../utils/roles";
interface DetailsProps {}

const ProductDetails: FC<DetailsProps> = () => {
  const { id } = useParams<{ id?: string }>(); // Specify id as optional
  const productId = id ? parseInt(id, 10) : -1; // Convert id to integer or undefined
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const [sizes, setSizes] = useState<string[]>([]);

  // Validar si el id existe en la lista de productos.
  const productList = useRecoilValue(productState);
  const [selectedSize, setSelectedSize] = useState<string>("Select size");
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const { addToCart } = useAddToCart();

  // Ensure productId is valid before accessing productList
  const product =
    productId !== undefined
      ? productList.find((product) => product.id === productId)
      : undefined;

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = async () => {
    if (product && user) {
      try {
        if (selectedSize === "Select size") {
          await addToCart(productId, quantity, sizes[0]);
        } else {
          await addToCart(productId, quantity, selectedSize);
        }

        // No hay error al llegar aquí
        setAddedToCart(true);
        toast.success("Product added to cart!");
      } catch (error) {
        // Captura cualquier error de addToCart
        toast.error("Error adding product to cart.");
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    setAddedToCart(false);
  }, [selectedSize]);

  useEffect(() => {
    if (product) {
      //console.log(product.sizes);
      if (product.sizes) {
        setSizes(
          product.sizes
            .split(",") // Divide la cadena en un arreglo usando la coma como delimitador
            .map((size) => size.trim()) // Elimina espacios en blanco alrededor de cada elemento
            .filter((size) => !isNaN(Number(size)) && size !== "") // Filtra solo los valores que son números y no están vacíos
        );
      }
    }
  }, [product]);

  return (
    <>
      {!product ? (
        <NotFound />
      ) : (
        <div className="productDetails container">
          <Card className="mb-3 productDetails__body">
            <Card.Body className="">
              <div className="row">
                <div className="col-md-4">
                  <Card.Img
                    src={product.image}
                    className="productDetails--card__img img-fluid rounded-start"
                    alt={product.name}
                  />
                </div>
                <div className="col-md-8">
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text className="container--card__price">
                    Price: ${product.price}
                  </Card.Text>
                  <Card.Text className="container--card__description">
                    Description: {product.description}
                  </Card.Text>

                  {user.role === roles.USER ? (
                    <div className="productDetails__shoppingDetails">
                      <Dropdown>
                        <DropdownButton
                          id="dropdownMenuButton"
                          title={selectedSize}
                        >
                          {sizes.map((size) => (
                            <DropdownItem
                              key={size}
                              onClick={() => setSelectedSize(size)}
                            >
                              {size}
                            </DropdownItem>
                          ))}
                        </DropdownButton>
                      </Dropdown>

                      <div className="productDetails__quantity">
                        <p className="productDetails__quantity__title">
                          Quantity:{" "}
                        </p>
                        <Button
                          id="productDetails__quantity__btn"
                          onClick={handleDecrement}
                        >
                          -
                        </Button>
                        <label className="productDetails__quantity__text">
                          {quantity}
                        </label>
                        <Button
                          id="productDetails__quantity__btn"
                          onClick={handleIncrement}
                        >
                          +
                        </Button>
                      </div>

                      <Button
                        id={addedToCart ? "addToCartClicked" : "addToCart"}
                        onClick={addedToCart ? () => {} : handleAddToCart}
                      >
                        {" "}
                        <FaShoppingCart className="header__options__option" />
                        {addedToCart ? "Added!" : "Add to cart"}
                      </Button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            pauseOnHover={true}
            closeButton={true}
            hideProgressBar={true}
          />
        </div>
      )}
    </>
  );
};

export default ProductDetails;
