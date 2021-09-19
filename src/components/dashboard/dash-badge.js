import React from 'react'
import './dash-badge.css';
function DashBadge() {
    return (
        <div id="badge" className="badge">
        <h1 className="badge-title">BADGES</h1>
        <div className="badge-content">
        <div className="badge1" data-aos="fade-up" data-aos-delay="900">
          <img src={require('../../assests/badge1.png').default} />
        </div>

        <div className="badge2" data-aos="fade-up" data-aos-delay="900">
        <img src= {require('../../assests/badge2.png').default} />
        </div>

        <div className="badge3" data-aos="fade-up" data-aos-delay="900">
          <img src={require('../../assests/Badge3.png').default} />
        </div>

        <div className="badge4" data-aos="fade-up" data-aos-delay="900">
          <img src={require('../../assests/Badge4.png').default} />
        </div>
        </div>
        </div>
    )
}

export default DashBadge
