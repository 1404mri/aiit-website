import Image from 'next/image'
import React from 'react'

type Props = {}

function Blog({ }: Props) {
    return (
        <> 
            <section id="blog" style={{backgroundColor: "#0F4F7D"}}>
                <div className="container" style={{backgroundColor: "#0F4F7D", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
                    <div className="section-title mb-10">
                    
                            <div >
                                <h2  style={{ color: "#98b7ceff", fontFamily: "Roboto" , fontWeight: "normal", textAlign:"center"}}>
                                    Upcoming{" "}
                                    <span style={{ color: "#ffffffff", fontFamily: "Roboto" , fontWeight: "bold" }}>News and Announcements</span>
                                </h2>
                            </div>
                 \
                    </div>
                    <div className="section-content" style= {{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingBottom: "20px"}}>
                        <div className="row">
                            <div
                                className="col-xs-12 col-sm-6 col-md-4 wow fadeInLeft"
                                data-wow-duration="1s"
                                data-wow-delay="0.3s"
                                style={{
                                    visibility: "visible",
                                    animationDuration: "1s",
                                    animationDelay: "0.3s"
                                }}
                            >
                                <article className="post clearfix mb-sm-30">
                                    <div className="entry-header">
                                        <div className="post-thumb thumb">
                                            <Image
                                                src="/newsletter/Dinner Poster.png"
                                                width={360}
                                                height={190}
                                                alt="product"
                                                className="img-fullwidth"
                                            />
                                        </div>
                                    </div>
                                    <div className="entry-content p-20 pr-10 bg-white">
                                        <div className="entry-meta media mt-0 no-bg no-border">
                                            <div className="entry-date media-left text-center flip bg-theme-colored pt-5 pr-15 pb-5 pl-15">
                                                <ul>
                                                    <li className="font-16 text-white font-weight-600 border-bottom">
                                                        16
                                                    </li>
                                                    <li className="font-12 text-white text-uppercase">Aug</li>
                                                </ul>
                                            </div>
                                            <div className="media-body pl-15">
                                                <div className="event-content pull-left flip">
                                                    <h4>
                                                            Let's Read Award Ceremony and Communitnity Dinner{" "}
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mt-10">
                                           Join us for the Let's Read Award Ceremony and Community Dinner on August 16th, 2025, at the 
                                           Diyanet Center of America!
                                        </p>
                                        <a href="/dinner_info" className="btn-read-more">
                                            Read more
                                        </a>
                                        <div className="clearfix" />
                                    </div>
                                </article>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog