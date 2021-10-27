import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import detectEthereumProvider from '@metamask/detect-provider';
import { ethers } from "ethers";
import Web3 from "web3";


require('dotenv').config()
const RINKEBY_URL = process.env.RINKEBY_URL;

declare let window: any;
const getProvider = async () => {
  let web3 = new Web3(Web3.givenProvider || RINKEBY_URL)
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
