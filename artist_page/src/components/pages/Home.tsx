import React from 'react';
import HomeTopBanner from '../renders/HomeTopBanner';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { GoSearch } from "react-icons/go";
import { MdClear } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

import './css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component<{},any> {

    constructor(props: Readonly<{}>){
        super(props);
    
        this.state = {
          headerClicked : 0
        };
        this.handleLinkClick = this.handleLinkClick.bind(this);
        // this.buttonIsClicked = this.buttonIsClicked.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleClearChange = this.handleClearChange.bind(this);
        // this.handleScroll = this.handleScroll.bind(this);
    }

    handleLinkClick(event: any){
        this.setState({
            headerClicked: 1
          });
        console.log(this.state.headerClicked);
    }

    render(){
        return(
            <>
                <div id= {(this.state.headerClicked === 0)? "atTopOpacity" : "moveToBottomOpacity"}>
                    <HomeTopBanner />
                </div>

                <header className="navHeader" id= {(this.state.headerClicked === 0)? "atTop" : "moveToBottom"}>
                    <Navbar collapseOnSelect expand="lg" className="navBarBG" variant="dark" >
                    <Navbar.Brand href="#home">             </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link className ="navLink" href="#pricing" onClick={this.handleLinkClick}>news</Nav.Link>
                        <Nav.Link className ="navLink" href="#features" onClick={this.handleLinkClick}>latest</Nav.Link>
                        <Nav.Link className ="navLink" href="#something" onClick={this.handleLinkClick}>archived selections</Nav.Link>
                        <Nav.Link className ="navLink" href="#something" onClick={this.handleLinkClick}>mixes</Nav.Link>
                        <Nav.Link className ="navLink" href="/live" onClick={this.handleLinkClick}>livestream</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                </header>
            </>
        );
    }

}

export default Home;