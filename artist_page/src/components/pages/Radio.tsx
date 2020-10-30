import React from 'react';
import update from 'react-addons-update';

import NavigationMenu from "../renders/NavigationMenu";
import cover from './img/cover.jpg';

import './css/radio.css';

import { unstable_batchedUpdates } from 'react-dom';
import { checkPropTypes } from 'prop-types';

import ReactPlayer from 'react-player';
//@ts-ignore
import AudioPlayer from "@omargee/audio-player";

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
      navBarClicked : 0
    };

    this.handleLinkClick = this.handleLinkClick.bind(this);

  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  handleLinkClick = () => {
    this.setState({
        navBarClicked: 1
      });
    console.log(this.state.navBarClicked);
    window.setTimeout(() => {
    }, 1000);
  }


  render() {

  return (
    <>
    <NavigationMenu handleLinkClick = {this.handleLinkClick}/>
    <div className={(this.state.navBarClicked === 0)? "fadeIn" : "fadeOut"}>
      <div className="radioButtons">
      <img className="page-header-buttons-image" src = {cover} alt = "image"></img>
        <AudioPlayer
            tracks={[
              {
                url: "https://intrinse.net/stream",
              }
            ]}/>
      </div>
    </div>    
    </>
    );
  }
  }

  export default Radio;