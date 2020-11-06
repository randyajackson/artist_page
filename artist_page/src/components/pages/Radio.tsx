import React from 'react';
import update from 'react-addons-update';

import NavigationMenu from "../renders/NavigationMenu";
import cover from './img/cover.jpg';

import './css/radio.css';

import { unstable_batchedUpdates } from 'react-dom';
import { checkPropTypes } from 'prop-types';

import API_radio_infos from "./utils/API_radio_infos";


//@ts-ignore
const encode = str => encodeURIComponent(str)
    .replace(/\-/g, '%2D')
    .replace(/\_/g, '%5F')
    .replace(/\./g, '%2E')
    .replace(/\!/g, '%21')
    .replace(/\~/g, '%7E')
    .replace(/\*/g, '%2A')
    .replace(/\'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29');

  class Radio extends React.Component<{},any> {

  constructor(props: Readonly<{}>){
    super(props);

    this.state = {
      navBarClicked : 0,
      artist: '',
      song: '',
      coverURL: '',
      playing: false
    };

    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);

  }

  componentDidMount() {

    let allThis = this;

    let getRadioData = function() {
      API_radio_infos.get('/')
        .then( radioInfo => {
          allThis.setState({
                artist: radioInfo.data[0].artist,
                song: radioInfo.data[0].song,
                coverURL: radioInfo.data[0].coverURL
              });     
        });
    }

    //@ts-ignore
    getRadioData.call();

    setInterval(function(){
      //@ts-ignore  
      getRadioData.call();
    }, 10000);
    
  }

  componentWillUnmount() {

  }

  handleLinkClick = () => {
    this.setState({
        navBarClicked: 1
      });
    window.setTimeout(() => {
    }, 1000);
  }

  handlePlay () {
    this.setState({
      playing: true
    })
  }

  handlePause () {
    this.setState({
      playing: false
    })
  }


  render() {

  return (
    <>
    <NavigationMenu handleLinkClick = {this.handleLinkClick}/>
    <div className={(this.state.navBarClicked === 0)? "fadeIn" : "fadeOut"}>
      <div className="radioButtons">
        <img className = "coverArt" src= {this.state.coverURL} />
        <br/>
        <span className= "tagLineSecond">{this.state.artist}</span>
        <br/>
        <span className= "tagLineFirst">{this.state.song}</span>
        <br/>
        <br/>
        <audio className="audioBar" src="https://intrinse.net/stream" controls autoPlay/>
      </div>
    </div>    
    </>
    );
  }
  }

  export default Radio;