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
            <Nav.Link className ="navLink" href="/latest" onClick={this.props.handleLinkClick}>latest</Nav.Link>
            <Nav.Link className ="navLink" href="/discogs" onClick={this.props.handleLinkClick}>discogs new arrivals</Nav.Link>
            <Nav.Link className ="navLink" href="/playlists" onClick={this.props.handleLinkClick}>playlists</Nav.Link>
            <Nav.Link className ="navLink" href="/radio" onClick={this.props.handleLinkClick}>radio</Nav.Link>
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