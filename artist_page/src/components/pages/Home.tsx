import React from 'react';
import HomeTopBanner from '../renders/HomeTopBanner';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/home.css';


class Home extends React.Component<{},any> {

    constructor(props: Readonly<{}>){
        super(props);
    
        this.state = {
          headerClicked : 0,
          clickedUrl: ""
        };
        this.handleLinkClick = this.handleLinkClick.bind(this);
    }

    componentDidMount(){
        this.state = {
            headerClicked : 0,
            clickedUrl: ""
          };    
    }

    handleLinkClick = (url:string) => {
        this.setState({
            headerClicked: 1
          });

        window.setTimeout(() => {
            this.setState({
                clickedUrl: url
              });
            return <Redirect push to= {url} />;    
        }, 850);
    }

    render(){

        if(this.state.clickedUrl !== ""){
            let tempUrl = this.state.clickedUrl;
            this.setState({clickedUrl: "", headerClicked: 0});
            return <Redirect push to= {tempUrl} />;
        }

        return(
            <>
                <div id= {(this.state.headerClicked === 0)? "atTopOpacity" : "moveToBottomOpacity"}>
                    <br/><br/>
                    <HomeTopBanner />
                </div>

                <header className="navHeader" id= {(this.state.headerClicked === 0)? "atTop" : "moveToBottom"}>
                <Navbar collapseOnSelect expand="lg" className="navBarBG" variant="dark" >
                <Navbar.Brand href="#home">             </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link className ="navLink" onClick={() => this.handleLinkClick("/latest")}>latest</Nav.Link>
                    <Nav.Link className ="navLink" onClick={() => this.handleLinkClick("/discogs")}>discogs new arrivals</Nav.Link>
                    <Nav.Link className ="navLink" onClick={() => this.handleLinkClick("/playlists")}>playlists</Nav.Link>
                    <Nav.Link className ="navLink" onClick={() => this.handleLinkClick("/radio")}>radio</Nav.Link>
                    <Nav.Link className ="navLink" onClick={() => this.handleLinkClick("/live")}>livestream</Nav.Link>
                    <Nav.Link className ="navLink" onClick={() => this.handleLinkClick("/about")}>about</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>  
                </header>
            </>
        );
    }

}

export default Home;