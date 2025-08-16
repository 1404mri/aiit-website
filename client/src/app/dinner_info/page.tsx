import React from "react";

export default function Dinner() {
    const pdfs = ["/biit_iiit/pdfs/Slide1.pdf", "/biit_iiit/pdfs/Slide2.pdf", "/biit_iiit/pdfs/Slide3.pdf"];
    return (
        <main>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor:"#456c8c",padding: "20px"}}>
                <img src="/newsletter/Dinner Poster.png" alt="Award Ceremony and AIIT Dinner"/>
            </div>
        </main>);
}