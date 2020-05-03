import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {

  render() {
    return (
    <div>
        <header>
        <Navbar collapseOnSelect expand="lg" className="navBarBG" variant="dark" fixed="bottom" >
        <Navbar.Brand href="/">             </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link className ="navLink" href="#pricing" onClick={this.handleLinkClick}>news</Nav.Link>
            <Nav.Link className ="navLink" href="/latest" onClick={this.handleLinkClick}>latest</Nav.Link>
            <Nav.Link className ="navLink" href="#something" onClick={this.handleLinkClick}>archived music</Nav.Link>
            <Nav.Link className ="navLink" href="#something" onClick={this.handleLinkClick}>mixes</Nav.Link>
            <Nav.Link className ="navLink" href="/live" onClick={this.handleLinkClick}>livestream</Nav.Link>
            <Nav.Link className ="navLink" href="/about" onClick={this.handleLinkClick}>about</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </header>
    </div>
    )
  }


}