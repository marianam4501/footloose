import "./styles.scss";
import { FC } from 'react';

interface ProductProps {
    children: React.ReactNode;
}

const Product: FC<ProductProps> = ({children}) => {
    
    return(
        <>
        {children}
        </>
    );
};

export default Product;