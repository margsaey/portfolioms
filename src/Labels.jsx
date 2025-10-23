import React, { useEffect } from "react";
import l1 from "./assets/etiketten/strontketske_24-25.pdf"
import l2 from "./assets/etiketten/achterkant_Strontketske_24-25.pdf"
import l3 from "./assets/etiketten/Betchard.pdf"
import l4 from "./assets/etiketten/bon_v4.png"
import l5 from "./assets/etiketten/DSC_0046.JPG"
import l6 from "./assets/etiketten/hanske.pdf"
import l7 from "./assets/etiketten/strontketske.pdf"
import l8 from "./assets/etiketten/tklepken.pdf"
import l9 from "./assets/etiketten/ticket_v2.pdf"
import l10 from "./assets/etiketten/tirse.pdf"
import l11 from "./assets/etiketten/tafelruiter.pdf"
import l12 from "./assets/etiketten/TriveriusMango_75_v2.pdf"

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
      <img src={l1} alt="" />
      <img src={l2} alt="" />
      <img src={l3} alt="" />
      <img src={l4} alt="" />
      <img src={l5} alt="" />
      <img src={l6} alt="" />
      <img src={l7} alt="" />
      <img src={l8} alt="" />
      <img src={l9} alt="" />
      <img src={l10} alt="" />
      <img src={l11} alt="" />
      <img src={l12} alt="" />
    </div>
  );
};

export default Webshop;