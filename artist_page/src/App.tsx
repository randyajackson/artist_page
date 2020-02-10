import React from 'react';
import './App.css';
import logo from './img/logo.png';

import Masonry from 'react-masonry-component';

const masonryOptions = {
  columnWidth: 50,
  horizontalOrder: true,
  fitWidth: true,
  transitionDuration: '0.8s',
  stagger: '0.03s'
};

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
    <br/>
    
    <Masonry
                className={'grid-item'}
                elementType={'div'}
                options={masonryOptions}
    >
      <div className="grid-item">
        <img src = "http://uberhumor.com/wp-content/uploads/2014/09/lPBJXJl.png" alt="none"></img>
        <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
        <div className="mouseOverButtons">These are where mouseover buttons go.</div>
      </div>

      <div className="grid-item">
        <img src = "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/75238076/original/d274960485df2a5b8b3e9960c2c9dda01eb8237d/ask-20-random-strangers-to-choose-your-best-profile-picture.jpg" alt = "none"></img>
        <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
      </div>

      <div className="grid-item">
        <img src = "https://cdn-images-1.medium.com/max/1200/1*NpUUls7kjn9JhO4ChjGV7w.png" alt="none"></img>
        <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
      </div>

      <div className="grid-item">
        <img src = "https://catchmycar.files.wordpress.com/2011/06/tobey-maguire-very-upset.jpg"  alt = "none"></img>
        <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
      </div>

      <div className="grid-item">
        <img src = "https://www.connollysdoitbest.com/Data/ItemImage-160565-2524294.jpg?AutoCrop=1&CropHeight=1440&CropWidth=1440&Resize=Smallest&Revision=0Hd&Timestamp=fkwbVG&Width=1440"  alt="none"></img>
        <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
      </div>

      <div className="grid-item">
        <img src = "http://i.imgur.com/6YSV2I3.gif" alt = "none"></img>
        <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
      </div>

      <div className="grid-item">
        <img src = "https://avatars0.githubusercontent.com/u/22890813?s=460&v=4"  alt="none"></img>
        <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
      </div>

      <div className="grid-item">
        <img src = "https://www.researchgate.net/profile/Jussi_Poikonen/publication/265265707/figure/fig3/AS:669496293478407@1536631763215/Power-delay-profile-of-one-realization-of-a-random-exponentialPDP-WSSUS-channel.png" alt = "none"></img>
        
        <div className="artistName"><p className="artistName">firstname <span className="artistName">lastname</span></p></div>
      </div>

      

    </Masonry>
  </div>

  );

};

export default App;
