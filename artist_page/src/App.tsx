import React from 'react';
import update from 'react-addons-update';
import { GoSearch } from "react-icons/go";
import { MdClear } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import API from "./utils/API";

import './App.css';
import logo from './img/logo.png';

import external_link from './img/external_link.png';
import email from './img/email.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import mixcloud from './img/mixcloud.png';
import soundcloud from './img/soundcloud.png';
import tumblr from './img/tumblr.png';
import youtube from './img/youtube.png';
import donate from './img/donate.png';

import Masonry from 'react-masonry-component';
import { unstable_batchedUpdates } from 'react-dom';
import { checkPropTypes } from 'prop-types';

const masonryOptions = {
  columnWidth: 50,
  horizontalOrder: true,
  fitWidth: true,
  transitionDuration: '0.8s',
  stagger: '0.03s'
};


const { arrayShuffle } = require('@adriantombu/array-shuffle');
const xSymbol = 'hamburger hamburger--slider is-active';
const hamburger = 'hamburger hamburger--slider';


const Artists = (props: any) => (
  <div className="grid-item">
          <img className="artist_picture" 
          src = {props.results.image} 
          alt="none"
          style={{filter: window.innerWidth <= 825 ? (props.hamburgerButton[props.index] ? 'blur(.5rem)' : 'blur(0)') : ''}}></img>
          <button className={ props.hamburgerButton[props.index] ? xSymbol : hamburger } type="button" onClick={props.buttonIsClicked.bind(props,props.index)}>
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          </button>
          <div className="overlay" style={{opacity: window.innerWidth <= 825 ? (props.hamburgerButton[props.index] ? 1 : 0) : ''}} >
            <div className="overlay_buttons">
                {props.results.instagram && <a href= {props.results.instagram} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {instagram} alt = {logo}></img></a>}
                {props.results.tumblr && <a href= {props.results.tumblr} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {tumblr} alt = {logo}></img></a>}
                {props.results.facebook && <a href= {props.results.facebook} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {facebook} alt = {logo}></img></a>}
                {props.results.soundCloud && <a href= {props.results.soundCloud} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {soundcloud} alt = {logo}></img></a>}
                {props.results.mixCloud && <a href= {props.results.mixCloud} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {mixcloud} alt = {logo}></img></a>}
                {props.results.youTube && <a href= {props.results.youTube} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {youtube} alt = {logo}></img></a>}
                {props.results.external && <a href= {props.results.external} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {external_link} alt = {logo}></img></a>}
                {props.results.email && <a href= {'mailto:' + props.results.email} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {email} alt = {logo}></img></a>}
                <div className="break"></div>
                <a href= {props.results.paypal} target="_blank" rel="noopener noreferrer"><img id="donate" src = {donate} alt = {logo}></img></a>
            </div>
          </div>
          <div className="artistName"><p className="artistName">{props.results.name.split(" ")[0].toLowerCase()}<span className="artistName">{props.results.name.substr(props.results.name.indexOf(" ") + 1).toLowerCase()}</span></p></div>
    </div>

);

class App extends React.Component<{},any> {

  topButton = document.getElementById("topButton");

  constructor(props: Readonly<{}>){
    super(props);

    this.state = {

      hamburgerButton: [],
      searchField: '',
      artistResults: [],
      topButtonCrawl: 0

    };

    this.buttonIsClicked = this.buttonIsClicked.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClearChange = this.handleClearChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.queryAll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);

  }

  handleClearChange(event: any){
    this.setState({searchField: ''});
    this.queryAll();  
  }

  async handleInputChange(event: any){

    await this.setState({searchField: event.target.value});
    let searchValue = this.state.searchField;

    API.get('/' + this.state.searchField)
    .then(response => {

      if(searchValue === "")
        response.data = arrayShuffle(response.data);

      this.setState({
        artistResults: response.data,
        hamburgerButton : new Array(this.state.artistResults.length).fill(false)
      });
      

    })
    .catch((error) => {
      console.log(error);
    });

  }

  buttonIsClicked(id: number){

    this.setState((prevState: { hamburgerButton: any; }) => {
       let hamburgerButton = prevState.hamburgerButton;
       hamburgerButton[id] = !hamburgerButton[id];
       return hamburgerButton;
    });

  }

  handleScroll(event: any){

    if(window.scrollY < 1500)
      this.setState( {topButtonCrawl : (window.scrollY / 1500).toFixed(2)} );
    else
      this.setState( {topButtonCrawl : 1} );
  }

  handleTop(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }

  queryAll(){
    API.get('/')
    .then(response => {
      response.data = arrayShuffle(response.data);
      this.setState({
        artistResults: response.data,
        hamburgerButton : new Array(this.state.artistResults.length).fill(false)
      });
      

    })
    .catch((error) => {
      console.log(error);
    });  
  }

  render() {

  let allProps = [];
  allProps = this.state.artistResults.map(
    (currentResult: any, index: any) =>  <Artists results = {currentResult} index = {index} hamburgerButton = {this.state.hamburgerButton} buttonIsClicked = {this.buttonIsClicked}  />);

  return (
    
    <div>
      <header className="page-header">
        <div></div>

        <button 
        onClick={this.handleTop} 
        style={{opacity: this.state.topButtonCrawl}} 
        id="topButton" 
        title="Go to top"
        onScroll={this.handleScroll}><MdKeyboardArrowUp/></button>

        <div className="searchBarMain">
          <i className="searchBarSearchIcon noUserSelect"><GoSearch/></i>
          <input 
          type="text" 
          name="header-search" 
          value={this.state.searchField} 
          onChange={this.handleInputChange} 
          id="searchBarInput" 
          placeholder="Search">
          </input>
          <i className="clearSearchBarField noUserSelect" style={{display: (this.state.searchField.length > 0) ? '' : 'none'}} onClick={this.handleClearChange} ><MdClear/></i>
        </div>

        <nav></nav>
      </header>
      
      
      <div className = "topDisplay">
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />     

        <img className = "logo" src = {logo} alt = {logo}></img>

        <div className="topButtons">
          <a href="https://www.youtube.com/c/IntrinsicAudio" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {youtube} alt = {logo}></img></a>
          <a href="https://www.instagram.com/intrinsic_radio/" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {instagram} alt = {logo}></img></a>
          <a href="mailto: intrinsic.radio.mail@gmail.com" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {email} alt = {logo}></img></a>
          <br />
          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=intrinsic.radio.mail%40gmail.com&currency_code=USD&source=url" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {donate} alt = {logo}></img></a>
        </div>

      <br /><br /><br /><br /><br /><br /><br /><br />    

        <div className = "featuredText">
          <span className= "tagLineFirst">featured</span>
          <span className= "tagLineSecond">creators</span>
        </div>

        <br /><br /><br /><br />

      </div>
      <br/>
      <br/>
      
      <Masonry
                  className={'grid-item'}
                  elementType={'div'}
                  options={masonryOptions}
      >
        {allProps}
      </Masonry>
    </div>

    );
  }

};

export default App;
