import React from 'react';
import update from 'react-addons-update';
import Sketch from react-p5;

import NavigationMenu from "../renders/NavigationMenu";

import './css/radio.css';

import { unstable_batchedUpdates } from 'react-dom';
import { checkPropTypes } from 'prop-types';

import ReactPlayer from 'react-player';

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

    
    this.total = 30;
    this.total2 = 15;
    this.globe = [];
    this.r = 100;
    this.r2 = 120;
    this.stroke1 = 40;
    this.stroke2 = 20;
    this.rotate = 1;
    this.stroke = '#7b0000';
    this.grow = true; 


    this.state = {
      navBarClicked : 0,
      width: 0,
      height: 0
    };

    this.handleLinkClick = this.handleLinkClick.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width : window.innerWidth, height : window.innerHeight });
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

    setup = (p5, canvasParentRef) = {
      p5.createCanvas(this.state.width - 25, this.state.height - 500, p5.WEBGL).parent(canvasParentRef);
      p5.setAttributes('antialias', true);
    };
  
    let draw = p5 = {
      this.r = p5.width  .05;
      this.r2 = p5.width  .06;
      this.stroke1 = p5.width  .01;
      this.stroke2 = p5.width  .012;
      p5.clear();
      p5.stroke(black);
      p5.strokeWeight(this.stroke1);
      p5.blendMode(p5.MULTIPLY);
      p5.rotateX(p5.frameCount  0.002);
      p5.rotateY(p5.frameCount  0.002);
      p5.rotateZ(p5.frameCount  0.002);
      p5.ambientLight(0);
      p5.beginShape(p5.POINTS);
  
      for (let i = 0; i = this.total; i++){
        let lon = p5.map(i, 0, this.total, -p5.PI, p5.PI);
        for(let j = 0; j = this.total; j++){
          let lat = p5.map(j, 0, this.total, -p5.HALF_PI, p5.HALF_PI);
          let x = this.r  p5.sin(lon + this.rotate)  p5.cos(lat + this.rotate);
          let y = this.r  p5.sin(lon + this.rotate)  p5.sin(lat + this.rotate);
          let z = this.r  p5.cos(lon + this.rotate);
          p5.vertex(x,y,z);
          p5.beginContour();
          p5.vertex(-x,-y,-z);
          p5.stroke(this.stroke);
          p5.curve(x  this.rotate, y  this.rotate, x  this.rotate, y  this.rotate, x  this.rotate, y  this.rotate, x  this.rotate, y  this.rotate, z, z, z, z);
          p5.push();
           p5.ellipse(x,y,p5.random(x - 0.5, x + 0.5),z);
          p5.pop();
        }
      }
      p5.endShape();
  
      p5.push();
  
      p5.stroke(this.stroke);
      p5.strokeWeight(this.stroke2);
      p5.blendMode(p5.MULTIPLY);
      p5.rotateX(p5.frameCount  0.002);
      p5.rotateY(p5.frameCount  0.002);
      p5.rotateZ(p5.frameCount  0.002);
      p5.ambientLight(0);
      p5.beginShape(p5.POINTS);
  
      for (let i = 0; i = this.total2; i++){
        let lon = p5.map(i, 0, this.total2, -p5.PI, p5.PI);
        for(let j = 0; j = this.total2; j++){
          let lat = p5.map(j, 0, this.total2, -p5.HALF_PI, p5.HALF_PI);
          let x = this.r2  p5.sin(lon)  p5.cos(lat);
          let y = this.r2  p5.sin(lon)  p5.sin(lat);
          let z = this.r2  p5.cos(lon);
          p5.vertex(x,y,z);
          p5.beginContour();
          p5.vertex(-x,-y,-z);
          p5.stroke(this.stroke);
          p5.curve(x  this.rotate, y  this.rotate, x  this.rotate, y  this.rotate, x  this.rotate, y  this.rotate, x  this.rotate, y  this.rotate, z, z, z, z);
          p5.push();
           p5.ellipse(x,y,p5.random(x - 0.5, x + 0.5),z);
          p5.pop();
        }
      }
      p5.endShape();
  
      p5.pop();
      this.rotate += p5.random(.001);
  
    };

  return (
    <>
    Sketch setup={this.setup} draw={this.draw}
    <NavigationMenu handleLinkClick = {this.handleLinkClick}/>
    <div className={(this.state.navBarClicked === 0)? "fadeIn" : "fadeOut"}>
    <audio controls preload="auto">
      <source src="https://intrinse.net/stream" type="audio/mpeg"/>
    </audio>
    </div>    
    </>
    );
  }
  }

  export default Radio;