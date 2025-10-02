import React, { useEffect } from "react";
import img1 from "./assets/stage_img/img1.jpg"
import img2 from "./assets/stage_img/img2.jpg"
import img3 from "./assets/stage_img/img3.jpg"
import img4 from "./assets/stage_img/img4.jpg"
import img5 from "./assets/stage_img/img5.png"
import img6 from "./assets/stage_img/img6.png"
import { Link } from "react-router-dom";

const Stage = () => {
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
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
    </div>
  );
};

export default Stage;