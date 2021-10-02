import React from 'react'
import './home.css'
function Home() {
    return (
   
        <div id="home">
             <div className="banner">
        <div className="bottom-gradient">
            <img src={require('../../../assests/bg-gradient.PNG').default} alt="" />
        </div>

        <div className="act-now">
            <p data-aos="zoom-in" data-aos-delay="1000">ACT NOW</p>
        </div>

        <div className="banner-main">
            {/* <div className="banner-light">
                <h1>THE BLUE PLANET</h1>
            </div>  */}
            <div className="banner-body">  
                         
                <div className="banner-left">    
                    <h1 data-aos="zoom-in" data-aos-delay="1100">2 Degree</h1>
                    <h2 data-aos="zoom-in" data-aos-delay="1200">Temperature Rise by 2100 <br /> under 2&#176; C</h2>
                    <p data-aos="zoom-in" data-aos-delay="1300"><span>Alert Alert</span>  5.4 &#176; C warm goes the atmosphere by 2100 says the estimation.<span>2&#176; C says Team 2&#176;</span> does it sound good, then let us manifest the kindness in us and let <span>Mother Earth</span> survive and stay strong against the exceeding climate cruelty.</p>

                    <div className="sponsors" data-aos="zoom-in" data-aos-delay="1400">
                        <img src={require('../../../assests/githu.png').default} alt="" className="github" />
                        <img src={require('../../../assests/stickermule.png').default} alt="" className="stickermule" />
                    </div>

                    <div className="bannner-button" data-aos="zoom-in" data-aos-delay="1500">
                        <a href="#home">
                            <button>Save the Planet</button>
                        </a>
                        <a href="#home">
                            <button>Sponsor Us</button>
                        </a>

                    </div>              

                    

                    
                </div>
    
                <div className="banner-right" data-aos="zoom-out" data-aos-delay="1000">
                    <img src={require('../../../assests/save-earth.webp').default} alt="" className="bounce-2" />
                </div>

                
            </div>
        </div>   
        
        
    </div>


        </div>
    )
}

export default Home
