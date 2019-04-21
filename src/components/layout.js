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
import 'bootstrap/dist/css/bootstrap.css';
import "../styles/main.scss";

import 'jquery/dist/jquery.min.js';
// import "./layout.css"



const Layout = ({ children }) => (
  <div className="container-fluid h-100">
    <div className="row h-100">
      <div id="nav-container" className="col-md-3 h-100">
        <nav className="navbar navbar-expand-lg navbar-light flex-column">
          <a className="navbar-brand" href="/">
            <h1>AK</h1>
            <h2>Afroze Khan</h2>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav flex-column">
              <li className="nav-item active">
                <a className="nav-link" href="#">About <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Skillset</a>
              </li>  
              <li className="nav-item">
                <a className="nav-link" href="#"><img src="/images/gatsby-icon.png" alt=""/></a>
              </li>          
            </ul>
          </div>
        </nav>
      </div>
      <div className="col-md-9">
        {children}
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
