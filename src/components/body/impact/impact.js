import React, { useLayoutEffect } from 'react'
import './impact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Impact() {
    useEffect(()=>{
        AOS.init();
    });
    return (
   
        <div id="impact">
             <div className="impact">
        <div className="act-now">
            <p data-aos="fade-right" data-aos-delay="200">CONSEQUENCES</p>
        </div>

        <div className="impact-main">
            <div className="impact-left" id="impact">
                <h1 data-aos="fade-right" data-aos-delay="500">Impact on Earth</h1>
                <h2 data-aos="fade-right" data-aos-delay="600">Humans are the only beings who are contributing to this huge temperature rise.</h2>
                <p data-aos="fade-right" data-aos-delay="700">
                    Livings on this planet is a blessing to us but we don't realise the importance of the resources being provided by Mother Earth to us. The quote says it rightly "Human needs can't be fulfilled, craving for more is our non-removable nature".
                    <br/><br/>
                    But do we realise on what cost we are fulfilling our needs and what is the adverse side effect of this huge craving, the answer would be a big <strong>'NO'</strong>.
                </p>
                <img src= {require('../../../assests/1.jpg').default} alt="" data-aos="flip-left" data-aos-delay="600" />
            </div>

            <div className="impact-right">
                <img src={require('../../../assests/2.jpg').default} alt="" data-aos="flip-right" data-aos-delay="600" />
                <p data-aos="fade-left" data-aos-delay="700">
                    We use coal and oil but what do we produce, we produce Carbon Dioxide(CO2). We produce nuclear power but on what cost. The price paid is the death of people and the hazardous side effect of the test which is conducted is the extinction of those Oxygen producing blessings that are <strong>TREES</strong>. We cut of the trees to set up industrial amuzement parks and the stocks go up to give us a huge profit and a enourmous anual turnover but on what on cost and are we benefitted by the loss of pure air we breathe. We use fuel run automobiles and what do we do produce CO2, SO2, NO2 and the adverse effect goes on to be global warming, noise pollution, acid rain and hugely affecting problems that is melting of glaciers.
                    <br/><br/>
                </p>
                <h2 data-aos="fade-left" data-aos-delay="800">Don't you have a solution then we are here to solve your problems with our ideas.</h2>
                <button data-aos="fade-left" data-aos-delay="900">Save Earth</button>
            </div>

        </div>
    </div>
        </div>
    )
}

export default Impact
