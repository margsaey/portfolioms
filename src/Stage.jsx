import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import img1 from "./assets/stage_img/img1.jpg";
import img2 from "./assets/stage_img/img2.jpg";
import img3 from "./assets/stage_img/img3.jpg";
import img4 from "./assets/stage_img/img4.jpg";
import img5 from "./assets/stage_img/img5.png";
import img6 from "./assets/stage_img/img6.png";

const Stage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [img1, img2, img3, img4, img5, img6];

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
                  alt={`Stage ${index + 1}`}
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

export default Stage;