import React from "react";
import { Link } from "react-router-dom";

const Animation = () => {
  return (
    <div className='bg-black text-white px-8 md:px-16 lg:px-6 min-h-screen'>
      <Link
        to="/"
        className="inline-block mt-2 mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full"
      >
        ← Back to Projects
      </Link>

      <div className="flex justify-center mt-8">
        <video width="640" height="360" controls>
          <source src="/animation-vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Animation;