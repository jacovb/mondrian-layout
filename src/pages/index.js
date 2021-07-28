// Step 1: Import React
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Seo title="Home" />
      <p className="bg-blue-200">
        I'm making this by following the Gatsby Tutorial.
      </p>
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
