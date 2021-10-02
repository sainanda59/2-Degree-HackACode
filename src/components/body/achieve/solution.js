import { Modal } from '@material-ui/core';
import { useState } from 'react';
import './solution.css'
function Solution() {
    const[open,setOpen] = useState(false);
    return (
        <>
        <Modal
        open={open}
        onClose={e => setOpen(false)}
        >
        <div>
            <div className="modal-main" data-aos="zoom-in-up" data-aos-delay="300">
                <div id="myModal" className="modal">

                    <div className="modal-content">
                        <img src={require('../../../assests/earthday2018-03-01.webp').default} alt="" />
                        <span onClick={e => setOpen(false)} className="close">&times;</span>
                        <h1>Congratulations!!!</h1>
                        <p>You have made the planet blue cooler by 2 degrees!!!</p>
                    </div>
                
                </div>
            </div>
              
        </div>
        </Modal>
        <div id="solution">
            <div className="solution" >

<div className="act-now">
    <p>PLEDGE</p>
</div>

<div className="solution-main">
    <div className="solution-1" id="pledge">
        <div className="solution-1-left">
            <h2 data-aos="fade-right" data-aos-delay="300">Saving our planet <span>together,</span>
                <br/>One <span>challenge</span>  at a time.
            </h2>
            <p data-aos="fade-right" data-aos-delay="400">Adding to the environmental safety is the prior step a aware citizen should take to commit into a better lifestyle for their fellow beings. We should think of others but just think in a way that if we help a small number of people in this situation of global remorse and if each of us commit into this pledge then we can make our Earth a beautiful place.</p>
        </div>
        <div className="solution-1-right" data-aos="zoom-in" data-aos-delay="700">
            <img src={require('../../../assests/save-earth-2.webp').default} alt="" className="bounce-2"/>
        </div>
    </div>

    <div className="solution-2" id="solution">
        <h3 data-aos="fade-down" data-aos-delay="300">Take a Pledge</h3>
        <p data-aos="fade-down" data-aos-delay="400">Explore the series of environmental challenges, and take a pledge to become a member of 2 degree</p>
        <div className="card-container">
            <div className="cards">

                <a href="https://energy-supply-1.netlify.app/">
                    <div className="card" data-aos="fade-right" data-aos-delay="700">
                        <div className="card-body">
                            <img src={require('../../../assests/e-2.png').default} alt="" />
                            <h3>Non-Renewable Challenge</h3>
                            <p>They are depleting and it is a matter of fact that they would disappear so let us save them.</p>
                            <button>Explore</button>
                        </div>
                    </div>
                </a>
                
                <a href="https://energy-supply-2.netlify.app/">
                    <div className="card" data-aos="fade-down" data-aos-delay="800">
                        <div className="card-body">
                            <img src={require('../../../assests/e-1.png').default} alt="" />
                            <h3>Renewable  Challenge</h3>
                            <p>Let us use renewable resources wisely for our better future</p>
                            <button>Explore</button>
                        </div>
                    </div>
                </a>
                <a href="https://growth-energy.netlify.app/">
                    <div className="card" data-aos="fade-left" data-aos-delay="900">
                        <div className="card-body">
                            <img src={require('../../../assests/e-6.png').default} alt=""/>
                            <h3>Growth Challenge</h3>
                            <p>We should grow in a manner that the environment is not affected.</p>
                            <button>Explore</button>
                        </div>
                    </div>
                </a>
                <a href="https://land-and-carbon.netlify.app/">
                    <div className="card" data-aos="fade-right" data-aos-delay="900">
                        <div className="card-body">
                            <img src={require('../../../assests/e-5.png').default} alt=""/>
                            <h3>Land & Carbon Challenge</h3>
                            <p>Fight for land and carbon but know their limits and their unjustified harm.</p>
                            <button>Explore</button>
                        </div>
                    </div>
                </a>
                <a href="https://transportation-and-building.netlify.app/">
                    <div className="card" data-aos="fade-up" data-aos-delay="1000">
                        <div className="card-body">
                            <img src={require('../../../assests/e-5.png').default} alt="" />
                            <h3>Industry Challenge</h3>
                            <p>Industries grow faster but think of the resources and the disposal of wastes.</p>
                            <button>Explore</button>
                        </div>
                    </div>
                </a>
                <a href="#home">
                    <div id="pledge" className="card" data-aos="fade-left" data-aos-delay="1100">
                        <div className="card-body">
                            <img src={require('../../../assests/e-3.png').default} alt=""/>
                            <h3>Take Pledge</h3>
                            <p>Take a Pledge to make the Earth cooler by 2 degrees </p>
                            <button onClick={e => setOpen(true)} className="pledge" id="myBtn">Pledge</button>
                        </div>
                    </div>
                </a>
                
                
            </div>
        </div>
        
    </div>

        </div>
        </div>
        </div>
        </>
    )
}

export default Solution
