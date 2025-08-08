import React from 'react'

type Props = {}

function Footer({ }: Props) {
    return (
        <>
            <footer style={{backgroundColor: "#2c4152ff", color: "#ffffff"}}>
                <div style={{padding: "5px", color: "#ffffff"}}>
                    <img
                        src="/header/AIIT_logo1.png"
                        alt="AIIT Logo"
                        style={{ height: "60px", margin: "auto", objectFit: "contain", padding: "10px" }}
                     />
                     American Institute of Integrated Thought
                </div>
              
            </footer>

        </>
    )
}

export default Footer