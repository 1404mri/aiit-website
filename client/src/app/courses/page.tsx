
import React from "react";
import PdfSlideshow from "../events/PdfSlideshow";

export default function Courses() {
    const pdfs = ["/courses/pdfs/Slide1.pdf", "/courses/pdfs/Slide2.pdf", "/courses/pdfs/Slide3.pdf", "/courses/pdfs/Slide4.pdf", 
      "/courses/pdfs/Slide5.pdf", "/courses/pdfs/Slide6.pdf"];
    return (
        <main>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center",padding: "20px", backgroundColor:"#e6eff7ff"}}>
                <h2 style={{textAlign: "center", color: "#456c8c", fontFamily: "Roboto", fontWeight: "bold", marginBottom: "20px"}}>
                    Course Presentations
                </h2>
                <PdfSlideshow pdfFiles={pdfs} />
            </div>
        </main>);
}
