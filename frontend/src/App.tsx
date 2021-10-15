import React from 'react';
import EyeScreamPreview from "./images/eyescreamscoop.jpg";
import SprinklesBackground from "./images/sprinkles.png";
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


function App() {
  return (
    <div className="body">
      <div className="social-navbar-top">
        <a href="#" className="fab fa-twitter fa-2x"></a>
        <a href="#" className="fab fa-instagram fa-2x"></a>
        <a href="#" className="fab fa-discord fa-2x"></a>
      </div>
      <div className="connect-wallet">
        <button className="wallet-button">Connect Wallet</button>
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
        <h1 className="collection-header">The Inside Scoop</h1>
        <div>
          <Swiper
            className="swiper-container"
            spaceBetween={200}
            slidesPerView={4}
            centeredSlides
            onSlideChange={() => console.log("slide change")}
            onSwiper={swiper => console.log(swiper)}
          >
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
          <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
          <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
          <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
          <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
          <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
          <SwiperSlide className="swiper-slide"><img src={EyeScreamPreview}/></SwiperSlide>
          </Swiper>
        </div>

        <div className="road-map-and-info">
          <p className="p1-about">Eyescream Project is a collection of 10,101 NFT's living on the Ethereum 
          Blockchain. </p>
          <br></br><br></br><br></br>

          <p className="p2-about">Eyescream has 100 unique attributes. </p>
          <br></br><br></br><br></br>

          <p className="p3-about">Each Eyescream is one of a kind.</p>
        </div>
        <h1 className="team-header">Meet the team</h1>
        <div className="team-members">
          <div className="member-dev">
            <img src={EyeScreamPreview}></img>

            <h3>Creme Dev</h3>
            <p>Jack is a 21 year old full time software engineer who lives in 
              Manhattan NYC. 
            </p>
          </div>
          <div className="member-boy">
            <img src={EyeScreamPreview}></img>
            <h3>Pie Boy</h3>
            <p>
              Peter is a 22 year old certified hood classic.
              Enjoys long walks on the beach and listening to The Beatles.
            </p>
          </div>
          <div className="member-artist">
            <img src={EyeScreamPreview}></img>
            <h3>Baby Artist</h3>
            <p>Eli is a 22 year old artist based in Manhattan. He has started numerous
              clothing companies. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
