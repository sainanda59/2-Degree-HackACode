import React from 'react'
import './dash-home.css';

function DashHome() {
    return (
        <div>
            <div id="home">
             <div className="bannner">
        <div className="bottom-gradient">
            <img src={require('../../assests/bg-gradient.PNG').default} alt="" />
        </div>

        <div className="act-now">
            <p>ACT NOW</p>
        </div>

        <div className="bannner-main">
            {/* <div className="bannner-light">
                <h1>THE BLUE PLANET</h1>
            </div>  */}
            <div className="bannner-body">  

            <div className="bannner-right" data-aos="fade-up" data-aos-delay="900">
                    <img src={require('../../assests/earth-2.jpg').default} alt="" className="bounce-2" />
                </div>
                         
                <div className="bannner-left">    
                    <h1 data-aos="fade-right" data-aos-delay="900">2 Degree</h1>
                    <h2 data-aos="fade-right" data-aos-delay="1000">Pledge to be Cool and make Earth 2&#176; Cooler.</h2>
            

                    <div className="bannner-button" data-aos="fade-right" data-aos-delay="1200">
                        <a href="#home">
                            <button>Save the Planet</button>
                        </a>
                    </div>              

                    

                    
                </div>
    
                

                
            </div>
        </div>   
        
        
    </div>


        </div>
        </div>
    )
}

export default DashHome;
