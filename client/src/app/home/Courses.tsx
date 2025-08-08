"use client";
import React, { useState } from "react";

type Props = {};

const pdfFiles = [
  {
    title: "Newsletter",
    url: "/pdf_files/newletter.pdf",
  }
];

function Courses({}: Props) {
  const [selectedPdf, setSelectedPdf] = useState<string |null>(pdfFiles[0]?.url || null);

  return (
    <>
      <section className="bg-lighter" style={{ padding: "0px"}}>
        <div
          className="container"
          style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", marginTop: 0 }}
        >
          <h2 style={{ marginBottom: 30, fontFamily:"Roboto", color: "#0F4F7D", fontWeight: "bold" }}>Newsletter</h2>


          {/* Embedded PDF viewer */}
          {selectedPdf && (
            <div
              style={{
                height: "700px",
                border: "1px solid #ccc",
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <embed
                src={selectedPdf}
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Courses;