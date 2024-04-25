import "./styles.scss";
import { FC } from 'react';

interface PaginationProps {
    children: React.ReactNode;
}

const Pagination: FC<PaginationProps> = ({children}) => {
    
    return(
        <>
        {children}
        </>
    );
};

export default Pagination;