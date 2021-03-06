import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Portfolio" />
    <h1>Portfolio Page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
