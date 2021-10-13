import React from 'react';
import EyeScreamPreview from "./images/eyescreamscoop.jpg"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">The Eyescream Project</header>

      <div className="collection-preview">
        <img src={EyeScreamPreview}></img>
      </div>
    </div>
  );
}

export default App;
