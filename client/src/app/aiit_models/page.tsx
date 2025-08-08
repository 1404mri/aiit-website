import React from "react";
export default function Home() {
    return (
        <main>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2 style={{color: "#0F4F7D", fontFamily: "Roboto", fontWeight: "bold"   , fontSize: "26px", paddingTop: "20px" }}>
                    Quran Analytics
                </h2>
            </div>
            <div style={{backgroundColor: "#456c8cc7", padding: "20px", marginTop: "20px"}}>
                <h2  style={{ color: "#ffffffff", fontFamily: "Roboto" , fontWeight: "normal", textAlign:"center", fontSize: "26px"}}>
                    Truth{" "}
                    <span style={{ color: "#0F4F7D", fontFamily: "Roboto" , fontWeight: "bold" }}> Matters </span>
                </h2>
            </div>
        </main>
    );
}