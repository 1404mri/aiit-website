import React from "react";

export default function Dinner() {
    const pdfs = ["/biit_iiit/pdfs/Slide1.pdf", "/biit_iiit/pdfs/Slide2.pdf", "/biit_iiit/pdfs/Slide3.pdf"];
    return (
        <main>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", backgroundColor:"#456c8c",padding: "20px"}}>
                <h2 style={{color: "white", fontWeight: "bold "}}>LET&apos;s READ Award Ceremony and AIIT Dinner</h2>
                <img src="/newsletter/Dinner Poster.png" alt="Award Ceremony and AIIT Dinner"/>
                <p style={{color: "white", fontSize: "25px"}}>Join us for the LET&apos;s READ Award Ceremony followed by our AIIT Fundraising Dinner! </p>
                <p style={{color: "white", fontSize: "20px"}}>Join us in-person at the Diyanet Center of America or on {''} <a href="https://us02web.zoom.us/j/87814941331?pwd=lgT5AUS9Tkam06yFQzG5L6RFiTBLdA.1" 
                    target="_blank" rel="noopener noreferrer" style={{color: "blue", textDecoration: "underline"}}> Zoom</a>
                </p>

                <div style={{display: "flex", flexDirection: "column", alignItems: "left", fontSize:"15px"}}>
                        <p style={{color: "white"}}>Date: August 16th 2025</p>
                        <p style={{color: "white"}}>Time: 6:00 PM-8:00 PM</p>
                        <p style={{color: "white"}}>Meeting ID: 878 1494 1331</p>
                        <p style={{color: "white"}}>Password: zikrfikr</p>
                </div>

            </div>
        </main>);
}