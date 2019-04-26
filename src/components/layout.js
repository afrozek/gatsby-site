/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

import $ from 'jquery/dist/jquery.min' // importing this worked like a charm// import "./layout.css"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import "../styles/main.scss";

import { Link } from "gatsby";
import githubIcon from '../images/github-icon.svg';
import linkedinIcon from '../images/linkedin-icon.svg';
import dribbbleIcon from '../images/dribbble-icon.svg';



const Layout = ({ children }) => (
  <div className="container-fluid h-100">
    <div className="row h-100">
      <div id="nav-container" className="col-md-3">
        <nav className="navbar navbar-expand-lg navbar-dark flex-column">
          <Link className="navbar-brand" to="/">
            <h1>AK</h1>
            <h2>Afroze Khan</h2>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>              
              </li>
              <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/skillset">Skillset</Link>
              </li> 
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>   
              <li className="nav-item mt-md-5">
                <a className="nav-link" href="https://github.com/afrozek" target="_blank"><img src={githubIcon} alt="github" /></a>
              </li>  
              <li className="nav-item">
                <a className="nav-link" href="https://www.linkedin.com/in/afroze-khan-4b204294" target="_blank"><img src={linkedinIcon} alt="linkedin" /></a>
              </li> 
              {/* <li className="nav-item">
                <a className="nav-link" href="#"><img src={dribbbleIcon} alt="dribbble" /></a>
              </li>          */}
            </ul>
          </div>
        </nav>
      </div>
      
        {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
