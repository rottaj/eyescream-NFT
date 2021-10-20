import React from 'react';
import EyeScreamPreview from "./images/eyescreamscoop.jpg";
import SprinklesBackground from "./images/sprinkles.png";
import Roadmap from "./images/roadmap.jpg"
import './App.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";


function App() {
  return (
    <div className="body">
      <div className="social-navbar-top">
        <a href="https://twitter.com/eyescreamnft" className="fab fa-twitter fa-2x"></a>
        <a href="#" className="fab fa-instagram fa-2x"></a>
        <a href="https://discord.gg/RJA9a5Zg" className="fab fa-discord fa-2x"></a>
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
          Eyescream is a platform for collaborative creativity. Bringing crypto enthusiasts together.
          Each token serves as a membership to our community... granting members access to
          an exclusive club where they create, learn, party, and change the world.
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
          <img src={Roadmap}></img>

        </div>
        <h1 className="team-header">Meet the flavors</h1>
        <div className="team-members">
          <div className="member-dev">
            <img src={EyeScreamPreview}></img>

            <h3>Creme Dev</h3>
            <p>Jack is a 21 year old full time software engineer living in Hoboken, NJ. 
              Web3 enthusiast, w/ deep understanding of cryptocurrency and blockchain.
            </p>
          </div>
          <div className="member-dev-2">
            <img src={EyeScreamPreview}></img>

            <h3>Cake Dev</h3>
            <p>Ariq is a 21 year old full time software engineer living in Houston, TX. 
              Web3 enthusiast, w/ deep understanding of cryptocurrency and blockchain.
            </p>
          </div>
          <div className="member-boy">
            <img src={EyeScreamPreview}></img>
            <h3>Pie Boy</h3>
            <p>
              Peter is a 22 year financial analyst living in Manhattan, NYC.
              Enjoys long walks on the beach and listening to The Beatles.
            </p>
          </div>
          <div className="member-artist">
            <img src={EyeScreamPreview}></img>
            <h3>Baby Artist</h3>
            <p>Eli is a 22 year old artist based in Manhattan, NYC. He has started numerous
              clothing companies based around his art work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
