import React from 'react';
import {Route} from 'react-router-dom';


import Home from "./components/pages/Home";
import Live from "./components/pages/Live";
import Latest from "./components/pages/Latest";
import About from "./components/pages/About";

const App: React.FC = () => {
  return( 
  <>
    <Route exact path="/" component={Home} />
    <Route path="/live" component={Live} />
    <Route path="/latest" component={Latest} />
    <Route path="/about" component={About} />
  </>
  );
}


export default App;
