import Image from 'next/image'
import React from 'react'

type Props = {}

function OurTeachers({ }: Props) {
    return (
        <>
            <section>
                <div className="container">
                    <div className="section-title mb-10">
                        <div className="row">
                                <h2  style={{ color: "#98b7ceff", fontFamily: "Roboto" , fontWeight: "normal", textAlign:"center"}}>
                                    Our{" "}
                                    <span style={{ color: "#0F4F7D", fontFamily: "Roboto" , fontWeight: "bold" }}>Four Focus Areas</span>
                                </h2>
                            <div  style={{ display: "flex", justifyContent: "center" }}>
                                <img
                                    src="/AIIT_Focus_Areas.jpg"
                                    alt="Focus Areas"
                                    style={{ height: "500px", width: "2000px", textAlign: "center", objectFit:"contain" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OurTeachers