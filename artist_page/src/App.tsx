import React from 'react';
import update from 'react-addons-update';

import './App.css';
import logo from './img/logo.png';

import external_link from './img/external_link.png';
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import mixcloud from './img/mixcloud.png';
import soundcloud from './img/soundcloud.png';
import tumblr from './img/tumblr.png';
import youtube from './img/youtube.png';
import donate from './img/donate.png';


import Masonry from 'react-masonry-component';
import { unstable_batchedUpdates } from 'react-dom';

const masonryOptions = {
  columnWidth: 50,
  horizontalOrder: true,
  fitWidth: true,
  transitionDuration: '0.8s',
  stagger: '0.03s'
};

class App extends React.Component<{},any> {

  constructor(props: Readonly<{}>){
    super(props);

    this.state = {

      hamburgerButton: {
        1 : false,
        2 : false,
        3 : false,
        4 : false,
        5 : false,
        6 : false,
        7 : false,
        8 : false
      }

    };

    this.buttonIsClicked = this.buttonIsClicked.bind(this);

  }

  buttonIsClicked(id: number) 
  {

    this.setState((prevState: { hamburgerButton: any; }) => {
       let hamburgerButton = prevState.hamburgerButton;
       hamburgerButton[id] = !hamburgerButton[id];
       return hamburgerButton;
    });

  }

