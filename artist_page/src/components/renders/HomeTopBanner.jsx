
import React, { Component } from "react";
import Sketch from "react-p5";

export default class App extends Component {
   
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.total = 30;
    this.total2 = 15;
    this.globe = [];
    this.r = 100;
    this.r2 = 120;
    this.rotate = 1;
    this.stroke = '#7b0000';
    this.grow = true; 

  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(this.state.width - 25, this.state.height - 500, p5.WEBGL).parent(canvasParentRef);
    p5.setAttributes('antialias', true);

    if (this.state.width < 812){
      this.r = 50
      this.r2 = 55  
    }

    if (this.state.width < 667){
      this.r = 40
      this.r2 = 45  
    }

    console.log(this.state.width);
  };

  draw = p5 => {
    p5.clear();
    p5.stroke("black");
    p5.strokeWeight(40);
    p5.blendMode(p5.MULTIPLY);
    p5.rotateX(p5.frameCount * 0.002);
    p5.rotateY(p5.frameCount * 0.002);
    p5.rotateZ(p5.frameCount * 0.002);
    p5.ambientLight(0);
    p5.beginShape(p5.POINTS);

    for (let i = 0; i <= this.total; i++){
      let lon = p5.map(i, 0, this.total, -p5.PI, p5.PI);
      for(let j = 0; j <= this.total; j++){
        let lat = p5.map(j, 0, this.total, -p5.HALF_PI, p5.HALF_PI);
        let x = this.r * p5.sin(lon + this.rotate) * p5.cos(lat + this.rotate);
        let y = this.r * p5.sin(lon + this.rotate) * p5.sin(lat + this.rotate);
        let z = this.r * p5.cos(lon + this.rotate);
        p5.vertex(x,y,z);
        p5.beginContour();
        p5.vertex(-x,-y,-z);
        //p5.stroke(this.stroke);
        //p5.curve(x * this.rotate, y * this.rotate, x * this.rotate, y * this.rotate, x * this.rotate, y * this.rotate, x * this.rotate, y * this.rotate, z, z, z, z);
        //p5.push();
        // p5.ellipse(x,y,p5.random(x - 0.5, x + 0.5),z);
        //p5.pop();
      }
    }
    p5.endShape();

    p5.push();

    p5.stroke(this.stroke);
    p5.strokeWeight(20);
    p5.blendMode(p5.MULTIPLY);
    p5.rotateX(p5.frameCount * 0.002);
    p5.rotateY(p5.frameCount * 0.002);
    p5.rotateZ(p5.frameCount * 0.002);
    p5.ambientLight(0);
    p5.beginShape(p5.POINTS);

    for (let i = 0; i <= this.total2; i++){
      let lon = p5.map(i, 0, this.total2, -p5.PI, p5.PI);
      for(let j = 0; j <= this.total2; j++){
        let lat = p5.map(j, 0, this.total2, -p5.HALF_PI, p5.HALF_PI);
        let x = this.r2 * p5.sin(lon) * p5.cos(lat);
        let y = this.r2 * p5.sin(lon) * p5.sin(lat);
        let z = this.r2 * p5.cos(lon);
        p5.vertex(x,y,z);
        p5.beginContour();
        p5.vertex(-x,-y,-z);
        //p5.stroke(this.stroke);
        //p5.curve(x * this.rotate, y * this.rotate, x * this.rotate, y * this.rotate, x * this.rotate, y * this.rotate, x * this.rotate, y * this.rotate, z, z, z, z);
        //p5.push();
        // p5.ellipse(x,y,p5.random(x - 0.5, x + 0.5),z);
        //p5.pop();
      }
    }
    p5.endShape();

    p5.pop();
    this.rotate += p5.random(.001);

  };
 
  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}