"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type Props = {};

const slideImages = [
  "/slideshow_images/Brochure_page01.png",
  "/slideshow_images/Brochure_page02.png",
];

function About({}: Props) {
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
      <section style={{backgroundColor:"#456c8c" }}>
        <div className="container">
          <div className="section-content">
            {/* Use a full-width row */}
            <div
              className="col-md-12"
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "100vw",
                margin: "0 auto",
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
      </section>
    </>
  );
}

export default About;
