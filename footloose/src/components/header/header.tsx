import "./styles.scss";
import { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

interface HeaderProps {
    children: React.ReactNode;
}

const Header: FC<HeaderProps> = ({children}) => {
    
    return(
        <>
        <header className="header">
        <Navbar expand="lg" data-bs-theme="dark">
            <Container>
                <a href="/">
                    <img
                    className="header__logo"
                    src="./images/logo3.png"
                    alt="Footloose logo"
                    />
                </a>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="" href="/">Home</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
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
        {children}
        </>
    );
};

export default Header;