
import React from "react";
export default function Home() {
    return (
        <main>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2 style={{color: "#0F4F7D", fontFamily: "Roboto", fontWeight: "bold"   , fontSize: "26px", paddingTop: "20px" }}>
                    The many facets of Integrated Education
                </h2>
            </div>
            <div style={{backgroundColor: "#456c8cc7", padding: "20px", marginTop: "20px"}}>
                <h2  style={{ color: "#ffffffff", fontFamily: "Roboto" , fontWeight: "normal", textAlign:"center", fontSize: "26px"}}>
                    Emerging{" "}
                    <span style={{ color: "#0F4F7D", fontFamily: "Roboto" , fontWeight: "bold" }}> Technology & </span>
                    Youth 
                    <span style={{ color: "#0F4F7D", fontFamily: "Roboto" , fontWeight: "bold" }}> Empowerment </span>
                </h2>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <h2 style={{ textAlign: "center", color: "#0F4F7D", fontFamily: "Roboto", fontWeight: "bold"   , fontSize: "26px", paddingTop: "20px" }}>
                    It&aposs the Mindset that matters most 
                </h2>
            </div>
            <div style={{backgroundColor: "#0F4F7D", padding: "20px", marginTop: "20px"}}>
                <h2  style={{ color: "#ffffffff", fontFamily: "Roboto" , fontWeight: "normal", textAlign:"center",fontSize: "26px"}}>
                   Why Truth Matters
                </h2>
            </div>
            <div style={{padding: "20px", marginTop: "20px"}}>
                <h2  style={{ color: "#98bdf5ff", fontFamily: "Roboto" , fontWeight: "normal", textAlign:"center", fontSize: "26px"}}>
                    AI{" "}
                    <span style={{ color: "#0F4F7D", fontFamily: "Roboto" , fontWeight: "bold" }}>Integration</span>
                </h2>
            </div>
        </main>
    );
}
