import "./styles.scss";
import { FC } from 'react';

interface DetailsProps {
    children: React.ReactNode;
}

const ProductDetails: FC<DetailsProps> = ({children}) => {
    
    return(
        <>
        {children}
        </>
    );
};

export default ProductDetails;