import React from 'react';
import TopNavBar from "./Components/TopNavBar";
import CollectionPage from './Components/CollectionPage';
import AboutPage from "./Components/AboutPage";
import TimeLine from "./Components/TimeLine";
import CountDown from "./Components/CountDown";
import MintCard from "./Components/MintCard";
import TeamPage from './Components/TeamPage';
import BottomNavBar from "./Components/BottomNavBar";
import { ethers, Contract } from "ethers";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

declare let window: any;
export default class App extends React.Component {


    state = {
        account: ""
      }
    
      startTime = 1639713600000;
      account: any;
    
      connectWallet = async () => {
        if(window.ethereum) {
          var accounts = await window.ethereum.send('eth_requestAccounts');
          await window.ethereum.enable();
    
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          console.log("SIGNERAPPPFOOOOO", signer)
          //this.setState({account: accounts.result[0]})
          //console.log("STATE ACCOUNT", this.state.account)
        }
      }
    

    render() {
        return (
            <div className="main-container">
                <TopNavBar/>
                <CollectionPage/>
                <AboutPage/>
                <TimeLine/>
                <CountDown startTime={this.startTime}/>
                <MintCard window={window}/>
                <TeamPage/>
                <BottomNavBar/>
            </div>
        )
    }
}