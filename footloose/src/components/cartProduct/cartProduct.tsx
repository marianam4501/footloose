import "./styles.scss";
import { FC } from 'react';
import Quantity from "../quantity/quantity";
import { CartProductObject } from "../../utils/cartProductObject";
import TrashBtn from "../trashBtn/trashBtn";

type handleClickFunc = (product: CartProductObject) => void;

type updateFunc = (quantity: number, productId: string) => void;

interface ProductProps {
    //children: React.ReactNode;
    product: CartProductObject
    handleTrash: handleClickFunc;
    updateQuantity: updateFunc;
}

const CartProduct: FC<ProductProps> = ({product, handleTrash, updateQuantity}) => {

    return(
        <>
        <div className="cartProduct">
            <img className="cartProduct__img" src={product.product.image} alt={product.product.name}/>
            <div className="cartProduct__infoContainer">
                <div className="cartProduct__info">
                    <p id="productName">{product.product.name}</p>
                    <p>{product.product.brand}</p> {/*Brand */}
                    <p>{product.product.category}</p> {/*Category */}
                    <p>{product.size}</p> {/*Size */}
                </div>
                <div className="cartProduct__shoppingInfo">
                    <p>${product.product.price}</p> {/*Price */}
                    <div className="cartProduct__shoppingInfo__container">
                        <Quantity updateQuantity={() => {updateQuantity(product.quantity, product.id)}} product={product}/>
                        <TrashBtn handleClick={() => { handleTrash(product); } } product={product}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default CartProduct;