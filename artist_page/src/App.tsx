import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

import artistService from './services/artistService';

const App: React.FC = () => {

  const [artist, setArtist] = useState(null);

  useEffect(() => {
    if(!artist) {
      getArtist;
    }
  })

  const getArtist: React.FC = async () => {
    let res = await artistService.getAll();
    console.log(res);
    setArtist(res);
  }

  const renderArtist: any = artist => {
    return (
      <li key={artist._id} className="list__item product">
        <h3 className="product__name">{artist.name}</h3>
        <p className="product__description">{artist.description}</p>
      </li>
    );
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
