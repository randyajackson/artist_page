import React from 'react';
import {Route} from 'react-router-dom';

import Home from "./components/pages/Home";
import Live from "./components/pages/Live";

const App: React.FC = () => {
  return( 
  <>
    <Route path="/" component={Home} />
    {/* <Route path="/live" component={Live} /> */}
  </>
  );
}


export default App;
