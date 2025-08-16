
import React from "react";
import PdfSlideshow from "../PdfSlideshow";

export default function BIIT() {
    const pdfs = ["/biit_iiit/pdfs/Slide1.pdf", "/biit_iiit/pdfs/Slide2.pdf", "/biit_iiit/pdfs/Slide3.pdf"];
    return (
        <main>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor:"#456c8c",padding: "20px"}}>
                <img src="/biit_iiit/BIIT-IIIT2025SummerCamp.jpg" alt="AIIT Introduction"/>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center",padding: "20px"}}>
                <h2 style={{textAlign: "center", color: "#0F4F7D", fontFamily: "Roboto", fontWeight: "bold", marginBottom: "20px"}}>
                    BIIT-IIIT Summer School Presentations
                </h2>
                <PdfSlideshow pdfFiles={pdfs} />
            </div>
        </main>);
}
