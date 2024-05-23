import "./styles.scss";
import { FC, useState } from "react";
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
import { userState } from "../../atoms/userState";

interface HeaderProps {
  //children: React.ReactNode;
}

const Header: FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setCartList] = useRecoilState(cartState);

  const handleClick = () => {
    setIsOpen(!isOpen); // Toggle open state on click
  };

  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  const logout = () => {
    setUser({
      id: 0,
      username: "",
      token: "",
      role: 0,
    },);
    setIsOpen(false);
    setCartList([]);
    navigate("/login");
  };

  return (
    <>
      <header className="header">
        <Link to="/">
            <img
              className="header__logo"
              src="/images/logo_letrasBlancas.png"
              alt="Footloose logo"
            />
        </Link>
        <Navbar className="header_nav" expand="lg" data-bs-theme="dark">
          <Container className="header--container">
            
            <div className="header__nav__navbar">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto header__nav__toggleNav">
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
                  {user.token !== "" ? 
                  <>
                    <Link to="" className="header__options__link">{user.username}</Link> 
                    <button className="header__options__link" onClick={logout}>
                        Log out
                    </button>
                  </>
                  : 
                    <>
                        <Link className="header__options__link" to="/login">
                            Sign in
                        </Link>
                        {/*<Link className="header__options__link" to="/">
                            Sign up (soon)
                        </Link>*/}
                    </>
                  }
                </div>
                <FaShoppingCart className="header__options__option" onClick={() => {navigate("/cart")}}/>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
