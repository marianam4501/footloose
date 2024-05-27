import "./styles.scss"
import { FaRegTrashAlt } from "react-icons/fa";

import { FC } from 'react';
import { CartProductObject } from "../../utils/cartProductObject";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../atoms/userState";
import { cartState } from "../../atoms/cartState";

//type handleClickFunc = (product: CartProductObject) => void;

interface TrashBtnProps {
    //children: React.ReactNode;
    product: CartProductObject
    //handleClick: handleClickFunc;
}

const TrashBtn: FC<TrashBtnProps> = ({/*handleClick,*/ product}) => {
    const user = useRecoilValue(userState);
    const [, setCart] = useRecoilState(cartState);

    async function handleTrash(){
        try {
            const url = 'http://localhost:8080/cart/deleteProduct/' + product.id;
            const response = await axios.delete(url, {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            });
            
            setCart(response.data);
          } catch (error) {
            console.error("Error adding product to cart:", error);
          } finally {
            //setLoading(false);
        }
    }

    return(
        <>
            <button id="container" aria-label="delete product" onClick={() => {handleTrash()}}><FaRegTrashAlt className="trashBtn" /></button>
        </>
    );
};

export default TrashBtn;