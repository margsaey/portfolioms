import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import m1 from "./assets/stage_img/making-of/m1.png";
import m2 from "./assets/stage_img/making-of/m2.png";
import m3 from "./assets/stage_img/making-of/m3.png";
import m4 from "./assets/stage_img/making-of/m4.png";
import m5 from "./assets/stage_img/making-of/m5.png";
import m6 from "./assets/stage_img/making-of/m6.png";
import m7 from "./assets/stage_img/making-of/m7.png";
import m8 from "./assets/stage_img/making-of/m8.png";

const Making = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [m1, m2, m3, m4, m5, m6, m7, m8];

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

        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={src}
                  alt={`Making-of ${index + 1}`}
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

export default Making;