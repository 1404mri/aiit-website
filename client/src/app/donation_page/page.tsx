"use client";

import React, { useState } from "react";

const PAYPAL_QR = "/qr_codes/paypal.jpg";
const ZELLE_QR = "/qr_codes/zelle.jpg";

function DonationPage() {
  const [selected, setSelected] = useState<"paypal" | "zelle">("paypal");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* Everything centered together */}
      <div className="flex flex-col items-center text-center max-w-xl">
        <h1 className="text-3xl font-bold mb-4">Support Our Mission</h1>
        <p className="mb-8">
          Choose your preferred donation method below. Your support helps us continue our work!
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            style ={{backgroundColor: "#456c8c", color: "white", padding: "5px",paddingLeft: "10px", paddingRight: "10px", borderRadius: "8px", fontWeight: "bold", fontFamily: "Roboto"}}
            onClick={() => setSelected("paypal")}
          >
            PayPal
          </button>
          <button
            style ={{marginLeft: "5px", marginBottom: "5px",backgroundColor: "#456c8c", color: "white", padding: "5px",paddingLeft: "10px", paddingRight: "10px", borderRadius: "8px", fontWeight: "bold", fontFamily: "Roboto"}}
            onClick={() => setSelected("zelle")}
          >
            Zelle
          </button>
        </div>

        {/* QR Code Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
          {selected === "paypal" ? (
            <>
              <img
                src={PAYPAL_QR}
                alt="PayPal QR Code"
                className="w-56 h-56 object-cover mb-4" 

              />
              <p className="text-lg font-medium">Scan to donate with PayPal</p>
            </>
          ) : (
            <>
              <img
                src={ZELLE_QR}
                alt="Zelle QR Code"
                className="w-56 h-56 object-cover mb-4" 
              />
              <p className="text-lg font-medium">Scan to donate with Zelle</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default DonationPage;