  render() {

  const xSymbol = 'hamburger hamburger--slider is-active';
  const hamburger = 'hamburger hamburger--slider';

  return (
    <div>
      
      <div className = "topDisplay">
        
        <img className = "logo" src = {logo} alt = {logo}></img>

        <br />

        <div className = "featuredText">
          <span className= "tagLineFirst">featured</span>
          <span className= "tagLineSecond">creators</span>
        </div>

      </div>
      <br/>
      <br/>
      
      <Masonry
                  className={'grid-item'}
                  elementType={'div'}
                  options={masonryOptions}
      >
        <div className="grid-item">
          <img className="artist_picture" src = "http://uberhumor.com/wp-content/uploads/2014/09/lPBJXJl.png" alt="none"></img>
          <button className={ this.state.hamburgerButton[1] ? xSymbol : hamburger } type="button" onClick={this.buttonIsClicked.bind(this,1)}>
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          </button>
          <div className="overlay">
            <div className="overlay_buttons">
                <img className="social_icon" src = {instagram} alt = {logo}></img>
                <img className="social_icon" src = {soundcloud} alt = {logo}></img>
                <img className="social_icon" src = {facebook} alt = {logo}></img>
                <img className="social_icon" src = {external_link} alt = {logo}></img>
                <div className="break"></div>
                <img id="donate" src = {donate} alt = {logo}></img>
            </div>
          </div>
          <div className="artistName"><p className="artistName">alfred<span className="artistName">habadasheree</span></p></div>
        </div>

        <div className="grid-item">
          <img className="artist_picture" src = "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/75238076/original/d274960485df2a5b8b3e9960c2c9dda01eb8237d/ask-20-random-strangers-to-choose-your-best-profile-picture.jpg" alt = "none"></img>
          <button className={ this.state.hamburgerButton[2] ? xSymbol : hamburger } type="button" onClick={this.buttonIsClicked.bind(this,2)}>
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          </button>
          <div className="overlay">
            <div className="overlay_buttons">
              <img className="social_icon" src = {instagram} alt = {logo}></img>
              <img className="social_icon" src = {soundcloud} alt = {logo}></img>
              <img className="social_icon" src = {facebook} alt = {logo}></img>
              <img className="social_icon" src = {external_link} alt = {logo}></img>
              <div className="break"></div>
              <img id="donate" src = {donate} alt = {logo}></img>
            </div>
          </div>
          <div className="artistName"><p className="artistName">franklin <span className="artistName">spalding</span></p></div>
        </div>

        <div className="grid-item">
          <img className="artist_picture" src = "https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png" alt="none"></img>
          <button className={ this.state.hamburgerButton[3] ? xSymbol : hamburger } type="button" onClick={this.buttonIsClicked.bind(this,3)}>
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          </button>
          <div className="overlay">
            <div className="overlay_buttons">
              <img className="social_icon" src = {instagram} alt = {logo}></img>
              <img className="social_icon" src = {soundcloud} alt = {logo}></img>
              <img className="social_icon" src = {facebook} alt = {logo}></img>
              <img className="social_icon" src = {external_link} alt = {logo}></img>
              <div className="break"></div>
              <img id="donate" src = {donate} alt = {logo}></img>
            </div>
          </div>
          <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
        </div>

        <div className="grid-item">
          <img className="artist_picture" src = "https://catchmycar.files.wordpress.com/2011/06/tobey-maguire-very-upset.jpg"  alt = "none"></img>
          <button className={ this.state.hamburgerButton[4] ? xSymbol : hamburger } type="button" onClick={this.buttonIsClicked.bind(this,4)}>
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          </button>
          <div className="overlay">
            <div className="overlay_buttons">
              <img className="social_icon" src = {instagram} alt = {logo}></img>
              <img className="social_icon" src = {soundcloud} alt = {logo}></img>
              <img className="social_icon" src = {facebook} alt = {logo}></img>
              <img className="social_icon" src = {external_link} alt = {logo}></img>
              <div className="break"></div>
              <img id="donate" src = {donate} alt = {logo}></img>
            </div>
          </div>
          <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
        </div>

        <div className="grid-item">
          <img className="artist_picture" src = "https://www.connollysdoitbest.com/Data/ItemImage-160565-2524294.jpg?AutoCrop=1&CropHeight=1440&CropWidth=1440&Resize=Smallest&Revision=0Hd&Timestamp=fkwbVG&Width=1440"  alt="none"></img>
          <button className={ this.state.hamburgerButton[5] ? xSymbol : hamburger } type="button" onClick={this.buttonIsClicked.bind(this,5)}>
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          </button>
          <div className="overlay">
            <div className="overlay_buttons">
              <img className="social_icon" src = {instagram} alt = {logo}></img>
              <img className="social_icon" src = {soundcloud} alt = {logo}></img>
              <img className="social_icon" src = {facebook} alt = {logo}></img>
              <img className="social_icon" src = {external_link} alt = {logo}></img>
              <div className="break"></div>
              <img id="donate" src = {donate} alt = {logo}></img>
            </div>
          </div>
          <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
        </div>

        <div className="grid-item">
          <img className="artist_picture" src = "http://i.imgur.com/6YSV2I3.gif" alt = "none"></img>
          <button className={ this.state.hamburgerButton[6] ? xSymbol : hamburger } type="button" onClick={this.buttonIsClicked.bind(this,6)}>
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          </button>
          <div className="overlay">
            <div className="overlay_buttons">
              <img className="social_icon" src = {instagram} alt = {logo}></img>
              <img className="social_icon" src = {soundcloud} alt = {logo}></img>
              <img className="social_icon" src = {facebook} alt = {logo}></img>
              <img className="social_icon" src = {external_link} alt = {logo}></img>
              <div className="break"></div>
              <img id="donate" src = {donate} alt = {logo}></img>
            </div>
          </div>
          <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
        </div>

        <div className="grid-item">
          <img className="artist_picture" src = "https://avatars0.githubusercontent.com/u/22890813?s=460&v=4"  alt="none"></img>
          <button className={ this.state.hamburgerButton[7] ? xSymbol : hamburger } type="button" onClick={this.buttonIsClicked.bind(this,7)}>
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          </button>
          <div className="overlay">
            <div className="overlay_buttons">
              <img className="social_icon" src = {instagram} alt = {logo}></img>
              <img className="social_icon" src = {soundcloud} alt = {logo}></img>
              <img className="social_icon" src = {facebook} alt = {logo}></img>
              <img className="social_icon" src = {external_link} alt = {logo}></img>
              <div className="break"></div>
              <img id="donate" src = {donate} alt = {logo}></img>
            </div>
          </div>
          <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
        </div>

        <div className="grid-item">
          <img className="artist_picture" src = "https://www.researchgate.net/profile/Jussi_Poikonen/publication/265265707/figure/fig3/AS:669496293478407@1536631763215/Power-delay-profile-of-one-realization-of-a-random-exponentialPDP-WSSUS-channel.png" alt = "none"></img>
          <button className={ this.state.hamburgerButton[8] ? xSymbol : hamburger } type="button" onClick={this.buttonIsClicked.bind(this,8)}>
            <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
          </button>
          <div className="overlay">
            <div className="overlay_buttons">
              <img className="social_icon" src = {instagram} alt = {logo}></img>
              <img className="social_icon" src = {soundcloud} alt = {logo}></img>
              <img className="social_icon" src = {facebook} alt = {logo}></img>
              <img className="social_icon" src = {external_link} alt = {logo}></img>
              <div className="break"></div>
              <img id="donate" src = {donate} alt = {logo}></img>
            </div>
          </div>
          <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
        </div>

        

      </Masonry>
    </div>

    );
  }

};

export default App;
