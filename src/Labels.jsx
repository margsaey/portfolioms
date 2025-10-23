import React, { useEffect } from "react";
import { Document, Page } from "react-pdf";
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

const PdfPreview = ({ file }) => (
  <Document file={file}>
    <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
  </Document>
);

const Labels = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pdfs = [l1, l2, l3, l6, l7, l8, l9, l10, l11, l12];

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
      <div>
        {pdfs.map((pdf, i) => (
          <div key={i} style={{ marginBottom: "20px" }}>
            <PdfPreview file={pdf} />
          </div>
        ))}
      </div>
      <img src={l4} alt="" />
      <img src={l5} alt="" />
    </div>
  );
};

export default Labels;