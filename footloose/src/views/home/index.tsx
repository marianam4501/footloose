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

const Home = () => {
  const [popularProducts, setPopularProducts] = useState<ProductObject[]>([]);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const response = await axios.get<ProductObject[]>('http://localhost:8080/product/featured');
        setPopularProducts(response.data);
      } catch (error) {
        console.error("Error fetching popular products:", error);
      }
    };

    fetchPopularProducts();
  }, []);

  return (
    <>
      <Header />
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
