import React from 'react';
import EyeScreamPreview from "./images/eyescreamscoop.jpg"
import './App.css';

function App() {
  return (
    <div className="body">
      <div className="connect-wallet">
        <button className="wallet-button">Connect Wallet</button>
      </div>
      <div className="about-side-panel">
        Eyescream Project is a collection of 10,000 NFT's living on the Ethereum 
        Blockchain. <br></br><br></br><br></br>

        Eyescream has 100 unique attributes. <br></br><br></br><br></br><br></br>

        Each Eyescream is one of a kind.
      </div>
      <div className="App">
        <header className="App-header">The Eyescream Project</header>

        <div className="collection-preview">
          <img src={EyeScreamPreview}></img>
        </div>

        <div className="about">
          Eyescream is a community project that brings crypto enthusiasts together.
          Each token serves as a membership pass to the community... granting members access to
          an exclusive club where they create, learn, and change the world.
        </div>
      </div>
      </div>
  );
}

export default App;
