import React from "react"
import Layout from "../components/layout"
import notecorner from "../images/portfolio/notecorner/notecornerdemo.gif"
import budgetManager from "../images/portfolio/budgetmanager/budgetManager.gif"
import lanternLogo from "../images/portfolio/lantern/lantern-logo.png"
import lanternLogin from "../images/portfolio/lantern/lantern-guides-login.png"
import lanternDashboard from "../images/portfolio/lantern/lantern-guides-dashboard.svg"

import tetnBrochure from "../images/portfolio/tetn/tetnBrochure.png"
import tetnAd from "../images/portfolio/tetn/tetnAd.png"
import spaceKernelDash from "../images/portfolio/spacekernel/space-kernel.png"
import moizAtf from "../images/portfolio/moiz/moiz-atf.png"
import moizFull from "../images/portfolio/moiz/moiz-website-full.png"
import bucketsLanding from "../images/portfolio/buckets/buckets-landing-exploration.png"
import bucketsDashboard from "../images/portfolio/buckets/buckets-dashboard-exploration.png"
import starwarsCharacters from "../images/portfolio/starwars/starwars-character-home.png"
import starwarsCharacterDetail from "../images/portfolio/starwars/starwars-character-detail.png"

import SogIconCardTemplate from "../images/portfolio/sog/SogIconCardTemplate.svg"
import emailTemplateFileManager from "../images/portfolio/sog/emailTemplateFileManager.png"
import fileTree from "../images/portfolio/sog/file-tree.gif"
import quantamPanelIcon from "../images/portfolio/sog/quantam-panel-icon.png"
import quantumMetricsDemo from "../images/portfolio/sog/quantumMetricsDemo.gif"
import serverIsometric from "../images/portfolio/sog/server-isometric.png"
import cloudIso from "../images/portfolio/sog/cloud-iso.svg"
import sogCreateOrbit from "../images/portfolio/sog/sog-create-orbit.gif"
import sogCreateVolume from "../images/portfolio/sog/sog-create-volume.gif"
import sogRedesignConcept from "../images/portfolio/sog/sog-resdesign-concept.png"
import systemongridHero1 from "../images/portfolio/sog/systemongrid-hero-1.png"
import selectPlan from "../images/portfolio/sog/v2_selectPlan_monthly.png"

import SEO from "../components/seo"
import { SRLWrapper } from "simple-react-lightbox"

