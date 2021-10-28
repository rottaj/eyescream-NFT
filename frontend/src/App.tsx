import React from 'react';
//import SprinklesBackground from "./images/sprinkles.png";
//import DripBackground from "./images/DripBackground.jpg";
import one from "./images/collection_slider/one.png";
import two from "./images/collection_slider/two.png";
import three from "./images/collection_slider/three.png";
import four from "./images/collection_slider/three.png";
import five from "./images/collection_slider/four.png";
import six from "./images/collection_slider/six.png";
import EyeScreamPreview from "./images/eyescreamscoop.jpg";
import EyeScreamPreviewGif from "./images/eyescream_preview.gif";
import Roadmap from "./images/roadmap.png";
import MintCard from "./Components/MintCard";
import CountDown from "./Components/CountDown";
import { Swiper, SwiperSlide } from "swiper/react";
import { ethers, Contract } from 'ethers';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './App.css';

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
SwiperCore.use([EffectCoverflow, Pagination])

declare let window: any

export default class App extends React.Component {

  state = {
    account: ""
  }

  startTime = 1635654241699;
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

  async componentDidMount() {
      var accounts = await window.ethereum.send('eth_requestAccounts');
      this.setState({account: accounts.result[0]})
  }

  render() {
    return (
      <div className="body">
        <div className="social-navbar-top">
          <a href="https://twitter.com/eyescreamnft" className="fab fa-twitter fa-2x"></a>
          <a href="#" className="fab fa-instagram fa-2x"></a>
          <a href="https://discord.gg/AS79UbJCfV" className="fab fa-discord fa-2x"></a>
        </div>
        <div className="connect-wallet">
          <button className="wallet-button" onClick={this.connectWallet}>Connect Wallet</button>
        </div>

        <div className="App">
          <header className="App-header">The Eyescream Project</header>

          <div className="collection-preview">
            <img className="collection-preview-gif" src={EyeScreamPreviewGif}></img>
          </div>

          <div className="about">
            Eyescream is a platform for collaborative creativity. Each token serves as a membership to our community... 
            granting members access to an exclusive club where they 
            create, party, and change the world.
            <br></br><br></br>
            We're building a community to benefit the planet, and all of it's beautiful eyescream
            lovers.
            <br></br><br></br>
            Building people; by bringing them together. Creating strong, like minded contributors
            to our planet.
            <br></br><br></br>
            And of course, having the best time we can while doing it. We like to party and we know you do too! 
          </div>
          <h1 className="collection-header">The Inside Scoop</h1>
          <div>
            <Swiper
              effect={'coverflow'}
              className="swiper-container"
              grabCursor={true}
              spaceBetween={200}
              slidesPerView={4}
              centeredSlides={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={swiper => console.log(swiper)}
            >
            <SwiperSlide className="swiper-slide"><img className="swiper-slide-img"src={one}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={two}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={three}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={four}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={five}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={six}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
            <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
            </Swiper>
          </div>
          <div className="road-map-and-info">
            <img className="roadmap-img"src={Roadmap}></img>

          </div>
          <h1 className="count-down-timer-h1">Countdown</h1>
          <CountDown startTime={this.startTime}/>
          <div className="mint-panel">
            <h1 className="mint-header">Join Eyescream!</h1>
            {console.log("FOOOBaR", this.state.account)}
            {/*<MintCard account={this.state.account}/>  */}
            <MintCard window={window}/>
          </div>
          <h1 className="team-header">Meet the flavors</h1>
          <div className="team-members">
            <div className="member-dev">
              <img className="team-img" src={EyeScreamPreview}></img>

              <h3>Creme Dev</h3>
              <p>Jack is a 21 year old full time software engineer living in Hoboken, NJ. 
                Web3 enthusiast, w/ deep understanding of cryptocurrency and blockchain.
              </p>
            </div>
            <div className="member-dev-2">
              <img className="team-img" src={EyeScreamPreview}></img>

              <h3>Cake Dev</h3>
              <p>Ariq is a 21 year old full time software engineer living in Houston, TX. 
                Web3 enthusiast, w/ deep understanding of cryptocurrency and blockchain.
              </p>
            </div>
            <div className="member-boy">
              <img className="team-img" src={EyeScreamPreview}></img>
              <h3>Pie Boy</h3>
              <p>
                Peter is a 22 year financial analyst living in Manhattan, NYC.
                Enjoys long walks on the beach and listening to The Beatles.
              </p>
            </div>
            <div className="member-artist">
              <img className="team-img" src={EyeScreamPreview}></img>
              <h3>Baby Artist</h3>
              <p>Eli is a 22 year old artist based in Manhattan, NYC. He has started numerous
                clothing companies based around his art work.
              </p>
            </div>
          </div>
        </div>
        <div className="social-navbar-bottom">
          <a href="https://twitter.com/eyescreamnft" className="fab fa-twitter fa-2x"></a>
          <a href="#" className="fab fa-instagram fa-2x"></a>
          <a href="https://discord.gg/AS79UbJCfV" className="fab fa-discord fa-2x"></a>
        </div>
      </div>
    );
  }
}
