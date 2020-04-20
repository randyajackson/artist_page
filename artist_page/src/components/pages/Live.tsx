import React from 'react';
import update from 'react-addons-update';
import { GoSearch } from "react-icons/go";
import { MdClear } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import API from "./utils/API";
import API_RECENTS from "./utils/API_recents";

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
import spotify from './img/spotify.png';
import bandcamp from './img/bandcamp.png';
import twitter from './img/twitter.png';
import ra from './img/ra.png';
import discogs from './img/discogs.png';
import songkick from './img/songkick.png';

import Masonry from 'react-masonry-component';
import { unstable_batchedUpdates } from 'react-dom';
import { checkPropTypes } from 'prop-types';

import ReactPlayer from 'react-player';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const masonryOptions = {
  columnWidth: 50,
  horizontalOrder: true,
  fitWidth: true,
  transitionDuration: '0.8s',
  stagger: '0.03s'
};

const masonryOptions2 = {
  columnWidth: 400,
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
            <div className="overlay" style={{opacity: window.innerWidth <= 825 ? (props.hamburgerButton[props.index] ? 1 : 0) : '', display: window.innerWidth <= 825 ? (props.hamburgerButton[props.index] ? 'block' : 'none') : 'block'} } >
              <div className="overlay_buttons">
                  {props.results.instagram && <a href= {props.results.instagram} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {instagram} alt = {logo}></img></a>}
                  {props.results.instagram2 && <a href= {props.results.instagram2} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {instagram} alt = {logo}></img></a>}
                  {props.results.instagram3 && <a href= {props.results.instagram3} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {instagram} alt = {logo}></img></a>}
  
                  {props.results.tumblr && <a href= {props.results.tumblr} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {tumblr} alt = {logo}></img></a>}
                  {props.results.tumblr2 && <a href= {props.results.tumblr2} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {tumblr} alt = {logo}></img></a>}
                  {props.results.tumblr3 && <a href= {props.results.tumblr3} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {tumblr} alt = {logo}></img></a>}
  
                  {props.results.facebook && <a href= {props.results.facebook} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {facebook} alt = {logo}></img></a>}
                  {props.results.facebook2 && <a href= {props.results.facebook2} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {facebook} alt = {logo}></img></a>}
                  {props.results.facebook3 && <a href= {props.results.facebook3} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {facebook} alt = {logo}></img></a>}
  
                  {props.results.twitter && <a href= {props.results.twitter} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {twitter} alt = {logo}></img></a>}
                  {props.results.twitter2 && <a href= {props.results.twitter2} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {twitter} alt = {logo}></img></a>}
                  {props.results.twitter3 && <a href= {props.results.twitter3} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {twitter} alt = {logo}></img></a>}
  
                  {props.results.soundCloud && <a href= {props.results.soundCloud} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {soundcloud} alt = {logo}></img></a>}
                  {props.results.soundCloud2 && <a href= {props.results.soundCloud2} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {soundcloud} alt = {logo}></img></a>}
                  {props.results.soundCloud3 && <a href= {props.results.soundCloud3} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {soundcloud} alt = {logo}></img></a>}
  
                  {props.results.mixCloud && <a href= {props.results.mixCloud} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {mixcloud} alt = {logo}></img></a>}
                  {props.results.mixCloud2 && <a href= {props.results.mixCloud2} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {mixcloud} alt = {logo}></img></a>}
                  {props.results.mixCloud3 && <a href= {props.results.mixCloud3} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {mixcloud} alt = {logo}></img></a>}
  
                  {props.results.discogs && <a href= {props.results.discogs} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {discogs} alt = {logo}></img></a>}
                  {props.results.discogs2 && <a href= {props.results.discogs2} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {discogs} alt = {logo}></img></a>}
                  {props.results.discogs3 && <a href= {props.results.discogs3} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {discogs} alt = {logo}></img></a>}
                  {props.results.discogs4 && <a href= {props.results.discogs4} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {discogs} alt = {logo}></img></a>}
                  {props.results.discogs5 && <a href= {props.results.discogs5} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {discogs} alt = {logo}></img></a>}
  
                  {props.results.bandCamp && <a href= {props.results.bandCamp} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {bandcamp} alt = {logo}></img></a>}
                  {props.results.bandCamp2 && <a href= {props.results.bandCamp2} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {bandcamp} alt = {logo}></img></a>}
                  {props.results.bandCamp3 && <a href= {props.results.bandCamp3} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {bandcamp} alt = {logo}></img></a>}
  
                  {props.results.spotify && <a href= {props.results.spotify} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {spotify} alt = {logo}></img></a>}
                  {props.results.spotify2 && <a href= {props.results.spotify2} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {spotify} alt = {logo}></img></a>}
                  {props.results.spotify3 && <a href= {props.results.spotify3} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {spotify} alt = {logo}></img></a>}
  
                  {props.results.songKick && <a href= {props.results.songKick} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {songkick} alt = {logo}></img></a>}
                  {props.results.songKick2 && <a href= {props.results.songKick2} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {songkick} alt = {logo}></img></a>}
                  {props.results.songKick3 && <a href= {props.results.songKick3} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {songkick} alt = {logo}></img></a>}
  
                  {props.results.residentAdvisor && <a href= {props.results.residentAdvisor} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {ra} alt = {logo}></img></a>}
                  {props.results.residentAdvisor2 && <a href= {props.results.residentAdvisor2} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {ra} alt = {logo}></img></a>}
                  {props.results.residentAdvisor3 && <a href= {props.results.residentAdvisor3} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {ra} alt = {logo}></img></a>}
  
                  {props.results.youTube && <a href= {props.results.youTube} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {youtube} alt = {logo}></img></a>}
                  {props.results.youTube2 && <a href= {props.results.youTube2} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {youtube} alt = {logo}></img></a>}
                  {props.results.youTube3 && <a href= {props.results.youTube3} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {youtube} alt = {logo}></img></a>}
  
                  {props.results.external && <a href= {props.results.external} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {external_link} alt = {logo}></img></a>}
                  {props.results.email && <a href= {'mailto:' + props.results.email} target="_blank" rel="noopener noreferrer"><img className="social_icon" src = {email} alt = {logo}></img></a>}
                  <div className="break"></div>
                  {props.results.paypal && <a href= {props.results.paypal} target="_blank" rel="noopener noreferrer"><img id="donate" src = {donate} alt = {logo}></img></a>}
              </div>
            </div>
            <div className="artistName"><p className="artistName">{props.results.name.split(" ")[0].toLowerCase()}<span className="artistName">{props.results.name.substr(props.results.name.indexOf(" ") + 1).toLowerCase()}</span></p></div>
      </div>
  
  );

  topButton = document.getElementById("topButton");

  constructor(props: Readonly<{}>){
    super(props);

    this.state = {

      hamburgerButton: [],
      searchField: '',
      artistResults: [],
      recentResults: [],
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
    this.queryRecent();
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

  queryRecent(){
    API_RECENTS.get('/')
    .then(response => {
      response.data = arrayShuffle(response.data);
      this.setState({
        recentResults: response.data
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

  let allRecents = [];
  
  allRecents = this.state.recentResults.map(
    //@ts-ignore
    (currentResult: any, index: any) =>  <ReactPlayer url= {currentResult.song_url} width= "400px" height = "400px"  />);

  let sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    swipe: true
  };

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
      
      <br /><br /><br /><br /><br /><br />
      {/* <div className = "topDisplay">   
        <img className = "logo" src = {logo} alt = {logo}></img>
      </div> */}
      <div className = "topDisplay" style = {{width: (window.innerWidth >= 825) ? '1280px' : '480px' , height: (window.innerWidth >= 825) ? '720px' : '360px'}}>
 
        <ReactPlayer url= "https://player.twitch.tv/intrinse"  width="100%" height="100%"/> 
      
      </div>

      <div className = "topDisplay">
        <br /><br /><br /><br /><br /><br />

        <div className="topButtons">
          <a href="https://www.youtube.com/c/intrinse" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {youtube} alt = {logo}></img></a>
          <a href="https://www.instagram.com/intrinse_" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {instagram} alt = {logo}></img></a>
          <a href="https://soundcloud.com/intrinse" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {soundcloud} alt = {logo}></img></a>
          <a href="mailto: intrinse.mail@gmail.com" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {email} alt = {logo}></img></a>
          <br />
          <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=intrinse.mail%40gmail.com&currency_code=USD&source=url" target="_blank" rel="noopener noreferrer" id="intrinsicLinks"><img className="page-header-buttons-image" src = {donate} alt = {logo}></img></a>
        </div>


      <br /><br /><br /><br /><br /><br /><br /><br />    
        <div className = "featuredText">
          <span className= "tagLineFirst">new</span>
          <span className= "tagLineSecond">releases</span>
        </div>

      </div>
        <br /><br /><br /><br />
        <div style={{width: '400px', margin: '0 auto', paddingLeft: window.innerWidth <= 825 ? '10%' : '0%'}}>
        <Slider {...sliderSettings}>
          {allRecents}
        </Slider>
        </div>

        <br /><br /><br /><br />
        <div className = "topDisplay">
        <div className = "featuredText">
          <span className= "tagLineFirst">featured</span>
          <span className= "tagLineSecond">artists</span>
        </div>
        </div>

        <br /><br /><br /><br />

      
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