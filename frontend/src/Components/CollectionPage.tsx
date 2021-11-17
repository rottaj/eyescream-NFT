import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import DripBackground from "../images/DripBackgroundBanner.png";
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
SwiperCore.use([EffectCoverflow, Pagination])

function importAll(r:any) {
  return r.keys().map(r);
}


const images = importAll(require.context('../images/collection_slider', false, /\.(png|jpe?g|svg)$/));


export default class CollectionPage extends React.Component {
    render() {
        return (
            <div className="CollectionPage-Main">
                <img className="drip-background-banner" src={DripBackground} />
                <Swiper
                effect={'coverflow'}
                className="swiper-container"
                grabCursor={true}
                spaceBetween={4}
                slidesPerView={3}
                autoplay={{delay: 1000}}
                centeredSlides={true}
                onSlideChange={() => console.log("slide change", images[1])}
                onSwiper={swiper => console.log(swiper)}
                >
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img"src={images[0].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[1].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[2].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[3].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[5].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[6].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[7].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[8].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[9].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[10].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[11].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[12].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[13].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[14].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[15].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[16].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[17].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[18].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[19].default}/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img className="swiper-slide-img" src={images[20].default}/></SwiperSlide>


                </Swiper>
            </div>
        )
    }
}