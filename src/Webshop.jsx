import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import w1 from "./assets/stage_img/webshop/w1.png";
import w2 from "./assets/stage_img/webshop/w2.png";
import w3 from "./assets/stage_img/webshop/w3.png";
import w4 from "./assets/stage_img/webshop/w4.png";
import w5 from "./assets/stage_img/webshop/w5.png";
import w6 from "./assets/stage_img/webshop/w6.png";
import w7 from "./assets/stage_img/webshop/w7.png";
import w8 from "./assets/stage_img/webshop/w8.png";
import w9 from "./assets/stage_img/webshop/w9.png";
import w10 from "./assets/stage_img/webshop/w10.png";

const Webshop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [w1, w2, w3, w4, w5, w6, w7, w8, w9, w10];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="px-8 md:px-16 lg:px-6 py-4">
        <Link
          to="/"
          className="inline-block mt-2 mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full"
        >
          ← Back to Projects
        </Link>

        {/* Video section */}
        <div className="flex justify-center mt-6 mb-10">
          <video
            width="640"
            height="360"
            controls
            className="rounded-lg shadow-lg border border-gray-700"
          >
            <source src="/wv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Carousel section */}
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={src}
                  alt={`Webshop ${index + 1}`}
                  className="w-full h-[70vh] object-contain rounded-lg shadow-lg bg-black"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Webshop;