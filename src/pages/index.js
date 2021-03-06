import React from "react";
import Layout from "../components/layout"

import SEO from "../components/seo";




export default () => {




    return (
        <Layout>
        <SEO title="Home" keywords={[`Afroze Khan`, `Projects`]} />

            <div id="home-page" className="col-md-9 p-l-100 p-r-100 inner-page">
                <div className="row align-items-md-center d-flex h-100"> 
                    <div className="col-md-12">
                        <h1 className="mt-5">The Official Website of Afroze Khan <br/> Full-Stack Developer</h1>
                    </div>                    
                </div>
                
            </div>
        </Layout>
    )
}