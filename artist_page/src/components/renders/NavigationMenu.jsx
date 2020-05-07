import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavigationMenu extends Component {
  
  constructor (props) {
    super(props);
  }

  render() {
    return (
    <div>
        <header>
        <Navbar collapseOnSelect expand="lg" className="navBarBG" variant="dark" fixed="bottom" >
        <Navbar.Brand href="/">             </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link className ="navLink" href="#pricing" onClick={this.props.handleLinkClick}>news</Nav.Link>
            <Nav.Link className ="navLink" href="/latest" onClick={this.props.handleLinkClick}>latest</Nav.Link>
            <Nav.Link className ="navLink" href="#something" onClick={this.props.handleLinkClick}>archived music</Nav.Link>
            <Nav.Link className ="navLink" href="#something" onClick={this.props.handleLinkClick}>mixes</Nav.Link>
            <Nav.Link className ="navLink" href="/live" onClick={this.props.handleLinkClick}>livestream</Nav.Link>
            <Nav.Link className ="navLink" href="/about" onClick={this.props.handleLinkClick}>about</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </header>
    </div>
    )
  }


}