export default () => {
  const items = [
    {
      name: "System On Grid Cloud IAAS SPA",
      images: [
        { alt: "Creating a VPS - Angular 1.5", src: sogCreateOrbit },
        { alt: "Recursive file tree component - Angular 1.5", src: fileTree },
        { alt: "VPS Panel Demo", src: quantumMetricsDemo },
        { alt: "Creating a volume - Angular 1.5", src: sogCreateVolume },
        { alt: "ISO metric design created in Affinity Designer", src: systemongridHero1 },
        { alt: "ISO metric design created in Affinity Designer", src: cloudIso },
        { alt: "Icons created for VPS panel", src: quantamPanelIcon },
        { alt: "", src: serverIsometric },
        { alt: "Email template design and html", src: emailTemplateFileManager },
        { alt: "Homepage redesign concept", src: sogRedesignConcept },
        { alt: "Card and icons created in Affinity Designer", src: SogIconCardTemplate },

      ],
      demoLink: null,
      description:
        "Created entire Cloud service SPA for a startup. Features included auth checks, billing module, compute resource creation and more. Over 50 directives/components, 35 services, and over 150 templates created",
      techStack: [
        "NodeJS",
        "ExpressJS",
        "Mongoose ORM",
        "MongoDB",
        "Angular 1.5",
        "c3 Charts",
        "socket.io",
        "Redis",
        "Sketch",
      ],
    },
    {
      name: "ADP Interview Project",
      images: [
        {
          alt: "",
          src: starwarsCharacters,
        },
        {
          alt: "",
          src: starwarsCharacterDetail,
        },
      ],
      demoLink: "https://adp.afrozek.com/",
      description:
        "I designed this in scetch then created it in both React and Angular -  API was discontinued so some pages don't work",
      techStack: ["Angular 8", "React", "Sketch"],
    },
    {
      name: "Lantern Technical Guides Workflow",
      images: [
        {
          alt: "Dashboard to upload techincal guides in React",
          src: lanternDashboard,
        },
        {
          alt: "",
          src: lanternLogin,
        },
        {
          alt: "Logo Design",
          src: lanternLogo,
        },
      ],
      demoLink: null,
      description:
        "React SPA to publish guides in markdown and render them using Gatsby. Work in progress.",
      techStack: [
        "Webpack",
        "React",
        "Redux Thunk",
        "nodeJS",
        "ExpressJS",
        "Mongoose ORM",
        "MongoDB",
        "Sketch",
      ],
    },
    {
      name: "Buckets financial manager",
      images: [
        {
          alt: "Landing page concept - custom logo and icons",
          src: bucketsLanding,
        },
        {
          alt: "Dashboard created in Angular 8",
          src: bucketsDashboard,
        },
      ],
      demoLink: null,
      description: "Financial budget manager application using Plaid API - WIP",
      techStack: ["Angular 8", "AWS", "PlaidAPI", "Sketch"],
    },
    {
      name: "Physical Therapy Blog",
      images: [
        {
          alt: "",
          src: moizAtf,
        },
        {
          alt: "",
          src: moizFull,
        },
      ],
      demoLink: null,
      description: "Physical Therapy Blog and design",
      techStack: [
        "NodeJS",
        "ExpressJS",
        "Mongoose ORM",
        "MongoDB",
        "Angular 1.5",
        "Photoshop",
      ],
    },
    // {
    //     name: "Space Kernel",
    //     images: [
    //       {
    //         alt: "",
    //         src: spaceKernelDash,
    //       },
    //     ],
    //     demoLink: null,
    //     description:
    //       "SpaceX inspired dashboard to launch vms. Spaceship created in photoshop",
    //     techStack: ["Photoshop", "Affinity Designer"],
    //   },
    {
        name: "NJ TETN LinkedIn Advertisement - NJ Department of Labor",
        images: [
          {
            alt: "",
            src: tetnBrochure,
          },
          {
            alt: "",
            src: tetnAd,
          },
        ],
        demoLink: null,
        description:
          "Paid Web Advertisement made for NJ TETN to advertise on LinkedIn .",
        techStack: ["Adobe Photoshop"],
      },
    {
      name: "Budget Manager",
      images: [
        {
          alt: "",
          src: budgetManager,
        },
      ],
      demoLink: null,
      description: "Budget managing single page application.",
      techStack: [
        "NodeJS",
        "ExpressJS",
        "Mongoose ORM",
        "MongoDB",
        "Angular 1.5",
        "chartsJS",
      ],
    },
    {
      name: "Notecorner",
      images: [
        {
          alt: "",
          src: notecorner,
        },
      ],
      demoLink: null,
      description:
        "App similar to Evernote for note taking. Main differences is that you can have multiple tabs and a grid layout. ",
      techStack: [
        "NodeJS",
        "ExpressJS",
        "Mongoose ORM",
        "MongoDB",
        "Angular 1.5",
        "Bootstrap 3",
      ],
    },
    
  ]

  const demoLink = link => {
    if (link) {
      return (
        <p>
          <a className="white-text" href={link} target="_blank">
            {" "}
            DEMO Link
          </a>
        </p>
      )
    }
  }

  const projectList = items.map((project, index) => {
    return (
      <div className="row project-row m-b-100" key={index}>
        <div className="col-md-12">
          <div>
            <span className="project-id">{"0" + (index + 1) + "."}</span>
          </div>
          <h2>{project.name}</h2>
          <hr />
          <div className="images-scroll-container">
            {project.images.map((image, index) => {
              return (
                <div
                  className="image-container"
                  key={index}
                  style={{ backgroundImage: "url(" + image.src + ")" }}
                >
                  <img className="image" src={image.src} alt={image.alt} />
                </div>
              )
            })}
          </div>
          <hr />
          <p>{project.description}</p>
          {demoLink(project.demoLink)}
          <ul className="clear-padding">
            {project.techStack.map(item => {
              return <li className="tag-badge">{item}</li>
            })}
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
          <SRLWrapper>{projectList}</SRLWrapper>
        </div>
      </div>
    </Layout>
  )
}
