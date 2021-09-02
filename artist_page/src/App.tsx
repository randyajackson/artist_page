import React from 'react';
import {Route} from 'react-router-dom';

import Home from "./components/pages/Home";
import Live from "./components/pages/Live";
import Latest from "./components/pages/Latest";
import About from "./components/pages/About";
import Playlists from "./components/pages/Playlists";
import Radio from "./components/pages/Radio";
import Discogs_Tracker from "./components/pages/Discogs_Tracker";

const App: React.FC = () => {
  return( 
  <>
    <Route exact path="/" component={Home} />
    <Route path="/live" component={Live} />
    <Route path="/radio" component={Radio} />
    <Route path="/latest" component={Latest} />
    <Route path="/about" component={About} />
    <Route path="/playlists" component={Playlists} />
    <Route path="/discogs" component={Discogs_Tracker} />
  </>
  );
}


export default App;
