"use client";
import HTMLFlipBook from "react-pageflip";
import React, { useRef, useEffect, useState } from 'react'
import PdfSlideshow from "../PdfSlideshow";
import Image from "next/image";

type Props = {};
const slideImages = [
        "/muna/Image1.jpg",
        "/muna/Image2.jpg",
        "/muna/Image3.jpg",
        "/muna/Image4.jpg",
        "/muna/Image5.jpg", 
        "/muna/Image6.jpg",
    ];

function MUNA({}: Props) {
    
    const bookRef = useRef<any>(null);

    //pdf slideshow variables 
    const pdfs = ["/mfnn/pdfs/Slide1.pdf", "/mfnn/pdfs/Slide2.pdf"];
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % pdfs.length);
    const prev = () => setIndex((i) => (i - 1 + pdfs.length) % pdfs.length);
     const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prev) =>
            prev === slideImages.length - 1 ? 0 : prev + 1
        );
        }, 3000);
        return () => clearInterval(interval);
    }, []);
     return (
    <>
      <div style={{backgroundColor:"#456c8c" }}>
            <h2 style={{ textAlign: "center", color: "white", fontFamily: "Roboto", fontWeight: "bold", margin: "0px" ,padding:"10px" }}>
            MUNA
            <span style={{ color: "#08283fff" }}> Gallery</span>
            </h2>

        <div className="container">
          <div className="section-content">
            {/* Use a full-width row */}
            <div
              className="col-md-12"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "100vw",
                marginBottom: "20px",
                textAlign: "center",

              }}
            >
              <div
                className="video-popup"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "700px", // set height or use aspect ratio below
                  maxWidth: "1400px", // max width to prevent too wide on big screens
                  margin: "0 auto",
                }}
              >
                <Image
                  src={slideImages[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  fill
                  style={{
                    objectFit: "contain",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transition: "opacity 1s ease-in-out",
                    opacity: 1,
                    zIndex: 2,}}
                  priority 
                />

                {/* Navigation dots */}
                <div
                  style={{
                    textAlign: "center",
                    marginTop: 10,
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    right: 0,
                  }}
                >
                  {slideImages.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      style={{
                        display: "inline-block",
                        width: 12,
                        height: 12,
                        margin: "0 5px",
                        backgroundColor: idx === currentIndex ? "#fcfcfcff" : "gray",
                        borderRadius: "50%",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MUNA
