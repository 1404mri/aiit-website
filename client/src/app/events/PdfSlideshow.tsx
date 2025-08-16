"use client";

import React, { useState } from "react";

interface PdfSlideshowProps {
  pdfFiles: string[];
}

const PdfSlideshow = ({ pdfFiles }: PdfSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPdf = () => {
    setCurrentIndex((prev) => (prev + 1) % pdfFiles.length);
  };

  const prevPdf = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? pdfFiles.length - 1 : prev - 1
    );
  };

  return (
    <div style={{width: "50vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",}}>
      <iframe
        src={pdfFiles[currentIndex]}
        width="95%"
        height="500px"
        style={{ border: "1px solid #ccc", marginTop: 20 }}
        title={`PDF ${currentIndex + 1}`}
      />
      <div style={{ marginTop: "20px", marginBottom: "20px"}}>
        <button onClick={prevPdf} style ={{backgroundColor: "#456c8c",
          color: "white",
          border: "none",
          borderRadius: "12px", // rounded edges
          padding: "5px 20px",
          cursor: "pointer",
          fontSize: "16px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          transition: "background-color 0.3s"}}>Previous</button>
        <button onClick={nextPdf} style={{ marginLeft: 70 ,backgroundColor: "#456c8c", 
          color: "white",
          border: "none",
          borderRadius: "12px", // rounded edges
          padding: "5px 20px",
          cursor: "pointer",
          fontSize: "16px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          transition: "background-color 0.3s" }}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PdfSlideshow;
