"use client";
import HTMLFlipBook from "react-pageflip";
import React, { useRef, useEffect, useState } from 'react'
import PdfSlideshow from "../PdfSlideshow";


function Book() {
    
    const bookRef = useRef<any>(null);
    const imageUrls = [
        "/integrated_education/Integrated_Education_Webinar1.png",
        "/integrated_education/Integrated_Education_Webinar2.png",
        "/integrated_education/IntegratedEducation_Webinar_03.png",
        "/integrated_education/IntegratedEducation_Webinar_04.png",
        "/integrated_education/IntegratedEducation_Webinar5.png",
        "/integrated_education/IntegratedEducation_Webinar6.png",
    ];
    //pdf slideshow variables 
    const pdfs = ["/integrated_education/pdfs/pdf1.pdf", "/integrated_education/pdfs/pdf2.pdf", 
        "/integrated_education/pdfs/pdf3.pdf", "/integrated_education/pdfs/pdf4.pdf",
        "/integrated_education/pdfs/pdf5.pdf", "/integrated_education/pdfs/pdf6.pdf"];
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % pdfs.length);
    const prev = () => setIndex((i) => (i - 1 + pdfs.length) % pdfs.length);

    useEffect(() => {
        let currentPage = 0;
        const interval = setInterval(() => {
            if (bookRef.current) {
                if (currentPage < imageUrls.length - 1) {
                    bookRef.current.pageFlip().flipNext();
                    currentPage++;
                } else {
                    // Loop back to the first page
                    bookRef.current.pageFlip().flip(0);
                    currentPage = 0;
                }
            }
        }, 2000); // Flip every 2 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <main>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor:"#456c8c"}}>

            <h2 style ={{textAlign:"center",color: "white", fontFamily: "Roboto", fontWeight: "bold", marginBottom:"5px"}}>
                <span style ={{color:"#08283fff"}}>Our</span> Speakers</h2>
            <HTMLFlipBook 
                ref={bookRef}
                width={370} 
                height={500}
                minWidth={315}
                maxWidth={1000}
                minHeight={420}
                maxHeight={1350}
                maxShadowOpacity={0.5}
                drawShadow={true}
                showCover={true}
                size='fixed'
                startPage={0}
                style={{ margin: "0 auto", marginTop: "20px", marginBottom: "40px", backgroundColor: "#e8e8e8ff" }}
                className="flipbook"
                flippingTime={1000}
                usePortrait={true}
                startZIndex={0}
                autoSize={true}
                clickEventForward={true}
                useMouseEvents={true}
                swipeDistance={30}
                showPageCorners={true}
                mobileScrollSupport={true}
                disableFlipByClick={false}
            >
                {imageUrls.map((url, idx) => (
                    <div className="page" key={idx}>
                        <div className="page-content" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                            <img 
                                src={url} 
                                alt={`Page ${idx + 1}`} 
                                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                            />
                        </div>
                    </div>
                ))}
            </HTMLFlipBook>
         </div>
         <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#0F4F7D" }}>
            <h2 style={{ textAlign: "center", color: "white", fontFamily: "Roboto", fontWeight: "bold", fontSize: "26px", paddingTop: "20px" }}>
                Past Webinars
            </h2>
            <PdfSlideshow pdfFiles={pdfs} />
         </div>
        </main>

    );
}

export default Book
