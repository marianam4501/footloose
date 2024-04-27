import { useRecoilValue } from "recoil";
import { productState } from "../../atoms/productState";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";
import { FC } from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ProductListProps {
    children: React.ReactNode;
}

const ProductList: FC<ProductListProps> = ({children}) => {
    const productList = useRecoilValue(productState);
    return(
        <>
        <div className="productlist" id="productlist">
            {productList.map((product)=>{//key={uuidv4()}
                return <Link key={uuidv4()} className="productlist__item" to={"details/"+product.id}>
                    <Card className="productlist__item">
                        <Card.Img className="productlist__item__image" variant="top" src={product.image || "./images/shoes1.jpg"} alt={product.name + " image"}/>
                        <Card.Body>
                            <Card.Title id="productlist__item__name">{product.name}</Card.Title>
                            <Card.Text>
                            <p>{product.brand}</p>
                            <p>Price: {product.price}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            })}
        </div>
        {children}
        </>
    );
};

export default ProductList;