import React from "react";
import "./header.css"

export const Header = () => {
    return <div>
        <header>
            <div className='container flexSB'>
                <nav className='flexSB'>
                   <div className='logo'>
                     <img src="./images/logo.png" alt="" />
                   </div>
                </nav>
            </div>
        </header>
    </div>
}
