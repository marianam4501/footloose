import "./styles.scss";
import { FC } from "react";
import Quantity from "../quantity/quantity";
import { CartProductObject } from "../../utils/cartProductObject";
import TrashBtn from "../trashBtn/trashBtn";
import { Card } from "react-bootstrap";

type handleClickFunc = (product: CartProductObject) => void;

type updateFunc = (quantity: number, productId: string) => void;

interface ProductProps {
  //children: React.ReactNode;
  product: CartProductObject;
  handleTrash: handleClickFunc;
  updateQuantity: updateFunc;
  checkout: boolean;
}

const CartProduct: FC<ProductProps> = ({
  product,
  handleTrash,
  updateQuantity,
  checkout,
}) => {
  return (
    <>
      <Card className="cartProduct mb-3">
        <Card.Body>
          <div className="row">
            <div className="col-md-4">
              <Card.Img
                id="cartProduct__img"
                src={product.product.image}
                alt={product.product.name}
              />
            </div>
            <div className="col-md-8">
              <Card.Title id="productName">{product.product.name}</Card.Title>
              <Card.Text className="container--card__price">
                <p>{product.product.brand}</p> {/*Brand */}
                <p>{product.product.category}</p> {/*Category */}
                <p>{product.size}</p> {/*Size */}
              </Card.Text>
              <Card.Text className="cartProduct__shoppingInfo">
                <p className="cartProduct__shoppingInfo__price">
                  ${product.product.price}
                </p>{" "}
                {/*Price */}
                <div className="cartProduct__shoppingInfo__container">
                  {checkout ? (
                    <p>Quantity: {product.quantity}</p>
                  ) : (
                    <>
                      <Quantity
                        updateQuantity={() => {
                          updateQuantity(product.quantity, product.id);
                        }}
                        product={product}
                      />
                      <TrashBtn
                        handleClick={() => {
                          handleTrash(product);
                        }}
                        product={product}
                      />
                    </>
                  )}
                </div>
              </Card.Text>

              <div className="productDetails__shoppingDetails"></div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CartProduct;
