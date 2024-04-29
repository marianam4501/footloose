import "./styles.scss";
import { FC, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
//import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { cartState } from "../../atoms/cartState";

interface HeaderProps {
  //children: React.ReactNode;
}

const Header: FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartList, setCartList] = useRecoilState(cartState);

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle open state on click
  };

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsOpen(false);
    setCartList([]);
    navigate("/login");
  };

  useEffect(() => {
    console.log("token", token, "user", user);
  },[]);

  return (
    <>
      <header className="header">
        <Navbar className="header_nav" expand="lg" data-bs-theme="dark">
          <Container className="header--container">
            <Link to="/">
              <img
                className="header__logo"
                src="/images/logo3.png"
                alt="Footloose logo"
              />
            </Link>
            <div className="header__nav__navbar">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Link className="header__link" to="/">
                    Home
                  </Link>
                  <Link className="header__link" to="/products">
                    Products
                  </Link>
                </Nav>
              </Navbar.Collapse>
              <div className="header__options">
                <FaUserLarge
                  className="header__options__option"
                  data-target=".header__options__userOption"
                  onClick={handleClick}
                />
                <div
                  className="header__options__userOption"
                  style={{ display: isOpen ? "flex" : "none" }}
                >
                  {token !== null ? 
                  <>
                    <p className="header__options__link">{user}</p> 
                    <button className="header__options__link" onClick={logout}>
                        Log out
                    </button>
                  </>
                  : 
                    <>
                        <Link className="header__options__link" to="/login">
                            Sign in
                        </Link>
                        <Link className="header__options__link" to="/">
                            Sign up (soon)
                        </Link>
                    </>
                  }
                </div>
                <FaShoppingCart className="header__options__option" onClick={() => {navigate("/cart")}}/>
              </div>
            </div>
          </Container>
        </Navbar>

        {/* <nav className="navbar navbar-expand-lg navbar-dark header--container">
            <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link nav__link active" aria-current="page" href="/">Home</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav> */}
      </header>
    </>
  );
};

export default Header;
