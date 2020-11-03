import React from 'react';
import update from 'react-addons-update';

import NavigationMenu from "../renders/NavigationMenu";
import cover from './img/cover.jpg';

import './css/radio.css';

import { unstable_batchedUpdates } from 'react-dom';
import { checkPropTypes } from 'prop-types';

import ReactHowler from 'react-howler';


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
      playing: false
    };

    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);

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
        <audio className="audioBar" src="https://intrinse.net/stream" controls autoPlay/>
      </div>
    </div>    
    </>
    );
  }
  }

  export default Radio;