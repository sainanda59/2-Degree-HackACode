import React from 'react';
import Body from '../body/body';
import Footer from '../footer/footer';
import Header from '../header/header';
// import Sidebar from '../sidebar/sidebar';
import './homepage.css';

function Homepage() {
    return (
        <div className="home-container">
            {/* <div>
                <Sidebar/>
            </div> */}
            
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Homepage
