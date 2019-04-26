import React from "react";
import Layout from "../components/layout"




export default () => {



    return (
        <Layout>
            <div id="projects-page" className="col-md-9 p-l-100 p-r-100 inner-page">
                <div className="row m-t-75">
                    <div className="col-md-12">
                        <h1>Skillset</h1>
                    </div>
                </div>
                <div className="m-t-50">
                    <div className="row ">


                        <div className="col-md-4">
                            <h2>Development</h2>
                            <ul>
                                <li>React Redux (In Progress)</li>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>Handlebars</li>
                                <li>MongoDB Mongoose ORM</li>
                                <li>Socket.IO</li>
                                <li>Angular 1.5</li>
                                <li>Lodash</li>
                                <li>CSS/SASS</li>
                                <li>Twitter Bootstrap</li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h2>Build Tools</h2>
                            <li>NPM </li>
                            <li>Yarn</li>
                            <li>Bower</li>
                            <li>Webpack</li>
                            <li>Gulp</li>
                        </div>

                        <div className="col-md-4">
                            <h2>DevOps</h2>
                            <ul>
                                <li>Docker Swarm</li>
                                <li>Nginx</li>
                                <li>Digital Ocean</li>
                                <li>Linode</li>
                                <li>Vultr</li>
                                <li>RedHat OpenShift(outdated)</li>
                                <li>AWS Lightsail</li>
                                <li>AWS(outdated)</li>
                            </ul>
                        </div>


                    </div>
                    <div className="row m-t-30 m-b-100">
                    <div className="col-md-4">
                            <h2>UI/UX</h2>
                            <ul>
                                <li>Sketch App</li>
                                <li>Affinity Designer</li>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Ilustrator</li>
                                <li>Lucid Chart (wireframing)</li>
                                <li>inVisionApp (handoff)</li>
                                <li>Marvel (handoff)</li>
                                <li>Zeplin (handoff)</li>
                                
                                
                            </ul>
                        </div>
                        
                        <div className="col-md-4">
                            <h2>Marketing / SEO</h2>

                            <ul>
                                <li>Google Analytics</li>
                                <li>Google Adwords</li>
                                <li>Hotjar</li>
                                <li>Crazy Egg</li>
                                <li>Intercom</li>
                                <li>Unbounce</li>
                                <li>Instapage</li>
                                <li>Sendgrid</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h2>Payment Gateways</h2>
                            <ul>
                                <li>Stripe</li>
                                <li>Braintree</li>
                                <li>Paypal</li>
                            </ul>
                        </div>

                        
                    </div>
                </div>
            </div>
        </Layout>
    )
}