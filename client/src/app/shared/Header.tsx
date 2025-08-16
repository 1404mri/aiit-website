import React from 'react'
import Image from 'next/image'
import Link from "next/link";


function Header() {
    return (
        <header id="header" className="header" style= {{fontFamily: "Roboto, sans-serif"}}>
            <div  className="header-middle p-0 bg-lightest xs-text-center"   style={{
                display: "flex",
                justifyContent: "center", // centers horizontally
                alignItems: "flex-start", // keeps it at the top
            }}>
                <img
                    src="/header/AIIT_Logo.png"
                    alt="AIIT Logo"
                    style={{ height: "150px", width: "150px", objectFit: "contain", margin:"0px", padding: "0px"}}
                />
            </div>
            <div className="header-nav" style={{ backgroundColor: "#0F4F7D", padding: "5px", color: "white", }}>
                <div>
                    <div className="container"     style={{
                        backgroundColor: "#0F4F7D",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "white",
                        padding: "0",// add some horizontal padding
                        }}>
                        <nav style={{ backgroundColor: "#0F4F7D", color: "white" }}>
                            <ul  style={{
                            fontFamily: "Roboto, sans-serif",
                            display: "flex",
                            gap: "40px",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0,
                            color: "white",
                            flexWrap: "wrap",
                            padding: 0,
                            listStyle: "none",
                        }}>
                                <li>
                                    <Link href="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                                </li>
                                <li>
                                    <Link href="/about_us" style={{ color: "white", textDecoration: "none" }}>About Us</Link>
                                </li>
                                <li>
                                    <Link href="/events" style={{ color: "white", textDecoration: "none" }}>Events</Link>
                                </li>
                                <li>
                                    <Link href="/courses" style={{ color: "white", textDecoration: "none" }}>Courses</Link>
                                </li>
                                {/* <li>
                                    <Link href="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</Link>
                                </li>
                                <li>
                                    <Link href="/trainer" style={{ color: "white", textDecoration: "none" }}>Trainers</Link>
                                </li>
                                <li>
                                    <Link href="/aiit_models" style={{ color: "white", textDecoration: "none" }}>AIIT Models</Link >
                                </li> */}
                                <li>
                                    <Link href="/contact_us" style={{ color: "white", textDecoration: "none" }}>Contact Us</Link>
                                </li>
                                <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
                                    <a
                                        className="btn btn-cored btn-flat bg-theme-color-2 text-white font-14 bs-modal-ajax-load mt-0 p-25 pr-15 pl-15"
                                        data-toggle="modal"
                                        data-target="#BSParentModal"
                                        href="/donation_page"
                                        style={{backgroundColor: "#a2dbeaff",borderRadius: "8px",width: "100px",
                                            height: "50px",
                                            display: "flex",
                                            justifyContent: "center", 
                                            alignItems: "center", 
                                            color: "white",
                                            fontWeight: "600",
                                            textDecoration: "none",
                                            cursor: "pointer",
                                        }}>
                                        Donate Us
                                    </a>
                                </div>

                            </ul>
                            <ul     style={{
                                marginLeft: "auto", 
                                marginTop: "8px"
                                }}>

                            </ul>
                            <div id="top-search-bar" className="collapse">
                                <div className="container">
                                    <form
                                        role="search"
                                        action="#"
                                        className="search_form_top"
                                        method="get"
                                    >
                                        <input
                                            type="text"
                                            placeholder="Type text and press Enter..."
                                            name="s"
                                            className="form-control"
                                            autoComplete="off"
                                        />
                                        <span className="search-close">
                                            <i className="fa fa-search" />
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header