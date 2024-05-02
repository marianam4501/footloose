import "./styles.scss";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import { useEffect, useState } from "react";
import { products } from "../../mockData/data";
import { ToastContainer } from "react-toastify";
import { ProductObject } from "../../utils/productObject";

const Home = () => {
  const [popularProducts, setPopularProducts] = useState<ProductObject[]>([]);

  useEffect(() => {
    // Obtener una lista de índices aleatorios únicos dentro del rango de longitud de la lista de productos
    const getRandomIndexes = (length: number, count: number) => {
      const indexes: number[] = [];
      while (indexes.length < count) {
        const randomIndex = Math.floor(Math.random() * length);
        if (!indexes.includes(randomIndex)) {
          indexes.push(randomIndex);
        }
      }
      return indexes;
    };

    // Seleccionar 10 productos aleatorios de la lista de productos
    const randomIndexes = getRandomIndexes(products().length, 10);
    const randomProducts = randomIndexes.map((index) => products()[index]);

    // Establecer los productos populares
    setPopularProducts(randomProducts);
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
