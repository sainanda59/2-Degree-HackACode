import React from 'react'
import Footer from '../footer/footer';
import DashAbout from './dash-about';
import DashBadge from './dash-badge';
import DashHome from './dash-home';

import DashboardHead from './dashboard-header';
import './dashboard.css';
function Dashboard() {
    return (
        <>
        <div>
            <DashboardHead/>
        </div>
        <div>
         <DashHome/>
        </div>
        
         <div>
             <DashAbout/>
         </div>
 
        <div>
            <DashBadge />
        </div>

        <div>
            <Footer/>
        </div>

        </>
    )
}

export default Dashboard
