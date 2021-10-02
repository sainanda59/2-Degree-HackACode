import React from 'react';
import './footer.css';
function Footer() {
    return (
        
        <div id="footer">
            <footer>
             <div className="footer-body">
            <h1 data-aos="fade-up" data-aos-delay="300">2 Degree</h1>
            <p data-aos="fade-up" data-aos-delay="400">A Project made with 💖 by team Spectrum in Open-Source.
                <br/>Feel free to contribute!
            </p>

            <div className="footer-social" data-aos="zoom-in" data-aos-delay="1000">
                <a href="https://github.com/The-CODE-Plus-Plus-Community/2-Degree-HackACode"><i className="fab fa-github"></i></a>
                <a href="#home"><i className="far fa-heart"></i></a>
                <a href="#home"><i className="fas fa-seedling"></i></a>
                <a href="#home"><i className="fas fa-globe-americas"></i></a>
        
            </div>
            
        </div>
        </footer>
        </div>
        
    )
}

export default Footer
