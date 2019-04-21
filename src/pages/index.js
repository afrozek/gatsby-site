import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout"

import Image from "../components/image";
import SEO from "../components/seo";
// import 'bootstrap';


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Afroze Khan`, `Portfolio`]} />
    <h1>Hi peoples</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to="/about/">About</Link>
    <div className="row">
      <div className="col-md-5">left</div>
      <div className="col-md-5">right</div>
    </div>
  </Layout>
)

export default IndexPage
