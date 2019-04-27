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

    const items = [
        {
            
            name: "Lantern Technical Guides Workflow",
            images: [lanternDashboard, lanternLogin],
            description: "React SPA to publish guides in markdown and render them using Gatsby. Work in progress.",
            techStack: ['Webpack', 'React', 'Redux Thunk', 'nodeJS', 'ExpressJS', 'Mongoose ORM', 'MongoDB', 'Sketch']
        },
        {
            
            name: "Cloud IAAS SPA",
            images: [sogCreateOrbit, sogCreateVolume],
            description: "Created Cloud service SPA for a startup. Features included auth checks, billing module, compute resource creation and more. ",
            techStack: ['NodeJS', 'ExpressJS', 'Mongoose ORM', 'MongoDB','Angular 1.5','c3 Charts', 'socket.io']
        },
        {
            
            name: "Budget Manager",
            images: [budgetManager],
            description: "Budget managing single page application.",
            techStack: ['NodeJS', 'ExpressJS', 'Mongoose ORM', 'MongoDB','Angular 1.5','chartsJS']
        },
        {
            
            name: "Notecorner",
            images: [notecorner],
            description: "App similar to Evernote for note taking. Main differences is that you can have multiple tabs and a grid layout. ",
            techStack: ['NodeJS', 'ExpressJS', 'Mongoose ORM', 'MongoDB','Angular 1.5', 'Bootstrap 3']
        },
        {            
            name: "Note Taker",
            images: [noteTaker],
            description: "Wanted to make something like Google Keep and Trello for practice, unique thing about this app is that you can drag and drop from mobile devices thanks to the touchpunch library. You can also save your notes to retrieve them later.",
            techStack: ['NodeJS', 'ExpressJS', 'Mongoose ORM', 'MongoDB','Angular 1.5', 'Bootstrap 3', 'Touch Punch JS']
        },
        {            
            name: "NJ TETN Brochure - NJ Department of Labor",
            images: [tetnBrochure],
            description: "Brochure made for NJ Technology and Entrepreneurship Talent Network. Custom made icons using Photoshop.",
            techStack: ['Adobe Photoshop']
        },
        {            
            name: "NJ TETN LinkedIn Advertisement - NJ Department of Labor",
            images: [tetnAd],
            description: "Paid Web Advertisement made for NJ TETN to advertise on LinkedIn .",
            techStack: ['Adobe Photoshop']
        },
        
    ]

    const projectList = items.map((project, index) => {
        return (
            <div className="row project-row m-b-100" key={index}>
                <div className="col-md-12">
                    <div>
                        <span className="project-id">
                            {'0' + (index + 1) + '.'}
                        </span>
                    </div>
                    <h2>{project.name}</h2>
                    <hr/>
                   <div className="images-scroll-container">
                        {
                            project.images.map( (image, index) => {
                                return (
                                    <a key={index} href={image} target="_blank">
                                        <img className="scroll-image" src={image} alt="Budget Manager"/>
                                    </a>
                                )
                            }
                            )
                        }
                   </div>
                    <hr/>
                    <p>{project.description}</p>
                    <ul className="clear-padding">
                        {
                            project.techStack.map(item => {
                                return <li className="tag-badge">{item}</li>
                            })
                        }
                    </ul>
                </div>
            </div>     
        )
    })

  


    return (
        <Layout>
        <SEO title="Home" keywords={[`Afroze Khan`, `Projects`]} />

            <div id="projects-page" className="col-md-9 pl-md-5 pr-md-5 inner-page">
                <div className="row m-t-75"> 
                    <div className="col-md-12">
                        <h1>Projects</h1>
                    </div>                    
                </div>
                <div className="m-t-50">
                {projectList}
                </div>
            </div>
        </Layout>
    )
}