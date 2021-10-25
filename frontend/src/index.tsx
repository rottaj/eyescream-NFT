import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from "ethers";
import Web3 from "web3";

declare let window: any;
const getProvider = async () => {
  let web3 = new Web3(Web3.givenProvider || "https://rinkeby.infura.io/v3/a9354cba6f634a2c98574368fc571987")
}
document.title = "Eyescream"
ReactDOM.render(
  <React.StrictMode>
    <App />
    {getProvider}
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
