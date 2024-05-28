import "./styles.scss";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { ProductObject } from "../../utils/productObject";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userState } from "../../atoms/userState";
import { roles } from "../../utils/roles";

const Home = () => {
  const [popularProducts, setPopularProducts] = useState<ProductObject[]>([]);
  const user = useRecoilValue(userState);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const response = await axios.get<ProductObject[]>(
          "http://localhost:8080/product/featured"
        );
        setPopularProducts(response.data);
      } catch (error) {
        console.error("Error fetching popular products:", error);
      }
    };

    user.role == roles.USER ? fetchPopularProducts() : () => {};
  }, []);

  return (
    <>
      <Header />
      {user.role == roles.USER ? (
        <>
          <Hero>
            <></>
          </Hero>
          {popularProducts !== null ? (
            <div className="homePage__gallery">
              <h2 className="homePage__gallery__title">Most popular</h2>
              <div className="homePage__gallery__container">
                {popularProducts.map((product) => (
                  <Link
                    className="homePage__gallery__item"
                    to={"details/" + (product.id || "")}
                  >
                    <Card className="homePage__gallery__item">
                      <Card.Img
                        className="homePage__gallery__item__image"
                        variant="top"
                        src={product.image || "./images/shoes1.jpg"}
                        alt={(product.name || "") + " image"}
                      />
                      <Card.Body>
                        <Card.Title className="homePage__gallery__item__name">
                          {product.name}
                        </Card.Title>
                        <Card.Text>
                          <p>{product.brand}</p>
                          <p>Price: {product.price}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : user.role == roles.ADMIN ? (
        <div className="homePage__admin">
          <h1> Welcome, {user.username} (ADMIN)</h1>
          <div className="homePage__admin__options">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Product Management</Card.Title>
              <Card.Text>
                To manage products (list, add, remove and update a product) 
              </Card.Text>
              <Card.Link href="/productManagement">Click Here</Card.Link>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Order Management</Card.Title>
              <Card.Text>
                To manage orders (list and update an order) 
              </Card.Text>
              <Card.Link href="/history">Click Here</Card.Link>
            </Card.Body>
          </Card>
          </div>
        </div>
      ) : (
        <></>
      )}
      <Footer>
        <></>
      </Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        pauseOnHover={true}
        closeButton={true}
        hideProgressBar={true}
      />
    </>
  );
};

export default Home;
