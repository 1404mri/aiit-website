import Image from 'next/image'
import React from 'react'

type Props = {}

function Gallery({ }: Props) {
    return (
        <>
            <section id="gallery" className="bg-lighter">
                <div className="container">
                    <div className="section-title mb-10">
                        <div className="row">
                            <div className="col-md-12">
                                <h2  style={{ color: "#98b7ceff", fontFamily: "Roboto" , fontWeight: "normal", textAlign:"center"}}>
                                    Ness/{" "}
                                    <span style={{ color: "#0F4F7D", fontFamily: "Roboto" , fontWeight: "bold" }}>Views/</span>
                                    Cues
                                </h2>
                            </div>
                        </div>
                </div>
            </div>
            </section>

        </>
    )
}

export default Gallery