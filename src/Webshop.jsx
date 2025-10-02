import React, { useEffect } from "react";
import w1 from "./assets/stage_img/webshop/w1.png"
import w2 from "./assets/stage_img/webshop/w2.png"
import w3 from "./assets/stage_img/webshop/w3.png"
import w4 from "./assets/stage_img/webshop/w4.png"
import w5 from "./assets/stage_img/webshop/w5.png"
import w6 from "./assets/stage_img/webshop/w6.png"
import w7 from "./assets/stage_img/webshop/w7.png"
import w8 from "./assets/stage_img/webshop/w8.png"
import w9 from "./assets/stage_img/webshop/w9.png"
import w10 from "./assets/stage_img/webshop/w10.png"

import { Link } from "react-router-dom";

const Webshop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className='bg-black text-white px-8 md:px-16 lg:px-6'>
        <Link
          to="/"
          className="inline-block mt-2 mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full"
        >
          ← Back to Projects
        </Link>
      </div>
      <video width="640" height="360" controls>
        <source src="/wv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img src={w1} alt="" />
      <img src={w2} alt="" />
      <img src={w3} alt="" />
      <img src={w4} alt="" />
      <img src={w5} alt="" />
      <img src={w6} alt="" />
      <img src={w7} alt="" />
      <img src={w8} alt="" />
      <img src={w9} alt="" />
      <img src={w10} alt="" />
    </div>
  );
};

export default Webshop;