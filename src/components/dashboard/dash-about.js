import React from 'react'
import './dash-about.css';
import firebase from 'firebase'
import 'firebase/auth';

function DashAbout() {
   const user = firebase.auth().currentUser;
   const name = user.displayName;
   const photo = user.photoURL;
    return (
        <div id="about" className="about">
        <h1 className="about-title">ABOUT</h1>
        <div className="about-content">
        <div className="name">
          <p> {name} </p>
          <p className="user-title">Green Superhero</p>
        </div>

        <div className="photo" data-aos="fade-up" data-aos-delay="900">
            <img src={photo} alt="pic" />
        </div>
        </div>
        </div>
    )
}

export default DashAbout
