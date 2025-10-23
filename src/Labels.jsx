import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import l1 from "./assets/etiketten/strontketske_24-25.jpg";
import l2 from "./assets/etiketten/achterkant_Strontketske_24-25.jpg";
import l3 from "./assets/etiketten/Betchard.jpg";
import l4 from "./assets/etiketten/bon_v4.png";
import l5 from "./assets/etiketten/DSC_0046.JPG";
import l6 from "./assets/etiketten/hanske.jpg";
import l7 from "./assets/etiketten/strontketske.jpg";
import l8 from "./assets/etiketten/TriveriusMango_75_v2-2.jpg";
import l9 from "./assets/etiketten/ticket_v2.jpg";
import l10 from "./assets/etiketten/tirse.jpg";
import l11 from "./assets/etiketten/tafelruiter.jpg";
import l12 from "./assets/etiketten/TriveriusMango_75_v2-1.jpg";

const Labels = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12];

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
                  alt={`Label ${index + 1}`}
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

export default Labels;