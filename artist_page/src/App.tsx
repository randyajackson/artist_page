import React from 'react';
import './App.css';
import logo from './img/logo.png';
import a1 from './img/1.jpg';
import a2 from './img/2.jpg';
import a3 from './img/3.jpg';
import a4 from './img/4.jpg';
import a5 from './img/5.jpg';
import a6 from './img/6.jpg';
import a7 from './img/7.jpg';
import a8 from './img/8.jpg';




const App: React.FC = () => {
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
    
    <section className= "artists">

      <div className="card">
        <img className = "results" src = {a1} alt="none"></img>
      </div>

      <div className="card">
        <img className = "results" src = {a2} alt = "none"></img>
      </div>

      <div className="card">
        <img className = "results" src = {a3} alt="none"></img>
        
      </div>

      <div className="card">
        <img className = "results" src = {a4}  alt = "none"></img>
      </div>

      <div className="card">
        <img className = "results" src = {a5}  alt="none"></img>
      </div>

      <div className="card">
        <img className = "results" src = {a6}  alt = "none"></img>
      </div>

      <div className="card">
        <img className = "results" src = {a7}  alt="none"></img>
      </div>

      <div className="card">
        <img className = "results" src = {a8}  alt = "none"></img>
      </div>

    </section>
  </div>

  );

};

export default App;
