import React from "react";
import Layout from "../components/layout"
import notecorner from '../images/notecornerdemo.gif';
import noteTaker from '../images/notetaker.gif';
import budgetManager from '../images/budgetManager.gif';
import lanternLogin from '../images/lantern-guides-login.png';
import lanternDashboard from '../images/lantern-guides-dashboard.svg'
import sogCreateOrbit from '../images/sog-create-orbit.gif';
import sogCreateVolume from '../images/sog-create-volume.gif';
import tetnBrochure from '../images/tetnBrochure.png';
import tetnAd from '../images/tetnAd.png';

import SEO from "../components/seo";




export default () => {




    return (
        <Layout>
        <SEO title="Home" keywords={[`Afroze Khan`, `Projects`]} />

            <div id="home-page" className="col-md-9 p-l-100 p-r-100 inner-page">
                <div className="row align-items-md-center d-flex h-100"> 
                    <div className="col-md-12">
                        <h1 className="mt-5">The Official Website of Afroze Khan <br/> Web Developer<br/>& Designer</h1>
                    </div>                    
                </div>
                
            </div>
        </Layout>
    )
}