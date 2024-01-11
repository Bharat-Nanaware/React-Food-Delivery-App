import React from 'react'
import '../../styles/HeaderStyle.css'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from '../../assets/HeaderLogo.jpg'
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {


    const [nav, setNav] = useState(false);

    const changeValueOnScroll = () => {
        const scrollValue = document?.documentElement?.scrollTop;
        scrollValue > 100 ? setNav(true) : setNav(false);
    };

    window.addEventListener("scroll", changeValueOnScroll);


    return (
        <header>
            <Navbar
                collapseOnSelect
                expand="lg"
                className={`${nav === true ? "sticky" : ""}`}
            >
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/" className="logo">
                            <img src={Logo} alt="Logo" className="img-fluid" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Shop">
                                Shop
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Admin">
                                Admin
                            </Nav.Link>
                            <HeaderCartButton onClick={props.onShowCart} />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;
