import React from 'react'
import Image from 'next/image'

type Props = {}

function About({ }: Props) {
    return (
        <>
            <section className="">
                <div className="container">
                    <div className="section-content">
                        <div className="row">
                            <div className="col-md-6">
                                <h6 className="letter-space-4 text-gray-darkgray text-uppercase mt-0 mb-0">
                                    All About
                                </h6>
                                <h2 className="text-uppercase font-weight-600 mt-0 font-28 line-bottom">
                                    The World’s Best Education in Our University
                                </h2>
                                <h4 className="text-theme-colored">
                                    Testing
                                </h4>
                                <p>
                                    This is for editing the website for AIIT 2025
                                </p>
                                <a
                                    className="btn btn-theme-colored btn-flat btn-lg mt-10 mb-sm-30"
                                    href="#"
                                >
                                    Know More →
                                </a>
                            </div>
                            <div className="col-md-6">
                                <div className="video-popup">
                                    <a
                                        href="#"
                                        data-lightbox-gallery="youtube-video"
                                        title="Video"
                                    >
                                        <Image
                                            src="/frontend/images/about/5.jpg"
                                            width={300}
                                            height={300}
                                            alt="about us"
                                            className="img-responsive img-fullwidth"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About