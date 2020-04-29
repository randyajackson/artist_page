import React from 'react';
import HomeTopBanner from '../renders/HomeTopBanner';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { GoSearch } from "react-icons/go";
import { MdClear } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

import './css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home: React.FC = () => {
    return(
        <>
            <HomeTopBanner />

            <header className="navHeader">
                {/* <Container>
                    <Row>
                        <Col className = "navLinks">Latest</Col>
                        <Col className = "navLinks">News</Col>
                        <Col className = "navLinks">Archived Selections</Col>
                        <Col className = "navLinks">Livestream</Col>
                    </Row>
                </Container> */}
                {/* <div className="navBar">
                    <nav>
                        <ul className = "navLinks">
                            <li>Latest</li>
                            <li>News</li>
                            <li>Archived Selections</li>
                            <li>Livestream</li>
                        </ul>
                    </nav>
                </div> */}
                <Navbar collapseOnSelect expand="lg" className="navBarBG" variant="dark" >
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#pricing">News</Nav.Link>
                    <Nav.Link href="#features">Latest</Nav.Link>
                    <Nav.Link href="#something">Archived Selections</Nav.Link>
                    <Nav.Link href="#something">Mixes</Nav.Link>
                    <Nav.Link href="#somethingElse">Livestream</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </header>
        </>
    );

}

export default Home;