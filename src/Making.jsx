import React, { useEffect } from "react";
import m1 from "./assets/stage_img/making-of/m1.png"
import m2 from "./assets/stage_img/making-of/m2.png"
import m3 from "./assets/stage_img/making-of/m3.png"
import m4 from "./assets/stage_img/making-of/m4.png"
import m5 from "./assets/stage_img/making-of/m5.png"
import m6 from "./assets/stage_img/making-of/m6.png"
import m7 from "./assets/stage_img/making-of/m7.png"
import m8 from "./assets/stage_img/making-of/m8.png"
import { Link } from "react-router-dom";

const Making = () => {
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
      <img src={m1} alt="" />
      <img src={m2} alt="" />
      <img src={m3} alt="" />
      <img src={m4} alt="" />
      <img src={m5} alt="" />
      <img src={m6} alt="" />
      <img src={m7} alt="" />
      <img src={m8} alt="" />
    </div>
  );
};

export default Making;