import React from 'react';
import { ethers } from "ethers";
import "./TopNavBar.css";


declare let window: any;
const TopNavBar = () => {

      const connectWallet = async () => {

        const handleAccount = async () => {
          var accounts = await window.ethereum.send('eth_requestAccounts');
          await window.ethereum.enable();
        }

        if(window.ethereum) {
          handleAccount();
        }
      }
    

      return (
          <div className="top-nav-bar">
              <h2 className="top-nav-bar-h2">The Eyescream Social</h2>
              <button className="connect-wallet-button"  onClick={() => connectWallet()}>Connect Wallet</button>
          </div>
      )
}

export default TopNavBar;