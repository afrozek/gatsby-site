import React from "react";
import Layout from "../components/layout"
import notecorner from '../images/notecornerdemo.gif';
import budgetManager from '../images/budgetManager.gif';


export default () => {

    const items = [
        {
            
            name: "Cloud IAAS SPA",
            images: [budgetManager, notecorner],
            description: "Created Cloud service SPA from UI handoff. Features included auth checks, billing module, compute resource creation and more. ",
            techStack: ['NodeJS', 'ExpressJS', 'Mongoose ORM', 'MongoDB','Angular 1.5','c3 Charts', 'socket.io']
        },
        {
            
            name: "Budget Manager",
            images: [budgetManager],
            description: "Budget managing single page application",
            techStack: ['NodeJS', 'ExpressJS', 'Mongoose ORM', 'MongoDB','Angular 1.5','chartsJS']
        },
        {
            
            name: "Notecorner",
            images: [notecorner],
            description: "App similar to Evernote for note taking. ",
            techStack: ['NodeJS', 'ExpressJS', 'Mongoose ORM', 'MongoDB','Angular 1.5', 'Bootstrap 3']
        }
    ]

    const projectList = items.map(project => {
        return (
            <div className="row project-row m-b-100" key={project.id}>
                <div className="col-md-12">
                    <div>
                        <span className="project-id">
                            {project.id}
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
            <div id="projects-page" className="col-md-9 p-l-100 p-r-100 inner-page">
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