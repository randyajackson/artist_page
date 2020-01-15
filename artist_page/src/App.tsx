import React from 'react';
import './App.css';
import logo from './img/logo.png';



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
      <img className = "results" src = "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg" alt="none"></img>
    </div>

    <div className="card">
      <img className = "results" src = "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg" alt = "none"></img>
    </div>

    <div className="card">
      <img className = "results" src = "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg" alt="none"></img>
      
    </div>

    <div className="card">
      <img className = "results" src = "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814784/photostream-photos/DSC05624_f5b2ud.jpg" alt = "none"></img>
    </div>

    <div className="card">
      <img className = "results" src = "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05559_hu49zx.jpg" alt="none"></img>
    </div>

    <div className="card">
      <img className = "results" src = "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05482_dtrj02.jpg" alt = "none"></img>
    </div>

    <div className="card">
      <img className = "results" src = "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05565_dx5rp6.jpg" alt="none"></img>
    </div>

    <div className="card">
      <img className = "results" src = "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814782/photostream-photos/DSC05469_fdxdzx.jpg" alt = "none"></img>
    </div>

    <div className="card">
      <img className = "results" src = "https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814781/photostream-photos/DSC05483_dyiuya.jpg" alt = "none"></img>
    </div>

  </section>

  </div>
  );

};

export default App;
