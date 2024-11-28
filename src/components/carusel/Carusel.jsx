import React from "react";

import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";
import Image4 from "../../assets/images/image4.jpg";
import Image5 from "../../assets/images/image5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Carusel = () => {
  return (
    <section className="carusel">
      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper select-none mb-10 rounded-lg"
        >
          <SwiperSlide>
            <div className="h-[calc(100vh-200px)]  bg-slate-200">
              <img className="w-full object-cover" src={Image1} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-96 bg-slate-200">
              <img className="w-full object-cover" src={Image2} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-96 bg-slate-200">
              <img className="w-full object-cover" src={Image3} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-96 bg-slate-200">
              <img className="w-full object-cover" src={Image4} alt="image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-96 bg-slate-200">
              <img className="w-full object-cover" src={Image5} alt="image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Carusel;
