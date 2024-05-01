import "./styles.scss"
import { FaRegTrashAlt } from "react-icons/fa";

import { FC } from 'react';
import { CartProductObject } from "../../utils/cartProductObject";

type handleClickFunc = (product: CartProductObject) => void;

interface TrashBtnProps {
    //children: React.ReactNode;
    product: CartProductObject
    handleClick: handleClickFunc;
}

const TrashBtn: FC<TrashBtnProps> = ({handleClick, product}) => {

    return(
        <>
            <button id="container" aria-label="delete product" onClick={() => {handleClick(product)}}><FaRegTrashAlt className="trashBtn" /></button>
        </>
    );
};

export default TrashBtn;