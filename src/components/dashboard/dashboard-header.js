import React from 'react'
import './dashboard-header.css';
import firebase from '../../firebase/firebase';

function DashboardHead() {
    const signOut =()=>{
        firebase.auth().signOut();
    }
    return (
        <div>
            <div className="header" id="header">
        <div className="header-body">
            <div className="logo" data-aos="fade-down" data-aos-delay="300">
                <p>2&#176;</p>                
            </div>
            <div className="nav-items" id="nav-items">
                <a href="#home" className="nav-link active" data-aos="fade-down" data-aos-delay="400">HOME</a>
                <a href="#about" className="nav-link" data-aos="fade-down" data-aos-delay="500">ABOUT</a>
                <a href="#badge" className="nav-link" data-aos="fade-down" data-aos-delay="600">BADGE</a>
                <a href="https://green-chat-48f9d.web.app/" className="nav-link" data-aos="fade-down" data-aos-delay="700">CHAT</a>
                <button onClick={signOut} data-aos="fade-down" data-aos-delay="800"><a href="" className="nav-link" >SIGN-OUT</a></button>
            </div>
        </div>
    </div>
        </div>
    )
}

export default DashboardHead;
