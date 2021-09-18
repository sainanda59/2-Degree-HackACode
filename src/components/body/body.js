import React from 'react';
import Solution from './achieve/solution';
import './body.css';
import Home from './home/home';
import Impact from './impact/impact';
import Motive from './motive/motive';

function Body() {
    return (
        <div>
            <Home/>
            <Impact/>
            <Motive/>
            <Solution />
        </div>
    )
}

export default Body
