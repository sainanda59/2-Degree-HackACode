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
            <p>ACT NOW</p>
        </div>

        <div className="banner-main">
            {/* <div className="banner-light">
                <h1>THE BLUE PLANET</h1>
            </div>  */}
            <div className="banner-body">  
                         
                <div className="banner-left">    
                    <h1 data-aos="fade-right" data-aos-delay="900">2 Degree</h1>
                    <h2 data-aos="fade-right" data-aos-delay="1000">Temperature Rise by 2100 <br /> under 2&#176; C</h2>
                    <p data-aos="fade-right" data-aos-delay="1100"><span>Alert Alert</span>  5.4 &#176; C warm goes the atmosphere by 2100 says the estimation.<span>2&#176; C says Team 2&#176;</span> does it sound good, then let us manifest the kindness in us and let <span>Mother Earth</span> survive and stay strong against the exceeding climate cruelty.</p>

                    <div className="sponsors" data-aos="fade-right" data-aos-delay="1100">
                        <img src={require('../../../assests/githu.png').default} alt="" className="github" />
                        <img src={require('../../../assests/stickermule.png').default} alt="" className="stickermule" />
                        <p className="hackOdisha">Hack Odisha</p>
                    </div>

                    <div className="bannner-button" data-aos="fade-right" data-aos-delay="1200">
                        <a href="#home">
                            <button>Save the Planet</button>
                        </a>
                        <div className="sponsor-us">
                        SPONSOR US
                        </div>
                    </div>              

                    

                    
                </div>
    
                <div className="banner-right" data-aos="fade-up" data-aos-delay="900">
                    <img src={require('../../../assests/save-earth.webp').default} alt="" className="bounce-2" />
                </div>

                
            </div>
        </div>   
        
        
    </div>


        </div>
    )
}

export default Home
