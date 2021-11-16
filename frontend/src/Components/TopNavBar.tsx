import React from 'react';
import { ethers } from "ethers";
import "./TopNavBar.css";



interface Props {
    window: any;
    //account:any;
}


export default class TopNavBar extends React.Component <Props>{

      connectWallet = async () => {
        if(window.ethereum) {
          var accounts = await this.props.window.ethereum.send('eth_requestAccounts');
          await this.props.window.ethereum.enable();
    
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          console.log("SIGNERAPPPFOOOOO", signer)
          //this.setState({account: accounts.result[0]})
          //console.log("STATE ACCOUNT", this.state.account)
        }
      }
    

    render() {
        return (
            <div className="top-nav-bar">
                <h2 className="top-nav-bar-h2">The Eyescream Social</h2>
                <button className="connect-wallet-button"  onClick={() => this.connectWallet()}>Connect Wallet</button>
            </div>
        )
    }
}