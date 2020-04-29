import React, { Component } from "react";
import ReactPlayer from 'react-player';
import './css/homeTopBanner.css';
import topBannerMP4 from './vid/logoBannerTopMP4.mp4'; 
import topBannerWEBM from './vid/logoBannerTopWEBM.webm'; 

export default class App extends Component {

  render() {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          playing
          playsinline
          url={[
            {src: topBannerMP4, type: 'video/mp4'},
            {src: topBannerWEBM, type: 'video/webm'},
          ]}
          width='100%'
          height='80%'
          volume={0}
          muted
          loop
        />
      </div>
    )
  }


}