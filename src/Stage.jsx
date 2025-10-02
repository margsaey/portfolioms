import React from "react";
import img1 from "../assets/stage_img/img1.jpg"
import img2 from "../assets/stage_img/img2.jpg"
import img3 from "../assets/stage_img/img3.jpg"
import img4 from "../assets/stage_img/img4.jpg"
import img5 from "../assets/stage_img/img5.jpg"
import img6 from "../assets/stage_img/img6.jpg"
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <Link
        to="/"
        className="inline-block mt-6 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full"
      >
        ← Back to Projects
      </Link>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
      <img src={img6} alt="" />
    </div>
  );
};

export default Projects;