import React from 'react'
import './header.css';


function Header() {
    return (
      
            <div className="header" id="header">
        <div className="header-body">
            <div className="logo" data-aos="fade-down" data-aos-delay="300">
                <p>2&#176;</p>                
            </div>
            <div className="nav-items" id="nav-items">
                <a href="#home" className="nav-link active" data-aos="fade-down" data-aos-delay="400">HOME</a>
                <a href="#Impact" className="nav-link" data-aos="fade-down" data-aos-delay="500">IMPACT</a>
                <a href="#motive" className="nav-link" data-aos="fade-down" data-aos-delay="600">MOTIVE</a>
                <a href="#solution" className="nav-link" data-aos="fade-down" data-aos-delay="700">ACHIEVE</a>
                <button data-aos="fade-down" data-aos-delay="800"><a href="#pledge" className="nav-link" >PLEDGE</a></button>                
            </div>
        </div>
    </div>
    )
}

export default Header
